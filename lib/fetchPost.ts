import { mockPosts } from "./mock-posts";
import { marked } from "marked";

export async function fetchPosts() {
  const source = process.env.DATA_SOURCE;

  if (source === "mock") {
    return mockPosts;
  }

  const sheetId =
    source === "staging"
      ? process.env.GOOGLE_SHEET_ID_STAGING
      : process.env.GOOGLE_SHEET_ID_PROD;

  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const range = "Feuille1!A2:F";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok || !data.values) {
    throw new Error("Failed to fetch posts from Google Sheet");
  }

  return data.values.map((row: string[]) => {
    const [title, slug, excerpt, date, imageUrl, content] = row;

    return {
      title,
      slug,
      custom_excerpt: excerpt,
      published_at: date,
      feature_image: imageUrl,
      html: marked(content || ""),
    };
  });
}
