"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function ArticleSection() {
  const articles = [
    {
      id: 1,
      title: "4 Gol Tanpa Balas! Bukti Indonesia Siap Juara FIFA Series 2026",
      desc: "Timnas Indonesia lagi bener-bener nunjukin kelasnya pas lawan Saint ...",
      img: "/image/Articles/Rectangle 17.png"
    },
    {
      id: 2,
      title: "Ancaman Penutupan Selat Hormuz dan Risiko Krisis Energi Dunia",
      desc: "Memanasnya konflik antara Amerika Serikat dan Israel melawan Iran kembali menyoroti ...",
      img: "/image/Articles/Rectangle 18.png"
    },
    {
      id: 3,
      title: "Kebanggaan Indonesia! Veda Ega Pratama Raih Podium Dalam Ajang Moto3",
      desc: "Pembalap muda asal Indonesia, Veda Ega Pratama, kembali mencuri perhatian ...",
      img: "/image/Articles/Rectangle 19.png"
    },
    {
      id: 4,
      title: "4 Gol Tanpa Balas! Bukti Indonesia Siap Juara FIFA Series 2026",
      desc: "Timnas Indonesia lagi bener-bener nunjukin kelasnya pas lawan Saint ...",
      img: "/image/Articles/sport/Rectangle 17.png"
    },
    {
      id: 5,
      title: "Ancaman Penutupan Selat Hormuz dan Risiko Krisis Energi Dunia",
      desc: "Memanasnya konflik antara Amerika Serikat dan Israel melawan Iran kembali menyoroti ...",
      img: "/image/Articles/Rectangle 18.png"
    },
    {
      id: 6,
      title: "Kebanggaan Indonesia! Veda Ega Pratama Raih Podium Dalam Ajang Moto3",
      desc: "Pembalap muda asal Indonesia, Veda Ega Pratama, kembali mencuri perhatian ...",
      img: "/image/Articles/Rectangle 19.png"
    }
  ];

  return (
    <section className="w-full bg-white text-black py-28 -mt-16 rounded-[80px] shadow-[0_-15px_40px_rgba(0,0,0,0.1)] relative z-30">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 tracking-wide text-[#1E1E1E]">
          ARTICLE
        </h2>

        <div className="w-full max-w-6xl">
          <Swiper className="article-swiper !pb-10"
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id} className="py-2">
                <div className="flex flex-col group cursor-pointer">
                  <div className="rounded-[10px] overflow-hidden mb-6 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                    <Image
                      src={article.img}
                      alt={article.title}
                      width={358}
                      height={221}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed">
                    {article.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
