import Image from "next/image";

import type { ContentArticle } from "@/data/dataArticles/contents";

export default function ReadArticleForm({
  title,
  contents,
  relatedArticles,
}: {
  title: string;
  contents: ContentArticle;
  relatedArticles: any[];
}) {
  return (
    <div className="w-full pt-20 px-6 md:px-12 bg-white">
      <article className="mx-auto">
        {/* Judul Artikel */}
        <h1 className="font-extrabold text-3xl md:text-6xl text-gray-900 leading-tight pb-6">
          {title}
        </h1>

        {/* Thumbnail Artikel */}
        <div className="relative w-full aspect-video mb-8">
          <Image
            src={contents.thumbnailUrl || "/image/placeholder.jpg"}
            alt={title}
            fill
            className="rounded-xl shadow-md object-cover"
            priority
          />
        </div>

        {/* Content Artikel */}
        <div className="space-y-8">
          {contents.content.map((item: any, index: number) => (
            <div key={index} className="leading-relaxed">
              {item.type === "paragraph" ? (
                <p className="text-gray-700 text-lg md:text-xl leading-8 text-justify">
                  {item.text}
                </p>
              ) : (
                  <figure className="relative w-full aspect-video my-10">
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      className="rounded-xl shadow-md object-cover"
                    />
                  </figure>
              )}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
