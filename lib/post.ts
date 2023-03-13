import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.BACKEND_URL,
  key: process.env.GHOST_KEY,
  version: process.env.GHOST_VERSION,
});

export async function getPostsGhost(filter?: string) {
  if (filter) {
    return await api.posts
      .browse({
        limit: "15",
        include: "tags,authors",
        filter,
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsTags() {
  return await api.tags.browse().catch((err) => {
    console.error(err);
  });
}

export async function readPostsGhost(id: string) {
  return await api.posts
    .read({
      id,
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err);
    });
}
