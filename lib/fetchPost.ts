import { CleaningServices } from "@mui/icons-material";
import { mockPosts } from "./mock-posts";
import { marked } from "marked";

// Author type definition
export type Author = {
  id: string;
  name: string;
  profile_image: string;
};

// Helper: fetch authors from Google Sheet
export async function fetchAuthors(): Promise<Author[]> {
  const source = process.env.DATA_SOURCE || "mock";

  if (source === "mock") {
    // Return mock authors for development
    return [
      {
        id: "1",
        name: "John Doe",
        profile_image: "https://example.com/profile1.jpg",
      },
      {
        id: "2",
        name: "Jane Smith",
        profile_image: "https://example.com/profile2.jpg",
      },
    ];
  }

  const sheetId =
    source === "staging"
      ? process.env.GOOGLE_SHEET_ID_STAGING
      : process.env.GOOGLE_SHEET_ID_PROD;

  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const range = "authors!A2:C"; // Assuming columns: id, name, profile_image
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok || !data.values) {
    throw new Error("Failed to fetch authors from Google Sheet");
  }

  return data.values.map((row: string[]) => ({
    id: row[0] || "",
    name: row[1] || "Anonymous",
    profile_image: row[2] || "",
  }));
}

// Helper: generate a URL-friendly slug from a title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD") // Normalize to decomposed form for handling accents
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9]+/g, "-") // Replace any non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
}

// Helper: ensure valid date
function ensureValidDate(dateStr: string | undefined): string {
  if (!dateStr) return new Date().toISOString();

  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return new Date().toISOString();
    }
    return date.toISOString();
  } catch (e) {
    return new Date().toISOString();
  }
}

// Helper: map a row from GSheet to a post object
function mapSheetRowToPost(row: string[], authors: Author[]) {
  const [
    id,
    title,
    published_at,
    feature_image,
    content,
    featured,
    author_id, // Now we expect an author_id instead of author details
  ] = row;

  // Find the author by ID
  const author = authors.find((a) => a.id === author_id) || {
    id: "",
    name: "Anonymous",
    profile_image: "",
  };

  return {
    id: id || "",
    title: title || "",
    slug: generateSlug(title || ""),
    published_at: ensureValidDate(published_at),
    feature_image: feature_image || "",
    content: content || "",
    featured: featured === "TRUE" || featured === "true",
    primary_author: {
      name: author.name,
      profile_image: author.profile_image,
    },
  };
}

export async function fetchPosts(section?: string) {
  const source = process.env.DATA_SOURCE || "mock";

  if (source === "mock") {
    if (section) {
      return mockPosts.filter((post) => post.section === section);
    }
    return mockPosts;
  }

  // Fetch authors first
  const authors = await fetchAuthors();

  // Use Google Sheets as data source
  const sheetId =
    source === "staging"
      ? process.env.GOOGLE_SHEET_ID_STAGING
      : process.env.GOOGLE_SHEET_ID_PROD;

  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const tabName = section || "accueil";
  const range = `${tabName}!A2:K`; // Reduced to 11 columns since we removed author details
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok || !data.values) {
    throw new Error("Failed to fetch posts from Google Sheet");
  }

  const posts = data.values.map((row: string[]) =>
    mapSheetRowToPost(row, authors)
  );
  return posts;
}
