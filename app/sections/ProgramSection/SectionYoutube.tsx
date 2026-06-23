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
      thumbnail: "/image/Youtube/perkenalkin.webp",
      link: "https://www.youtube.com/watch?v=8zVeXiPuWog",
      recommendations: [
        {
          title: "Get To Know Radio Budi Luhur",
          date: "21 Okt 2024",
          duration: "1:48",
          thumbnail: "/image/Youtube/perkenalkin.webp",
          link: "https://www.youtube.com/watch?v=8zVeXiPuWog"
        },
        {
          title: "Radio Budi Luhur Video Profile 2021: New Era",
          date: "26 Sep 2021",
          duration: "2:32",
          thumbnail: "/image/Youtube/perkenalkin.webp",
          link: "https://www.youtube.com/watch?v=rEASOO9Kk3A"
        },
        {
          title: "Radio Budi Luhur Video Profile 2023: One",
          date: "18 Sep 2023",
          duration: "3:15",
          thumbnail: "/image/Youtube/RCVi_MjLSy0-HD (1) 1.png",
          link: "https://www.youtube.com/watch?v=RCVi_MjLSy0"
        }
      ]
    },
    {
      id: 2,
      id_content: "Nyobrak",
      title: "Nyobrak:\nEksistensi Radio",
      description: "Membahas perjalanan dan eksistensi radio komunitas kampus di era digital bersama para pakar dan praktisi media lokal.",
      thumbnail: "/image/Youtube/eps 1 ngobrak .webp",
      link: "https://www.youtube.com/watch?v=rEASOO9Kk3A",
      recommendations: [
        {
          title: "NGOBRAKS Eps. 2 Saat \"NORMAL\", jadi \"BEBAN?!\"",
          date: "15 Jan 2024",
          duration: "12:30",
          thumbnail: "/image/Youtube/eps 2 ngobrak.webp",
          link: "https://www.youtube.com/watch?v=rEASOO9Kk3A"
        },
        {
          title: "NGOBRAKS Eps. 3 KULIAH, MASA GITUH??!",
          date: "10 Feb 2024",
          duration: "08:45",
          thumbnail: "/image/Youtube/eps 3 ngobrak.webp",
          link: "https://www.youtube.com/watch?v=8zVeXiPuWog"
        },
        {
          title: "Tawabal: Back To School",
          date: "24 May 2025",
          duration: "06:32",
          thumbnail: "/image/Youtube/bts.webp",
          link: "https://www.youtube.com/watch?v=a2qeGP-UphY"
        }
      ]
    },
    {
      id: 3,
      id_content: "Tanya Jawab Asal",
      title: "Tanya Jawab Asal:\nEdisi Ramadhan",
      description: "Segmen spesial Ramadhan yang penuh dengan tanya jawab seru dan penuh tawa bersama pengisi acara favorit kamu.",
      thumbnail: "/image/Youtube/tawabal.webp",
      link: "https://www.youtube.com/watch?v=RCVi_MjLSy0",
      recommendations: [
        {
          title: "Behind the Scenes: Edisi Ramadhan",
          date: "20 Mar 2024",
          duration: "05:20",
          thumbnail: "/image/Youtube/tawabal.webp",
          link: "https://www.youtube.com/watch?v=RCVi_MjLSy0"
        },
        {
          title: "Keseruan Buka Puasa Bersama RBL",
          date: "25 Mar 2024",
          duration: "04:15",
          thumbnail: "/image/Youtube/tawabal.webp",
          link: "https://www.youtube.com/watch?v=kyHJg8smjzM"
        }
      ]
    },
    {
      id: 4,
      id_content: "Now We Know",
      title: "Now We Know:\nProgram Edukasi",
      description: "Wawasan baru setiap hari! Temukan fakta-fakta unik yang belum kamu ketahui sebelumnya hanya di program Now We Know.",
      thumbnail: "/image/Youtube/now we know.webp",
      link: "https://www.youtube.com/watch?v=kyHJg8smjzM",
      recommendations: [
        {
          title: "Fakta Unik Sejarah Radio",
          date: "05 Apr 2024",
          duration: "06:10",
          thumbnail: "/image/Youtube/now we know.webp",
          link: "https://www.youtube.com/watch?v=kyHJg8smjzM"
        },
        {
          title: "Teknolgi di Balik Siaran Radio",
          date: "12 Apr 2024",
          duration: "07:30",
          thumbnail: "/image/Youtube/now we know.webp",
          link: "https://www.youtube.com/watch?v=RCVi_MjLSy0"
        }
      ]
    }
  ];

  return (
    <section className="w-full bg-[#2D5FFE] overflow-hidden flex flex-col items-center pb-8 md:pb-16">
      {/* Top spacing and Tab Container */}
      <div className="w-full max-w-[1440px] relative h-[51px] px-4 md:px-14">
        {/* Yellow Tab */}
        <div className="w-64 sm:w-80 h-13 md:left-[56px] left-1/2 -translate-x-1/2 md:translate-x-0 top-0 absolute bg-[#FFDD00] rounded-tl-[35px] rounded-tr-[35px] z-30">
          <div className="w-full h-full flex items-center justify-center text-black text-xl md:text-2xl font-extrabold font-['DM_Sans']">
            Program Youtube
          </div>
        </div>
      </div>

      {/* Hero Section - Full Width Black Background */}
      <div className="w-full h-auto min-h-[525px] md:h-[525px] relative overflow-hidden bg-zinc-900 flex flex-col justify-end md:block">
        {/* Hero Image */}
        <div className="w-full h-[250px] sm:h-[350px] md:w-[calc(50%+256px)] md:h-[525px] relative md:absolute left-0 top-0">
          <Image
            src={videos[activeIndex].thumbnail}
            alt={videos[activeIndex].title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
          />
        </div>

        {/* Gradient Overlay - Mobile (Top-down) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] from-40% via-[#121212]/90 via-60% to-transparent z-10 pointer-events-none h-full w-full md:hidden" />

        {/* Gradient Overlay - Desktop (Right-Left) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-[#121212] from-35% via-[#121212]/95 via-45% to-transparent z-10 pointer-events-none h-full w-full" />

        {/* Content area */}
        {!showRecommended && (
          <div className="relative md:absolute z-20 px-6 pb-8 pt-4 md:p-0 md:left-[calc(50%+60px)] lg:left-[976px] md:top-[50px] lg:top-[34px] md:right-8 lg:right-12 max-w-full md:max-w-[450px] lg:max-w-[400px]">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-['DM_Sans'] tracking-tight leading-[1.1] mb-3 md:mb-6">
              {videos[activeIndex].title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium font-['DM_Sans'] text-justify leading-relaxed line-clamp-4 md:line-clamp-none">
              {videos[activeIndex].description}
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 mt-6 md:mt-10 lg:mt-12">
              {/* PLAY */}
              <a
                href={videos[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                suppressHydrationWarning
                className="flex-1 sm:flex-none sm:w-36 h-12 md:h-14 bg-[#2D5FFE] rounded-[46px] flex items-center justify-start px-2 relative group hover:scale-[1.03] transition-transform cursor-pointer"
              >
                <div className="w-8 h-8 md:w-11 md:h-11 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPlay className="text-white ml-0.5 text-xs md:text-sm" />
                </div>
                <span className="ml-3 md:ml-4 text-white text-lg md:text-2xl font-bold font-['DM_Sans']">PLAY</span>
              </a>

              {/* RECOMMENDED */}
              <button
                suppressHydrationWarning
                onClick={() => setShowRecommended(true)}
                aria-label="Show recommended videos"
                className="flex-1 sm:flex-none sm:w-56 h-12 md:h-14 bg-[#2D5FFE] rounded-[46px] flex items-center justify-center text-white text-lg md:text-2xl font-bold font-['DM_Sans'] hover:scale-[1.03] transition-transform cursor-pointer"
              >
                RECOMMENDED
              </button>
            </div>
          </div>
        )}

        {/* Recommended Panel */}
        {showRecommended && (
          <div className="absolute inset-y-0 right-0 w-full md:w-[450px] lg:w-[500px] bg-[#121212]/95 z-40 backdrop-blur-md p-6 md:p-8 flex flex-col transition-all duration-500 animate-in slide-in-from-right h-full">
            <div className="flex justify-between items-center mb-6 md:mb-8 lg:mb-10">
              <div className="bg-[#2D5FFE] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider" role="status">
                RECOMMENDED
              </div>
              <button
                onClick={() => setShowRecommended(false)}
                aria-label="Close recommendations panel"
                className="text-white hover:text-[#FFDD00] transition-colors bg-white/10 p-2 rounded-full cursor-pointer z-50"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {(videos[activeIndex].recommendations || []).map((video, idx) => (
                <div
                  key={idx}
                  onClick={() => video.link && window.open(video.link, '_blank')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      video.link && window.open(video.link, '_blank');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Watch recommended video: ${video.title}`}
                  className="flex gap-3 md:gap-4 group cursor-pointer transition-all hover:bg-white/5 p-2 rounded-xl text-left"
                >
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-snug group-hover:text-[#2D5FFE] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex justify-between items-center text-white/60 text-xs md:text-sm mt-2 font-medium">
                      <span>{video.date}</span>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  <div className="w-24 h-14 sm:w-32 sm:h-[72px] md:w-40 md:h-[90px] relative rounded-xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-[1.03] transition-transform">
                    <Image
                      src={video.thumbnail}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails Area - Grid system for seamless cross-device layouts */}
      {/* Thumbnails Area - Grid system for seamless cross-device layouts */}
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-[33px] mt-8">
        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center gap-4 md:gap-[26px]" role="tablist">
          {videos.map((video, i) => (
            <button // <-- Mengubah div utama menjadi <button> agar mobile-friendly secara native
              key={video.id}
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Select program: ${video.title.replace('\n', ' ')}`}
              tabIndex={0}
              onClick={() => setActiveIndex(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveIndex(i);
                }
              }}
              // pointer-events-auto memastikan element ini menangkap sentuhan, touch-manipulation menghilangkan delay 300ms di mobile
              className="relative cursor-pointer group transition-all w-full md:w-auto text-left pointer-events-auto touch-manipulation focus:outline-none"
            >
              {/* Image Container - Mengubah group-hover menjadi md:group-hover agar efeknya HANYA jalan di desktop */}
              <div className={`w-full md:w-44 lg:w-80 h-24 sm:h-32 md:h-28 lg:h-48 overflow-hidden rounded-lg relative transition-all duration-300 ${activeIndex === i ? 'scale-[1.02]' : ''}`}>
                <Image
                  src={video.thumbnail}
                  alt=""
                  fill
                  className="object-cover md:group-hover:scale-110 transition-transform duration-500" // <-- Ditambah prefix md:
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 176px, 320px"
                />
              </div>

              {/* Active Border - Ditambahkan pointer-events-none agar border kuning TIDAK memblokir sentuhan jari */}
              {activeIndex === i && (
                <div className="absolute -inset-[2px] border-[3px] md:border-[5px] border-[#FFDD00] rounded-lg pointer-events-none z-20 transition-all duration-300" />
              )}

              {/* Indicator Arrow - Ditambahkan pointer-events-none juga */}
              {activeIndex === i && (
                <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] md:border-l-[10px] border-l-transparent border-r-[8px] md:border-r-[10px] border-r-transparent border-b-[8px] md:border-b-[10px] border-b-[#FFDD00] z-20 pointer-events-none" />
              )}
            </button>
          ))}
        </div>

        {/* Pagination/Scroll Indicator */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12" role="navigation" aria-label="YouTube Program Pagination">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to video ${i + 1}`}
              aria-current={activeIndex === i ? 'step' : undefined}
              className={`w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full cursor-pointer transition-all duration-300 touch-manipulation ${activeIndex === i ? 'bg-[#FFDD00]' : 'bg-white hover:bg-white/80'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};