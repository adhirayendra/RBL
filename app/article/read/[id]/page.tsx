"use client";

import { useParams } from "next/navigation";

import ReadArticleForm from "@/app/sections/ArticleSection/readArticle/ReadArticleForm";
import GetContentById from "@/data/dataArticles/Contents";
import getArticleById from "@/data/dataArticles/articles";

export default function ReadArticlePage() {
  // Mengambil parameter ID dari URL
  const params = useParams();
  const idContent = params.id as string;
  
  // Mengambil metadata artikel (termasuk thumbnailUrl)
  const article = getArticleById(idContent);
  // Mengambil konten artikel berdasarkan ID
  const contents = GetContentById(idContent);

  if (!article || !contents) {
    return (
      <div className="w-full min-h-screen pt-40 pb-10 flex items-center justify-center">
        <span className="text-2xl font-bold">Article not found</span>
      </div>
    );
  }

  // Merge thumbnail into contents if needed, or pass separately
  const mergedContents = {
    ...contents,
    thumbnailUrl: article.thumbnailUrl
  };

  return (
    <div className="bg-[#2D5FFE] min-h-screen w-full py-10 pt-30 md:py-30 flex flex-col items-center">
      <ReadArticleForm
        title={article.title}
        contents={mergedContents}
      />
    </div>
  );
}
