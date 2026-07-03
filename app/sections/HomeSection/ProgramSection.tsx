"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

interface ProgramSectionProps {
  variant?: "home" | "program";
}

export default function ProgramSection({ variant = "home" }: ProgramSectionProps) {
  const programs = [
    { id: 1, img: "/image/programSlider/TGIF-01 1.png" },
    { id: 2, img: "/image/programSlider/RN-01 1.png" },
    { id: 3, img: "/image/programSlider/SunBrezee-01 1.png" },
    { id: 4, img: "/image/programSlider/TGIF-01 1.png" },
    { id: 5, img: "/image/programSlider/RN-01 1.png" },
    { id: 6, img: "/image/programSlider/SunBrezee-01 1.png" },
  ];

  const isProgramPage = variant === "program";

  return (
    <section className={`w-full relative py-20 ${isProgramPage ? 'bg-[#1C1C1C] mt-15 md:mt-20' : 'bg-gradient-to-t from-[#2D5FFE] to-[#0A31AD] text-white rounded-t-[60px]'}`}>

      {isProgramPage ? (
        /* Yellow Tab for Program Page */
        <div className="absolute top-0 left-6 md:left-30 -translate-y-full bg-[#FFDD00] px-8 md:px-10 py-2 md:py-3 rounded-t-[25px] md:rounded-t-[35px]">
          <h2 className="text-black text-lg md:text-xl font-extrabold font-['DM_Sans'] tracking-wide">Program Siaran</h2>
        </div>
      ) : (
        /* Original Title for Home Page */
        <div className="container mx-auto px-6 flex flex-col items-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide">
            PROGRAM
          </h2>
        </div>
      )}

      <div className={`w-full max-w-[1440px] mx-auto px-6 md:px-16 ${isProgramPage ? '' : ''}`}>
        <Swiper className="program-swiper !pb-10"
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
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
          {programs.map((prog) => (
            <SwiperSlide key={prog.id} className="py-4 px-2">
              <div className={`relative group overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer ${isProgramPage ? 'shadow-[9px_8px_4px_0px_rgba(0,0,0,0.25)]' : 'shadow-lg'}`}>
                <Image
                  src={prog.img}
                  alt={`Program ${prog.id}`}
                  width={361}
                  height={361}
                  className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                {!isProgramPage && <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300" />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}