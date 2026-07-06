"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PopupCopyLink from "./PopupCopyLink";

export default function RecommendedArticles({
  relatedArticles,
}: {
  relatedArticles: any[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Gagal menyalin link: ", err);
    }
  };

  return (
    <div className="w-full bg-linear-to-b from-gray-500 to-black p-8 md:p-12 font-sans relative">
      {/* Container Bagikan Tautan - Diubah menjadi Teks Tombol Minimalis */}
      <div className="mb-10">
        <span className="text-sm font-medium text-gray-300 block mb-3">
          Share this:
        </span>

        <button
          onClick={() => setIsModalOpen(true)}
          className="py-2 px-5 bg-gray-700/40 hover:bg-gray-600 text-white font-semibold text-sm rounded-xl transition-all border border-gray-600 cursor-pointer shadow-xs"
        >
          Salin Tautan Artikel
        </button>
      </div>

      {/* Memanggil PopupCopyLink dengan mengirimkan props */}
      <PopupCopyLink
        isOpen={isModalOpen}
        isCopied={isCopied}
        onClose={() => setIsModalOpen(false)}
        onCopy={handleCopyLink}
      />

      {/* Recommended Section */}
      <div>
        <h3 className="text-lg font-semibold mb-6 text-gray-200">Related</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {relatedArticles.map((article: any) => (
            <Link
              href={`/article/read/${article._id}`}
              key={article._id}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              {/* Container Gambar Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src={article.thumbnailUrl || "/image/placeholder.jpg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Teks Informasi */}
              <div className="flex flex-col gap-1">
                <h4 className="text-md text-white font-bold leading-snug group-hover:underline transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="text-xs text-gray-400 space-y-0.5">
                  <p>
                    {new Date(article.publishedAt).toLocaleDateString("id-ID")}
                  </p>
                  <p>In Article "{article.category?.label}"</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
