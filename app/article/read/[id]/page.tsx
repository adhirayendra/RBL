import { notFound, permanentRedirect } from "next/navigation";

import { client } from "@/sanity/lib/client";
import { buildArticleUrl } from "../slug";

type ArticleDetail = {
  _id: string;
  title: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};

async function getArticleById(id: string): Promise<ArticleDetail | null> {
  const query = `*[_type == "article" && _id == $id][0] {
    _id,
    title
  }`;

  return client.fetch<ArticleDetail | null>(query, { id });
}

export default async function LegacyArticlePage({ params }: PageProps) {
  const { id } = await params;
  
  // Extract real ID from legacy formats like "some-title-slug--id"
  const urlParts = id.split("--");
  const realId = urlParts[urlParts.length - 1];

  const article = await getArticleById(realId);

  if (!article) {
    notFound();
  }

  permanentRedirect(buildArticleUrl(article._id, article.title));
}
