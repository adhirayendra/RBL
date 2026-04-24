import Image from "next/image";
import type { ContentArticle } from "@/data/dataArticles/Contents";

export default function ReadArticleForm({
  title,
  contents,
}: {
  title: string;
  contents: ContentArticle;
}) {
  return (
    <div className="w-full bg-white md:bg-gray-50 pt-20 pb-20">
      <article className="max-w-5xl mx-auto px-6 md:px-12 py-10">
        {/* Judul Artikel */}
        <h1 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight pb-6">
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
                <figure className="my-10">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      className="rounded-xl shadow-md object-cover"
                    />
                  </div>
                  {item.alt && (
                    <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                      {item.alt}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}
        </div>

        {/* Footer Article Simple */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-gray-400 text-sm w-full flex justify-center">
          © 2026 Article Universitas Budiluhur - Selamat Membaca
        </div>
      </article>
    </div>
  );
}
