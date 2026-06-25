import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { projectId, dataset } from "@/sanity/env";

export default function ReadArticleForm({ article }: { article: any }) {
  // Custom renderer untuk komponen PortableText (mengganti logika .map manual)
  const ptComponents = {
    types: {
      // Mengatur tampilan khusus jika ada sisipan gambar di tengah paragraf
      image: ({ value }: any) => {
        if (!value?.asset?._ref) return null;

        // Membangun URL gambar Sanity secara dinamis
        const id = value.asset._ref.split("-")[1];
        const ext = value.asset._ref.split("-")[2];
        const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}.${ext}`;

        return (
          <figure className="relative w-full aspect-video my-10">
            <Image
              src={imageUrl}
              alt={value.alt || "Ilustrasi artikel"}
              fill
              className="rounded-xl shadow-md object-cover"
            />
          </figure>
        );
      },
    },
    block: {
      // Mengatur styling paragraf standar
      normal: ({ children }: any) => (
        <p className="text-gray-700 text-lg md:text-xl leading-8 text-justify mb-8">
          {children}
        </p>
      ),
    },
  };

  return (
    <div className="w-full pt-20 px-6 md:px-12 bg-white">
      <article className="mx-auto">
        {/* Judul Artikel */}
        <h1 className="font-extrabold text-3xl md:text-6xl text-gray-900 leading-tight pb-6">
          {article.title}
        </h1>

        {/* Thumbnail Artikel */}
        <div className="relative w-full aspect-video mb-8">
          <Image
            src={article.thumbnailUrl || "/image/placeholder.jpg"}
            alt={article.title}
            fill
            className="rounded-xl shadow-md object-cover"
            priority
          />
        </div>

        {/* Content Artikel (Dinamis dari Sanity Portable Text) */}
        <div className="space-y-8">
          <PortableText value={article.content} components={ptComponents} />
        </div>
      </article>
    </div>
  );
}
