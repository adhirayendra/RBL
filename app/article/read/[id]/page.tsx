"use client";

import { useParams } from "next/navigation";

import ReadArticleForm from "@/app/sections/articleSection/readArticle/ReadArticleForm";
import GetContentById from "@/data/dataArticles/Contents";
import getTitleContentById from "@/data/dataArticles/articles";

export default function ReadArticlePage() {
  // Mengambil parameter ID dari URL
  const params = useParams();
  const idContent = params.id as string;
  // Mengambil konten artikel berdasarkan ID
  const contents = GetContentById(idContent);
  //   Mengambil judul artikel berdasarkan ID
  const title = getTitleContentById(idContent);

  if (!contents) {
    return (
      <div className="w-full min-h-screen pt-40 pb-10 flex items-center justify-center">
        <span className="text-2xl font-bold">Article not found</span>
      </div>
    );
  }

  return (
    <div className="bg-[#2D5FFE] min-h-screen w-full py-10 pt-30 md:py-30 flex flex-col items-center">
      {title === null ? (
        <div className="w-full bg-white md:bg-gray-50 pt-20 pb-20">
          <span>Artikel dengan ID {idContent} ini tidak tersedia</span>
        </div>
      ) : (
        <ReadArticleForm
          title={title}
          contents={contents ?? "Content dalam pengembangan"}
        />
      )}
    </div>
  );
}
