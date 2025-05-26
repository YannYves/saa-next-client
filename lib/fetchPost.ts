import { CleaningServices } from "@mui/icons-material";
import { mockPosts } from "./mock-posts";
import { marked } from "marked";

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

// Helper: map a row from GSheet to a post object
function mapSheetRowToPost(row: string[]) {
  const [
    id,
    title,
    unused_slug, // slug column (no longer used)
    unused_excerpt, // custom_excerpt (no longer used)
    published_at,
    feature_image,
    html,
    featured,
    author_name,
    author_profile_image,
    unused_section, // section column (no longer used)
    unused_tags, // tags (no longer used)
  ] = row;

  // Helper function to ensure valid ISO date string
  function ensureValidDate(dateStr: string | undefined): string {
    if (!dateStr) return new Date().toISOString();

    try {
      // Try to parse the date string
      const date = new Date(dateStr);
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return new Date().toISOString();
      }
      return date.toISOString();
    } catch (e) {
      return new Date().toISOString();
    }
  }

  return {
    id: id || "",
    title: title || "",
    slug: generateSlug(title || ""),
    published_at: ensureValidDate(published_at),
    feature_image: feature_image || "",
    html: marked(html || ""),
    featured: featured === "TRUE" || featured === "true",
    primary_author: {
      name: author_name || "Anonymous",
      profile_image: author_profile_image || "",
    },
  };
}

export async function fetchPosts(section?: string) {
  const source = process.env.DATA_SOURCE || "mock";

  if (source === "mock") {
    // If a section is specified, filter mock posts by section
    if (section) {
      return mockPosts.filter((post) => post.section === section);
    }
    return mockPosts;
  }

  // Use Google Sheets as data source
  const sheetId =
    source === "staging"
      ? process.env.GOOGLE_SHEET_ID_STAGING
      : process.env.GOOGLE_SHEET_ID_PROD;

  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  // Use the section as the tab name, default to 'accueil' if not provided
  const tabName = section || "accueil";
  console.log(tabName, "tabname");
  // Adjust range to cover all columns (A2:L for 12 columns)
  const range = `${tabName}!A2:L`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  console.log(url, "url");

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok || !data.values) {
    throw new Error("Failed to fetch posts from Google Sheet");
  }

  const posts = data.values.map(mapSheetRowToPost);
  return posts;
}
