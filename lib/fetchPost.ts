import { CleaningServices } from "@mui/icons-material";
import { mockPosts } from "./mock-posts";
import { marked } from "marked";
import { google } from "googleapis";
import { Section } from "./sections";

// Author type definition
export type Author = {
  id: string;
  name: string;
  profile_image: string;
};

// Helper: get authorized Google Sheets client
async function getSheetsClient() {
  // Load the service account key from environment variable
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;

  if (!serviceAccountKey) {
    throw new Error(
      "Google Service Account key is not set in environment variables."
    );
  }

  const credentials = JSON.parse(
    Buffer.from(serviceAccountKey, "base64").toString()
  );

  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key.replace(/\n/g, "\n"), // Handle escaped newlines
    ["https://www.googleapis.com/auth/spreadsheets.readonly"] // Read-only access
  );

  // Authorize the client
  await auth.authorize();

  return google.sheets({
    version: "v4",
    auth: auth,
  });
}

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
      {
        id: "3",
        name: "Mock Author",
        profile_image:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
      },
    ];
  }

  const sheets = await getSheetsClient();

  const sheetId =
    source === "staging"
      ? process.env.GOOGLE_SHEET_ID_STAGING
      : process.env.GOOGLE_SHEET_ID_PROD;

  const range = "authors!A2:C"; // Assuming columns: id, name, profile_image

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: range,
  });

  const data = response.data.values;

  if (!data) {
    console.warn("No data found for authors.");
    return [];
  }

  return data.map((row: string[]) => ({
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
  const sheets = await getSheetsClient();

  const sheetId =
    source === "staging"
      ? process.env.GOOGLE_SHEET_ID_STAGING
      : process.env.GOOGLE_SHEET_ID_PROD;

  const tabName = section || "accueil";
  const range = `${tabName}!A2:K`; // Reduced to 11 columns since we removed author details

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: range,
  });

  const data = response.data.values;

  if (!data) {
    console.warn(`No data found for section: ${tabName}`);
    return [];
  }

  const posts = data.map((row: string[]) => mapSheetRowToPost(row, authors));
  return posts;
}
