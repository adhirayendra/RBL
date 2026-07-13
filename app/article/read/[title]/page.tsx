import { notFound, permanentRedirect } from "next/navigation";

import { client } from "@/sanity/lib/client";
<<<<<<< HEAD:app/article/read/[title]/page.tsx
import ReadArticleForm from "@/app/sections/ArticleSection/readArticle/ReadArticleForm";
import RecommendedArticles from "@/app/sections/ArticleSection/readArticle/RecommendedArticles";

const fetcher = ([query, params]: [string, any]) => client.fetch(query, params);

export default function ReadArticlePage() {
  const params = useParams();
  const titleParam = params.title ? (params.title as string) : "";

  const urlParts = titleParam.split("--");
  const articleId = urlParts[urlParts.length - 1];

=======
import { buildArticleUrl } from "../slug";

type ArticleDetail = {
  _id: string;
  title: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};

async function getArticleById(id: string): Promise<ArticleDetail | null> {
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6:app/article/read/[id]/page.tsx
  const query = `*[_type == "article" && _id == $id][0] {
    _id,
    title
  }`;

<<<<<<< HEAD:app/article/read/[title]/page.tsx
  // Hit API Sanity menggunakan parameter ID yang super aman
  const { data: article, isLoading } = useSWR(
    articleId ? [query, { id: articleId }] : null,
    fetcher,
  );
=======
  return client.fetch<ArticleDetail | null>(query, { id });
}
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6:app/article/read/[id]/page.tsx

export default async function LegacyArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

<<<<<<< HEAD:app/article/read/[title]/page.tsx
  return (
    <div className="bg-[#2D5FFE] w-full pt-25 md:pt-25 flex flex-col">
      <div className="px-6 md:px-12">
        <div className="inline-block py-2 px-8 rounded-t-2xl bg-yellow-400 text-black -mb-px relative z-10">
          <span className="font-bold text-sm md:text-lg uppercase tracking-wide">
            {article.category?.label}
          </span>
        </div>
      </div>
      <ReadArticleForm article={article} />
      <div className="pt-8 bg-white">
        <RecommendedArticles relatedArticles={article.relatedArticles || []} />
      </div>
    </div>
  );
=======
  permanentRedirect(buildArticleUrl(article._id, article.title));
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6:app/article/read/[id]/page.tsx
}
