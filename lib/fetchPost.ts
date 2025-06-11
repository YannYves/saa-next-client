import { CleaningServices } from "@mui/icons-material";
import { mockPosts } from "./mock-posts";
import { google } from "googleapis";
import { v4 as uuidv4 } from "uuid";

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

// Helper: generate a unique ID for a post
function generatePostId(tabName: string): string {
  return `${tabName}-${uuidv4()}`;
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

// Helper: ensure content is properly formatted as HTML
function ensureHtmlContent(content: string): string {
  if (!content) return "";

  // If the content doesn't contain any HTML tags, wrap it in a paragraph
  if (!content.includes("<") && !content.includes(">")) {
    return `<p>${content}</p>`;
  }

  return content;
}

// Helper: map a row array to an object using headers
function mapRowToObject(
  row: string[],
  headers: string[]
): Record<string, string> {
  const obj: Record<string, string> = {};
  headers.forEach((header, i) => {
    obj[header] = row[i] || "";
  });
  return obj;
}

// Helper: map a row object from GSheet to a post object
function mapSheetRowToPostObj(
  rowObj: Record<string, string>,
  authors: Author[],
  tabName: string,
  index: number
) {
  // Find the author by ID
  const author = authors.find((a) => a.id === rowObj["author_id"]) || {
    id: "",
    name: "Anonymous",
    profile_image: "",
  };

  const postId = generatePostId(tabName);

  return {
    id: postId,
    title: rowObj["title"] || "",
    slug: generateSlug(tabName, index),
    published_at: ensureValidDate(rowObj["published_at"]),
    feature_image: rowObj["feature_image"] || "",
    content: ensureHtmlContent(rowObj["content"] || ""),
    featured: rowObj["featured"] === "TRUE" || rowObj["featured"] === "true",
    primary_author: {
      name: author.name,
      profile_image: author.profile_image,
    },
  };
}

// Fetch section data including posts and background image from settings row
export async function fetchSectionData(section?: string) {
  const source = process.env.DATA_SOURCE || "mock";

  if (source === "mock") {
    // Fallback: use mock data and a mock background image
    return {
      posts: mockPosts.filter((post) => !section || post.section === section),
      backgroundImage: undefined,
    };
  }

  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    return {
      posts: mockPosts.filter((post) => !section || post.section === section),
      backgroundImage: undefined,
    };
  }

  const authors = await fetchAuthors();
  const sheets = await getSheetsClient();
  const tabName = section || "accueil";
  const range = `${tabName}!A1:K`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: range,
  });
  const data = response.data.values;
  if (!data || data.length < 3) {
    return { posts: [], backgroundImage: undefined };
  }
  const headers = data[0].map((h: string) => h.trim());
  const settingsRow = data[1];
  const rows = data.slice(2); // skip header and settings row

  // Get background_image from settings row (if present)
  const bgImgIdx = headers.indexOf("background_image");
  const backgroundImage =
    bgImgIdx !== -1 ? settingsRow[bgImgIdx] || undefined : undefined;

  // Map posts (skip settings row)
  const posts = rows.map((row: string[], index: number) =>
    mapSheetRowToPostObj(mapRowToObject(row, headers), authors, tabName, index)
  );
  return { posts, backgroundImage };
}
