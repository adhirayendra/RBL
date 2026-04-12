"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export const SectionYoutube = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Perkenalkin Radio Budi luhur",
      description: "Radio komunitas yang telah menjadi suara khas Universitas Budi Luhur sejak 2005, hadir di frekuensi 107.7 FM dan dapat dinikmati secara global melalui platform streaming di www.radiobudiluhur.com atau di RCTI+",
      thumbnail: "/image/Youtubr/8zVeXiPuWog-HD 1.png",
    },
    {
      id: 2,
      title: "Nyobrak: Eksistensi Radio & Komunitas Kampus",
      description: "Membahas perjalanan dan eksistensi radio komunitas kampus di era digital bersama para pakar dan praktisi media lokal.",
      thumbnail: "/image/Youtubr/8zVeXiPuWog-HD 1.png", // Using same placeholder for now
    },
    {
      id: 3,
      title: "Tanya Jawab Asal Edisi Ramadhan",
      description: "Segmen spesial Ramadhan yang penuh dengan tanya jawab seru dan penuh tawa bersama pengisi acara favorit kamu.",
      thumbnail: "/image/Youtubr/8zVeXiPuWog-HD 1.png",
    },
    {
      id: 4,
      title: "Now We Know: Program Edukasi Seru",
      description: "Wawasan baru setiap hari! Temukan fakta-fakta unik yang belum kamu ketahui sebelumnya hanya di program Now We Know.",
      thumbnail: "/image/Youtubr/8zVeXiPuWog-HD 1.png",
    }
  ];

  return (
    <section className="w-full bg-[#2D5FFE] relative pt-16 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* Section Header Tab */}
        <div className="absolute top-0 left-6 md:left-16 -translate-y-1/2 bg-[#FFDD00] px-8 md:px-10 py-2.5 md:py-3.5 rounded-[15px] z-20">
          <h2 className="text-black text-lg md:text-2xl font-black font-['DM_Sans'] tracking-tight">Program Youtube</h2>
        </div>

        {/* Selected Video Hero Area */}
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-900 rounded-[20px] md:rounded-[30px] overflow-hidden mb-8 md:mb-12 shadow-2xl flex items-center justify-end">
          {/* Background Image/Video */}
          <div className="absolute inset-0 z-0">
             <Image 
              src={videos[activeIndex].thumbnail} 
              alt={videos[activeIndex].title}
              fill
              className="object-cover"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-900/60 to-zinc-900/95" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full md:w-[45%] p-6 md:p-12 text-left">
            <h1 className="text-white text-2xl md:text-5xl font-extrabold font-['DM_Sans'] leading-tight mb-4 flex flex-col">
              {videos[activeIndex].title.split(':').map((part, i) => (
                <span key={i} className="tracking-wide">{part.trim()}</span>
              ))}
            </h1>
            <p className="text-white text-[10px] md:text-sm font-normal font-['DM_Sans'] leading-relaxed mb-6 md:mb-10 max-w-sm text-justify opacity-90">
              {videos[activeIndex].description}
            </p>
            
            <div className="flex flex-wrap justify-start gap-3 md:gap-4">
              <button className="bg-[#1C3FAA] shadow-lg text-white font-bold text-[10px] md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-[46px] flex items-center gap-2 md:gap-3 hover:bg-blue-700 transition-all transform hover:scale-105 border border-blue-400/30 group">
                <div className="w-5 h-5 md:w-7 md:h-7 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <FaPlay className="text-white ml-0.5 text-[8px] md:text-[10px]" />
                </div>
                PLAY
              </button>
              <button className="bg-[#1C3FAA] shadow-lg text-white font-bold text-[10px] md:text-sm px-6 md:px-8 py-2 md:py-2.5 rounded-[46px] hover:bg-blue-700 transition-all transform hover:scale-105 border border-blue-400/30">
                RECOMMENDED
              </button>
            </div>
          </div>
        </div>

        {/* Video Thumbnails Slider */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-6 justify-start">
          {videos.map((video, i) => (
            <div 
              key={video.id} 
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 w-[240px] md:w-[320px] aspect-video relative cursor-pointer transition-all duration-300 ${
                i === activeIndex ? 'scale-105' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Active Indicator Arrow */}
              {i === activeIndex && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#FFDD00] z-10" />
              )}
              
              <div className={`w-full h-full overflow-hidden rounded-xl md:rounded-2xl border-[3px] md:border-[6px] transition-colors duration-300 ${
                i === activeIndex ? 'border-[#FFDD00]' : 'border-transparent'
              }`}>
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center flex-row items-center gap-3 mt-4 md:mt-8">
          {videos.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-[#FFDD00] scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};