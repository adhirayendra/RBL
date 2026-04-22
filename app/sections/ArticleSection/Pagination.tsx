export default function PaginationPage({
  totalPages,
  currentPage,
  setCurrentPage,
}: {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  return (
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
  );
}
