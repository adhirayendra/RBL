"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import { client } from "@/sanity/lib/client";

import ReadArticleForm from "@/app/sections/ArticleSection/readArticle/ReadArticleForm";
import RecommendedArticles from "@/app/sections/ArticleSection/readArticle/RecommendedArticles";

// Fetcher untuk SWR yang mendukung parameter dinamis
const fetcher = ([query, params]: [string, any]) => client.fetch(query, params);

export default function ReadArticlePage() {
  const params = useParams();
  const idContent = params.id as string;

  // GROQ Query: Mengambil detail artikel + 3 artikel terkait di kategori yang sama
  const query = `*[_type == "article" && _id == $id][0] {
    _id,
    title,
    "thumbnailUrl": thumbnail.asset->url,
    publishedAt,
    "category": category->{
      name,
      label
    },
    "author": author->name,
    content,
    "relatedArticles": *[_type == "article" && _id != ^._id && category->name == ^.category->name] | order(publishedAt desc) [0...3] {
      _id,
      title,
      publishedAt,
      "category": category->{
        name,
        label
      }
    }
  }`;

  // Hit API Sanity saat idContent tersedia
  const { data: article, isLoading } = useSWR(
    idContent ? [query, { id: idContent }] : null,
    fetcher,
  );

  if (isLoading) {
    return (
      <div className="bg-[#2D5FFE] w-full h-screen flex items-center justify-center">
        <span className="text-2xl font-bold text-white animate-pulse">
          Loading Article...
        </span>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="bg-[#2D5FFE] w-full h-40 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">Article not found</span>
      </div>
    );
  }

  return (
    <div className="bg-[#2D5FFE] w-full pt-25 md:pt-25 flex flex-col">
      {/* Category Container */}
      <div className="px-6 md:px-12">
        <div className="inline-block py-2 px-8 rounded-t-2xl bg-yellow-400 text-black -mb-px relative z-10">
          <span className="font-bold text-sm md:text-lg uppercase tracking-wide">
            {article.category?.label}
          </span>
        </div>
      </div>

      <ReadArticleForm article={article} />

      {/* Recommendations */}
      <div className="pt-8 bg-white">
        {/* Pastikan fallback array kosong jika tidak ada artikel terkait */}
        <RecommendedArticles relatedArticles={article.relatedArticles || []} />
      </div>
    </div>
  );
}
