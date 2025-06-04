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
  // Use Google Sheets as data source
  const sheets = await getSheetsClient();

  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    console.warn("GOOGLE_SHEET_ID is not set. Using mock authors.");
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
function generateSlug(tabName: string, index: number): string {
  // Use a combination of tab name and row index for a unique slug
  // Sanitize the tab name for the slug
  const cleanTabName = tabName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens

  // Combine tab name and index. Adding 2 because data starts from row 2 (index 1) in sheets.
  return `${cleanTabName}-${index + 2}`; // Row index + 2 ( accounting for header and 0-based index)
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
function mapSheetRowToPost(
  row: string[],
  authors: Author[],
  tabName: string,
  index: number
) {
  const [
    id, // We still keep the id from the sheet for data, but not for the slug
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
    id: id || "", // Keep the id from the sheet data
    title: title || "",
    slug: generateSlug(tabName || "", index), // Use tabName and index for slug
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

  // If DATA_SOURCE is explicitly set to mock, use mock data
  if (source === "mock") {
    if (section) {
      return mockPosts.filter((post) => post.section === section);
    }
    return mockPosts;
  }

  // Otherwise, attempt to fetch from Google Sheets
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    console.warn("GOOGLE_SHEET_ID is not set. Falling back to mock posts.");
    if (section) {
      return mockPosts.filter((post) => post.section === section);
    }
    return mockPosts;
  }

  // Fetch authors first
  const authors = await fetchAuthors();

  // Use Google Sheets as data source
  const sheets = await getSheetsClient();

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

  // Pass tabName and index to mapSheetRowToPost
  const posts = data.map((row: string[], index: number) =>
    mapSheetRowToPost(row, authors, tabName, index)
  );
  return posts;
}
