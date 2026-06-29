"use client";

import Image from "next/image";
import Link from "next/link"; // Ditambahkan untuk menangani tautan internal Next.js
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

// Inisialisasi builder untuk membuat URL gambar yang valid secara otomatis
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function ReadArticleForm({ article }: { article: any }) {
  // Custom renderer untuk komponen PortableText
  const ptComponents = {
    types: {
      // Perbaikan sistem render gambar di dalam teks agar selalu terakses aman
      image: ({ value }: any) => {
        if (!value?.asset?._ref) return null;

        return (
          <figure className="relative w-full aspect-video my-10">
            <Image
              src={urlFor(value).url()}
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
        <p className="text-gray-700 text-lg md:text-xl leading-8 text-start mb-6">
          {children}
        </p>
      ),
      // Mengatur styling semua tingkatan Heading agar dinamis sesuai di Sanity
      h1: ({ children }: any) => (
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 mt-12 mb-6 leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-10 mb-4 leading-snug">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-3">
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 mb-2">
          {children}
        </h4>
      ),
      // Styling tambahan jika organisasi kampus menggunakan kutipan (blockquote)
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-yellow-400 italic my-6 pl-4 md:pl-6 text-gray-600 text-lg md:text-xl">
          {children}
        </blockquote>
      ),
    },
    // Styling tambahan untuk menangani daftar list (Bullet & Numbering)
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-6 md:pl-8 mb-6 text-gray-700 text-lg md:text-xl space-y-2">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal pl-6 md:pl-8 mb-6 text-gray-700 text-lg md:text-xl space-y-2">
          {children}
        </ol>
      ),
    },
    // KUNCI PERBAIKAN: Menangani elemen tautan (Link) dari Sanity Studio
    marks: {
      link: ({ children, value }: any) => {
        const href = value?.href || "";
        // Cek apakah link mengarah ke halaman internal (dimulai dengan '/')
        const isInternal = href.startsWith("/");

        if (isInternal) {
          return (
            <Link
              href={href}
              className="text-blue-600 underline font-medium hover:text-blue-800 transition-colors"
            >
              {children}
            </Link>
          );
        }

        // Tautan eksternal dibuka di tab baru demi keamanan dan kenyamanan pengguna
        return (
          <a
            href={href}
            rel="noopener noreferrer"
            className="text-blue-600 underline font-medium hover:text-blue-800 transition-colors"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="w-full pt-20 px-6 md:px-12 bg-white">
      <article className="mx-auto">
        {/* Judul Utama Artikel */}
        <h1 className="font-extrabold text-3xl md:text-6xl text-gray-900 leading-tight pb-6">
          {article.title}
        </h1>

        {/* Thumbnail Utama Artikel */}
        <div className="relative w-full aspect-video mb-8">
          <Image
            src={article.thumbnailUrl || "/image/placeholder.jpg"}
            alt={article.title}
            fill
            className="rounded-xl shadow-md object-cover"
            priority
          />
        </div>

        {/* Content Artikel yang Fleksibel, Mendukung Teks, Heading, List, Gambar, dan Tautan */}
        <div className="space-y-4">
          <PortableText value={article.content} components={ptComponents} />
        </div>
      </article>
    </div>
  );
}
