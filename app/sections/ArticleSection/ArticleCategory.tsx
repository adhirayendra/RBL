"use client";

import useSWR from "swr";
import { client } from "@/sanity/lib/client";

interface CategoryData {
  _id: string;
  name: string;
  label: string;
}

const fetcher = (query: string) => client.fetch(query);

export default function ArticleCategory({
  changeCategory,
  selectedCategory,
}: {
  changeCategory: (categoryName: string) => void;
  selectedCategory: string;
}) {
  const query = `*[_type == "category"] | order(name asc) {
    _id,
    name,
    label
  }`;

  const {
    data: categories,
    error,
    isLoading,
  } = useSWR<CategoryData[]>(query, fetcher);

  // State loading & error handling agar UI aman
  if (isLoading)
    return <div className="px-4 text-sm text-gray-500">Memuat kategori...</div>;
  if (error || !categories) return null;

  return (
    <ul
      id="genre_articles"
      className="flex items-center gap-2 md:gap-4 px-4 md:px-8 w-full overflow-x-auto hidden-scrollbar whitespace-nowrap"
    >
      <li
        onClick={() => changeCategory("all")}
        className={`py-2 px-6 md:px-8 rounded-t-2xl cursor-pointer font-bold shrink-0 transition-all
          ${selectedCategory === "all" ? "bg-amber-300 text-black" : "bg-amber-500 text-white"}
        `}
      >
        All
      </li>

      {categories.map((category) => (
        <li
          key={category._id}
          onClick={() => changeCategory(category.name)}
          className={`py-2 px-6 md:px-8 rounded-t-2xl cursor-pointer font-bold shrink-0 transition-all
            ${selectedCategory === category.name ? "bg-amber-300 text-black" : "bg-amber-500 text-white"}
          `}
        >
          {category.label}
        </li>
      ))}
    </ul>
  );
}
