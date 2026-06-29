"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Article } from "@/app/hooks/articles";
import useSWR from "swr";
import { client } from "@/sanity/lib/client";

// Fetcher menerima query string langsung
const fetcher = (groqQuery: string) => client.fetch(groqQuery);

export default function ArticleSection() {
  // Query diperbaiki agar bagian "total" tidak menggunakan variabel tidak terdefinisi ($cat)
  const query = `{
    "posts": *[_type == "article"] | order(publishedAt desc) [0...6] {
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
    "total": count(*[_type == "article"])
  }`;

  // Mengirim query langsung sebagai string (bukan di dalam array []) agar sesuai dengan fungsi fetcher
  const { data, error, isLoading } = useSWR(query, fetcher);

  return (
    <section className="w-full bg-white text-black py-28 -mt-16 rounded-[80px] shadow-[0_-15px_40px_rgba(0,0,0,0.1)] relative z-30">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 tracking-wide text-[#1E1E1E]">
          ARTICLE
        </h2>

        <div className="w-full max-w-6xl">
          <Swiper
            className="article-swiper pb-10"
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={data?.posts && data.posts.length >= 3} // Loop aman jika data posts mencukupi dari Sanity
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* Ditambahkan pengecekan isLoading/data agar tidak memicu error saat rendering awal */}
            {!isLoading &&
              data?.posts?.map((article: Article) => (
                <SwiperSlide key={article._id} className="py-2">
                  <Link
                    href={`/article/read/${article._id}`}
                    className="flex flex-col group cursor-pointer pb-8"
                  >
                    <div className="rounded-[10px] overflow-hidden mb-6 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                      <Image
                        src={article.thumbnailUrl || "/image/placeholder.jpg"}
                        alt={article.title}
                        width={358}
                        height={221}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
