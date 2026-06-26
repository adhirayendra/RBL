import useSWR from "swr";
import { client } from "@/sanity/lib/client";

export interface Article {
  _id: string;
  title: string;
  thumbnailUrl: string;
  publishedAt: string;
  category: {
    name: string;
    label: string;
  };
  author: string;
  content: any[];
}

const sanityFetcher = (query: string) => client.fetch(query);

export function useArticles() {
  const query = `{
  "posts": *[_type == "article" && ($cat == "all" || category->name == $cat)] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "thumbnailUrl": thumbnail.asset->url,
    publishedAt,
    "category": category->{
      name,
      label
    },
    "author": author->name,
    "desc": coalesce(desc, pt::text(content))
  },
  "total": count(*[_type == "article" && ($cat == "all" || category->name == $cat)])
}`;

  const { data, error, isLoading, mutate } = useSWR<Article[]>(
    query,
    sanityFetcher,
  );

  return {
    articles: data || [],
    isLoading,
    isError: error,
    refetch: mutate, // Fungsi untuk memaksa ambil data baru jika dibutuhkan
  };
}
