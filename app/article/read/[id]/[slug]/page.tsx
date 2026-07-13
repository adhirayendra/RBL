import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import { client } from "@/sanity/lib/client";
import ReadArticleForm from "@/app/sections/ArticleSection/readArticle/ReadArticleForm";
import RecommendedArticles from "@/app/sections/ArticleSection/readArticle/RecommendedArticles";
import { buildArticleUrl, toSlug } from "../../slug";

type ArticleDetail = {
  _id: string;
  title: string;
  thumbnailUrl: string | null;
  publishedAt: string;
  category?: {
    name: string;
    label: string;
  };
  author?: string | null;
  content: any[];
  description: string;
  relatedArticles: Array<{
    _id: string;
    title: string;
    thumbnailUrl: string | null;
    publishedAt: string;
    category?: {
      name: string;
      label: string;
    };
  }>;
};

type PageProps = {
  params: Promise<{ id: string; slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

async function getArticleById(id: string): Promise<ArticleDetail | null> {
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
    "description": pt::text(content)[0...160],
    "relatedArticles": *[_type == "article" && _id != ^._id && category->name == ^.category->name] | order(publishedAt desc) [0...3] {
      _id,
      title,
      "thumbnailUrl": thumbnail.asset->url,
      publishedAt,
      "category": category->{
        name,
        label
      }
    }
  }`;

  return client.fetch<ArticleDetail | null>(query, { id });
}

function normalizeDescription(text: string | undefined, title: string) {
  const baseText = (text ?? "")
    .replace(/\s+/g, " ")
    .trim();

  if (baseText) {
    return baseText.length > 160 ? `${baseText.slice(0, 157)}...` : baseText;
  }

  return `${title} — baca artikel lengkap dan terbaru di RBL.`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleById(id);

  if (!article) {
    return {
      title: "Artikel tidak ditemukan | RBL",
      description: "Artikel yang Anda cari tidak tersedia saat ini.",
    };
  }

  const title = `${article.title} | RBL`;
  const description = normalizeDescription(article.description, article.title);
  const canonicalUrl = new URL(buildArticleUrl(article._id, article.title), siteUrl).toString();
  const imageUrl = article.thumbnailUrl ?? `${siteUrl}/image/placeholder.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    other: {
      "article:published_time": article.publishedAt,
      "article:section": article.category?.label ?? "Artikel",
    },
  };
}

function ArticleJsonLd({ article }: { article: ArticleDetail }) {
  const canonicalUrl = new URL(buildArticleUrl(article._id, article.title), siteUrl).toString();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: normalizeDescription(article.description, article.title),
    image: article.thumbnailUrl ? [article.thumbnailUrl] : undefined,
    datePublished: article.publishedAt,
    author: article.author
      ? { "@type": "Person", name: article.author }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "RBL",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ReadArticlePage({ params }: PageProps) {
  const { id, slug } = await params;
  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  const expectedSlug = toSlug(article.title);
  if (slug !== expectedSlug) {
    permanentRedirect(buildArticleUrl(article._id, article.title));
  }

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
      <ArticleJsonLd article={article} />

      <div className="pt-8 bg-white">
        <RecommendedArticles relatedArticles={article.relatedArticles || []} />
      </div>
    </div>
  );
}
