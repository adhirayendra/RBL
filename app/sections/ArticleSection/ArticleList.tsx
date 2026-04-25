"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { articles } from "@/data/dataArticles/articles";
import ArticleCategory from "./ArticleCategory";
import PaginationPage from "./Pagination";

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
        <ArticleCategory
          changeCategory={changeCategory}
          selectedCategory={selectedCategory}
        />

        <ul
          id="content_articles"
          className="w-full bg-linear-to-b from-gray-500 to-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 min-h-125"
        >
          {currentPost.length > 0 ? (
            currentPost.map((article) => (
              <li
                key={article.id}
                className="group flex flex-col cursor-pointer h-full"
              >
                <Link href={`/article/read/${article.id}`}>
                  {/* Container Gambar */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                    <Image
                      src={article.thumbnailUrl}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute bottom-0 right-0 text-sm md:text-base text-black bg-amber-300 rounded-tl-2xl font-bold px-4 py-2 z-10">
                      Read More
                    </span>
                  </div>

                  {/* Konten Teks */}
                  <div className="flex flex-col gap-2 grow">
                    <h2 className="text-white text-xl md:text-2xl font-bold group-hover:underline line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-gray-300 line-clamp-3 text-sm md:text-base">
                      {article.desc}
                    </p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="col-span-full flex justify-center items-center py-20 list-none">
              <p className="text-white font-bold opacity-50 text-center">
                No articles found in this category.
              </p>
            </li>
          )}
        </ul>

        {/* Page / Pagination */}
        <PaginationPage
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
