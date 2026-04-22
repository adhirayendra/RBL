import {
  categoryArticles,
  CategoryArticle,
} from "@/data/dataArticles/category";

export default function ArticleCategory({
  changeCategory,
  selectedCategory,
}: {
  changeCategory: (categoryName: string) => void;
  selectedCategory: string;
}) {
  return (
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
  );
}
