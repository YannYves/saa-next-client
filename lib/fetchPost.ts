import { mockPosts } from "./mock-posts";
import { marked } from "marked";

// Helper: map a row from GSheet to a post object
function mapSheetRowToPost(row: string[]) {
  const [
    id,
    title,
    slug,
    custom_excerpt,
    published_at,
    feature_image,
    html,
    featured,
    author_name,
    author_profile_image,
    section,
    tags,
  ] = row;

  return {
    id,
    title,
    slug,
    custom_excerpt,
    published_at,
    feature_image,
    html: marked(html || ""),
    featured: featured === "TRUE" || featured === "true",
    primary_author: {
      name: author_name,
      profile_image: author_profile_image,
    },
    section: section || "actualites",
    tags: tags ? tags.split(",").map((t) => t.trim()) : [],
  };
}

export async function fetchPosts(section?: string) {
  const source = process.env.DATA_SOURCE || "mock";
  console.log(source, "source");

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
  // Adjust range to cover all columns (A2:L for 12 columns)
  const range = `${tabName}!A2:L`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  const res = await fetch(url);
  console.log(url, "url");
  const data = await res.json();

  if (!res.ok || !data.values) {
    throw new Error("Failed to fetch posts from Google Sheet");
  }

  const posts = data.values.map(mapSheetRowToPost);

  // If a section is specified, filter posts by section (redundant if tabName is section)
  if (section) {
    return posts.filter((post) => post.section === section);
  }

  return posts;
}
