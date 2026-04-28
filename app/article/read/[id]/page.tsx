"use client";

import { useParams } from "next/navigation";

import ReadArticleForm from "@/app/sections/ArticleSection/readArticle/ReadArticleForm";
import { getContentById } from "@/app/lib/articleLogic";
import { getArticleById } from "@/app/lib/articleLogic";
import { getRelatedArticle } from "@/app/lib/articleLogic";
import RecommendedArticles from "@/app/sections/ArticleSection/readArticle/RecommendedArticles";

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
    <div className="bg-[#2D5FFE] w-full pt-25 md:pt-20 flex flex-col">
      {/* Category Container */}
      <div className="px-6 md:px-12">
        <div className="inline-block py-2 px-8 rounded-t-2xl bg-yellow-400 text-black -mb-px relative z-10">
          <span className="font-bold text-sm md:text-lg uppercase tracking-wide">
            {article.category}
          </span>
        </div>
      </div>

      <ReadArticleForm
        title={article.title}
        contents={mergedContents}
        relatedArticles={relatedArticles}
      />

      {/* Recommendations */}
      <div className="pt-8 bg-white">
        <RecommendedArticles relatedArticles={relatedArticles} />
      </div>
    </div>
  );
}
