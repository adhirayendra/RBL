"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { client } from "@/sanity/lib/client";

import useSWR from "swr";
const fetcher = (groqQuery: string) => client.fetch(groqQuery);

interface ProgramSectionProps {
  variant?: "home" | "program";
}

export default function ProgramSection({
  variant = "home",
}: ProgramSectionProps) {
  const isProgramPage = variant === "program";

  // Query diperbaiki agar langsung menarik URL gambar mentah dari asset referensi
  const query = `*[_type == "broadcastProgram"] {
    "_id": _id,
    "id": _id,
    programName,
    "img": thumbnailImg.asset->url
  }`;

  // Menyimpan data fetching ke dalam variabel bernama programs agar sinkron dengan .map() di bawah
  const { data: programs, isLoading } = useSWR(query, fetcher);

  return (
    <section
      className={`w-full relative py-20 ${isProgramPage ? "bg-[#1C1C1C] mt-15 md:mt-20" : "bg-gradient-to-t from-[#2D5FFE] to-[#0A31AD] text-white rounded-t-[60px]"}`}
    >
      {isProgramPage ? (
        /* Yellow Tab for Program Page */
        <div className="absolute top-0 left-6 md:left-16 -translate-y-full bg-[#FFDD00] px-6 md:px-10 py-1.5 md:py-3 rounded-t-[20px] md:rounded-t-[35px] z-20">
          <h2 className="text-black text-sm md:text-2xl font-extrabold font-['DM_Sans'] tracking-wide">
            Program Siaran
          </h2>
        </div>
      ) : (
        /* Original Title for Home Page */
        <div className="container mx-auto px-6 flex flex-col items-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide">
            PROGRAM
          </h2>
        </div>
      )}

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16">
        <Swiper
          className="program-swiper !pb-10"
          spaceBetween={30}
          slidesPerView={3}
          loop={programs && programs.length >= 3} // Mengaktifkan loop dengan aman saat data mencukupi
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
        >
          {/* Proteksi loading ditambahkan agar rendering berjalan mulus saat data siap */}
          {!isLoading &&
            programs?.map((prog: any) => (
              <SwiperSlide key={prog.id} className="py-4 px-2">
                <div
                  className={`relative group overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer ${isProgramPage ? "shadow-[9px_8px_4px_0px_rgba(0,0,0,0.25)]" : "shadow-lg"}`}
                >
                  <Image
                    src={prog.img || "/image/placeholder.jpg"}
                    alt={prog.programName || `Program ${prog.id}`}
                    width={361}
                    height={361}
                    className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  {!isProgramPage && (
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300" />
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
