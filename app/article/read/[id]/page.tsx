"use client";

import { useParams } from "next/navigation";

import ReadArticleForm from "@/app/sections/articleSection/readArticle/ReadArticleForm";
import { getContentById } from "@/app/lib/articleLogic";
import { getArticleById } from "@/app/lib/articleLogic";
import { getRelatedArticle } from "@/app/lib/articleLogic";

export default function ReadArticlePage() {
  // Mengambil parameter ID dari URL
  const params = useParams();
  const idContent = params.id as string;

  // Mengambil metadata artikel (termasuk thumbnailUrl)
  const article = getArticleById(idContent);
  // Mengambil konten artikel berdasarkan ID
  const contents = getContentById(idContent);
  // Mengambil artikel terkait berdasarkan kategory (Related Article)
  const relatedArticles = article
    ? getRelatedArticle(article.id, article.category)
    : [];

  if (!article || !contents) {
    return (
      <div className="bg-[#2D5FFE] w-full h-40 flex items-center justify-center">
        <span className="text-2xl font-bold">Article not found</span>
      </div>
    );
  }

  // Merge thumbnail into contents if needed, or pass separately
  const mergedContents = {
    ...contents,
    thumbnailUrl: article.thumbnailUrl,
  };

  return (
    <div className="bg-[#2D5FFE] w-full pt-30 flex flex-col items-center">
      <ReadArticleForm
        title={article.title}
        contents={mergedContents}
        relatedArticles={relatedArticles}
      />
    </div>
  );
}
