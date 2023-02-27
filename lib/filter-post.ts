export function filterPost(posts: any[], categorySlug: string) {
  return posts.filter(
    (post: any) =>
      post.attributes.category.data.attributes.slug === categorySlug
  );
}
