"use client";

import { useState } from "react";
import Link from "next/link";

import { articles } from "@/data/dataArticles/articles";
import { categoryArticles } from "@/data/dataArticles/category";

export default function ArticleList() {
  // Category Filter
  const [selectedCategory, setSelectedCategory] = useState("all");
  // Fungsi Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  const changeCategory = (categoryName: string) => {
    setCurrentPage(1);
    setSelectedCategory(categoryName);
  };

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPost = filteredArticles.slice(firstPostIndex, lastPostIndex);

  // Hitung page dinamis
  const totalPages = Math.ceil(filteredArticles.length / postPerPage);

  return (
    <>
      {/* Container Utama - Kita hilangkan max-h-screen agar tidak menekan konten */}
      <div className="w-full flex flex-col">
        {/* Category Filter */}
        <ul
          id="genre_articles"
          className="flex items-center gap-2 md:gap-4 px-4 md:px-8 w-full overflow-x-auto hidden-scrollbar whitespace-nowrap"
        >
          {categoryArticles.map((category) => (
            <li
              key={category.id}
              onClick={() => changeCategory(category.name)}
              className={`py-2 px-6 md:px-8 rounded-t-2xl cursor-pointer font-bold shrink-0 transition-all
              ${selectedCategory === category.name ? "bg-amber-300 text-black" : "bg-amber-500 text-white"}
            `}
            >
              {category.label}
            </li>
          ))}
        </ul>

        <ul
          id="content_articles"
          className="w-full bg-linear-to-b from-gray-300 to-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 min-h-125"
        >
          {currentPost.length > 0 ? (
            currentPost.map((article) => (
              <li
                key={article.id}
                className="group flex flex-col cursor-pointer h-full"
              >
                {/* Container Gambar */}
                <div className="relative w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.thumbnail.thumbnailUrl}
                    alt={article.thumbnail.title}
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-0 right-0 text-sm md:text-base text-black bg-amber-300 rounded-tl-2xl font-bold px-4 py-2">
                    Read More
                  </span>
                </div>

                {/* Konten Teks */}
                <div className="flex flex-col gap-2 grow">
                  <Link
                    href={`/article/read/${article.id}`}
                    className="text-white text-xl md:text-2xl font-bold group-hover:underline line-clamp-2"
                  >
                    {article.thumbnail.title}
                  </Link>

                  <p className="text-gray-300 line-clamp-3 text-sm md:text-base">
                    {article.thumbnail.desc}
                  </p>
                </div>
              </li>
            ))
          ) : (
            /* ✅ PERBAIKAN: Gunakan <li> bukan <div> */
            <li className="col-span-full flex justify-center items-center py-20 list-none">
              <p className="text-white font-bold opacity-50 text-center">
                No articles found in this category.
              </p>
            </li>
          )}
        </ul>

        {/* Page / Pagination */}
        <ul
          id="pagination_articles"
          className="flex items-center gap-2 md:gap-4 px-4 md:px-8 w-full overflow-x-auto hidden-scrollbar whitespace-nowrap"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`py-2 px-6 md:px-8 rounded-b-2xl cursor-pointer font-bold shrink-0 transition-all
              ${currentPage === page ? "bg-amber-300 text-black" : "bg-amber-500 text-white"}
            `}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
