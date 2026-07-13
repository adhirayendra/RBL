export function toSlug(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .replace(/-+/g, "-");
}

export function buildArticleUrl(id: string, title: string): string {
  const slug = toSlug(title) || "artikel";
  return `/article/read/${id}/${slug}`;
}
