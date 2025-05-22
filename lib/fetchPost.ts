import { mockPosts } from "./mock-posts";
import { marked } from "marked";

export async function fetchPosts(section?: string) {
  const source = process.env.DATA_SOURCE;

  if (source === "mock") {
    // If a section is specified, filter mock posts by section
    if (section) {
      return mockPosts.filter((post) => post.section === section);
    }
    return mockPosts;
  }

  const sheetId =
    source === "staging"
      ? process.env.GOOGLE_SHEET_ID_STAGING
      : process.env.GOOGLE_SHEET_ID_PROD;

  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  // Update range to include section column
  const range = "Feuille1!A2:G";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok || !data.values) {
    throw new Error("Failed to fetch posts from Google Sheet");
  }

  const posts = data.values.map((row: string[]) => {
    const [title, slug, excerpt, date, imageUrl, content, section] = row;

    return {
      title,
      slug,
      custom_excerpt: excerpt,
      published_at: date,
      feature_image: imageUrl,
      html: marked(content || ""),
      section: section || "actualites", // Default to "actualites" if no section specified
    };
  });

  // If a section is specified, filter posts by section
  if (section) {
    return posts.filter((post) => post.section === section);
  }

  return posts;
}
