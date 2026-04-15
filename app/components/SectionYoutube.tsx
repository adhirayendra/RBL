"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";

export const SectionYoutube = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showRecommended, setShowRecommended] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Perkenalkin\nRadio Budi luhur",
      description: "Radio komunitas yang telah menjadi suara khas Universitas Budi Luhur sejak 2005, hadir di frekuensi 107.7 FM dan dapat dinikmati secara global melalui platform streaming di www.radiobudiluhur.com atau di RCTI+",
      thumbnail: "/image/Youtube/8zVeXiPuWog-HD 1.png",
    },
    {
      id: 2,
      id_content: "Nyobrak",
      title: "Nyobrak:\nEksistensi Radio",
      description: "Membahas perjalanan dan eksistensi radio komunitas kampus di era digital bersama para pakar dan praktisi media lokal.",
      thumbnail: "/image/Youtube/rEASOO9Kk3A-HD 2.png",
    },
    {
      id: 3,
      id_content: "Tanya Jawab Asal",
      title: "Tanya Jawab Asal:\nEdisi Ramadhan",
      description: "Segmen spesial Ramadhan yang penuh dengan tanya jawab seru dan penuh tawa bersama pengisi acara favorit kamu.",
      thumbnail: "/image/Youtube/RCVi_MjLSy0-HD (1) 1.png",
    },
    {
      id: 4,
      id_content: "Now We Know",
      title: "Now We Know:\nProgram Edukasi",
      description: "Wawasan baru setiap hari! Temukan fakta-fakta unik yang belum kamu ketahui sebelumnya hanya di program Now We Know.",
      thumbnail: "/image/Youtube/kyHJg8smjzM-HD 1.png",
    }
  ];

  const recommendedVideos = [
    {
      title: "Get To Know Radio Budi Luhur",
      date: "21 Okt 2024",
      duration: "1:48",
      thumbnail: "/image/Youtube/8zVeXiPuWog-HD 1.png"
    },
    {
      title: "Radio Budi Luhur Video Profile 2021: New Era",
      date: "26 Sep 2021",
      duration: "2:32",
      thumbnail: "/image/Youtube/rEASOO9Kk3A-HD 2.png"
    },
    {
      title: "Radio Budi Luhur Video Profile 2023: One",
      date: "18 Sep 2023",
      duration: "3:15",
      thumbnail: "/image/Youtube/RCVi_MjLSy0-HD (1) 1.png"
    }
  ];

  return (
    <section className="w-full bg-[#2D5FFE] overflow-hidden flex flex-col items-center pb-16">
      {/* Top spacing and Tab Container */}
      <div className="w-full max-w-[1440px] relative h-[51px]">
        {/* Yellow Tab */}
        <div className="w-80 h-13 left-[56px] top-0 absolute bg-[#FFDD00] rounded-tl-[35px] rounded-tr-[35px] z-30">
          <div className="w-full h-full flex items-center justify-center text-black text-2xl font-extrabold font-['DM_Sans']">
            Program Youtube
          </div>
        </div>
      </div>

      {/* Hero Section - Full Width Black Background */}
      <div className="w-full h-[525px] relative overflow-hidden bg-zinc-900">
        {/* Full-bleed Hero Image on the left */}
        <div className="w-[calc(50%+256px)] h-[525px] absolute left-0 top-0">
          <Image
            src={videos[activeIndex].thumbnail}
            alt={videos[activeIndex].title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay - Optimized with multiple stops for a seamless transition 
               Starts solid for the text area (35% from right) then fades smoothly into the image. */}
        <div className="w-full h-full absolute inset-0 bg-gradient-to-l from-[#121212] from-35% via-[#121212]/95 via-40% via-[#121212]/50 via-10% to-transparent z-10 pointer-events-none" />

        {/* Content area */}
        {!showRecommended && (
          <div className="absolute z-20 left-[976px] top-[34px] right-8">
            <h1 className="text-white text-5xl font-black font-['DM_Sans'] tracking-tight leading-[1.1] mb-8">
              {videos[activeIndex].title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p className="text-white text-xl font-medium font-['DM_Sans'] text-justify leading-relaxed max-w-[400px]">
              {videos[activeIndex].description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-12">
              {/* PLAY */}
              <button className="w-36 h-14 bg-[#2D5FFE] rounded-[46px] flex items-center justify-start px-2 relative group hover:scale-105 transition-transform">
                <div className="w-11 h-11 bg-stone-900 rounded-full flex items-center justify-center">
                  <FaPlay className="text-white ml-0.5 text-sm" />
                </div>
                <span className="ml-4 text-white text-2xl font-bold font-['DM_Sans']">PLAY</span>
              </button>

              {/* RECOMMENDED */}
              <button 
                onClick={() => setShowRecommended(true)}
                className="w-56 h-14 bg-[#2D5FFE] rounded-[46px] flex items-center justify-center text-white text-2xl font-bold font-['DM_Sans'] hover:scale-105 transition-transform"
              >
                RECOMMENDED
              </button>
            </div>
          </div>
        )}

        {/* Recommended Panel */}
        {showRecommended && (
          <div className="absolute inset-y-0 right-0 w-full md:w-[500px] bg-[#121212]/95 z-40 backdrop-blur-md p-6 md:p-8 flex flex-col transition-all duration-500 animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-8 md:mb-10">
              <div className="bg-[#2D5FFE] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider">
                RECOMMENDED
              </div>
              <button 
                onClick={() => setShowRecommended(false)}
                className="text-white hover:text-[#FFDD00] transition-colors bg-white/10 p-2 rounded-full"
              >
                <FaTimes size={18} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 md:gap-8 overflow-y-auto pr-2 custom-scrollbar">
              {recommendedVideos.map((video, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer transition-all hover:bg-white/5 p-2 rounded-xl">
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <h3 className="text-white text-base md:text-lg font-bold leading-snug group-hover:text-[#2D5FFE] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex justify-between items-center text-white/60 text-xs md:text-sm mt-2 md:mt-3 font-medium">
                      <span>{video.date}</span>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  <div className="w-32 h-[72px] md:w-40 md:h-[90px] relative rounded-xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails Area - Centered below Hero */}
      <div className="w-full max-w-[1440px] relative h-[300px] mt-2">
        {/* Thumbnails */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute top-[33px] cursor-pointer group transition-all"
            style={{ left: `${33 + i * 346}px` }}
            onClick={() => setActiveIndex(i)}
          >
            {/* The Image */}
            <div className="w-80 h-48 overflow-hidden rounded-lg">
              <img
                src={videos[i].thumbnail}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Active Border */}
            {activeIndex === i && (
              <div className="w-[325px] h-[197px] absolute -left-[2.5px] -top-[2.5px] border-[5px] border-[#FFDD00] pointer-events-none z-30" />
            )}

            {/* Indicator Arrow */}
            {activeIndex === i && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#FFDD00] z-30" />
            )}
          </div>
        ))}

        {/* Pagination Dots */}
        <div className="absolute top-[248px] left-1/2 -translate-x-1/2 flex items-center gap-6">
          {[0, 1, 2].map((i) => {
            const isActive = (activeIndex === 0 && i === 0) || (activeIndex === 1 && i === 1) || (activeIndex >= 2 && i === 2);
            return (
              <div
                key={i}
                className={`w-6 h-6 rounded-full transition-colors duration-300 ${isActive ? 'bg-[#FFDD00]/95' : 'bg-white'}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};