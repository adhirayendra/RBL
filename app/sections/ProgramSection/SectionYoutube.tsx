"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";
import useSWR from "swr";
import { client } from "@/sanity/lib/client";

// Fetcher standard untuk mengambil data dari Sanity
const fetcher = (groqQuery: string) => client.fetch(groqQuery);

export const SectionYoutube = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showRecommended, setShowRecommended] = useState(false);

  // Query GROQ terintegrasi untuk menyusun data persis seperti format awal
  const query = `*[_type == "youtubeProgram"] {
    "id": _id,
    "title": programName,
    "description": description,
    "thumbnail": programThumbnail.asset->url,
    
    // Ambil link utama dari youtubeUrl program, atau fallback ke video terbaru dari youtubeVideo
    "link": coalesce(youtubeUrl, *[_type == "youtubeVideo" && program._ref == ^._id] | order(publishedDate desc)[0].youtubeUrl),
    
    // Ambil koleksi video lainnya di dalam program ini sebagai rekomendasi
    "recommendations": *[_type == "youtubeVideo" && program._ref == ^._id] | order(publishedDate desc) {
      "title": title,
      "date": publishedDate,
      "duration": duration,
      "link": youtubeUrl,
      "thumbnail": coalesce(videoThumbnail.asset->url, ^.programThumbnail.asset->url)
    }
  }`;

  const { data: videos = [], isLoading } = useSWR(query, fetcher);

  // Mengamankan transisi render jika data dari Sanity masih loading atau kosong
  if (isLoading || videos.length === 0) {
    return (
      <div className="w-full bg-[#2D5FFE] min-h-[500px] flex items-center justify-center">
        <span className="text-white font-bold animate-pulse text-xl">
          Loading YouTube Program...
        </span>
      </div>
    );
  }

  // Pengaman jika activeIndex di luar jangkauan array data riil
  const activeVideo = videos[activeIndex] || videos[0];

  // Helper untuk memformat judul dinamis agar memiliki pemisah baris (\n) otomatis setelah kata pertama
  const formatTitle = (title: string) => {
    const parts = title.split(" ");
    if (parts.length > 1) {
      return `${parts[0]}\n${parts.slice(1).join(" ")}`;
    }
    return title;
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-600 to-[#2D5FFE] md:bg-[#2D5FFE] overflow-hidden flex flex-col items-center pb-16">
      {/* Yellow Tab */}
      <div className="self-start bg-[#FFDD00] px-6 md:px-10 py-1.5 md:py-3 rounded-t-[20px] md:rounded-t-[35px] shadow-md ml-6 md:ml-16 z-20">
        <h2 className="text-black text-sm md:text-2xl font-extrabold font-['DM_Sans'] tracking-wide">
          Program Youtube
        </h2>
      </div>

      {/* Hero Section */}
      <div className="w-full flex flex-row bg-zinc-900 min-h-[144px] md:min-h-[500px] md:h-[525px] relative overflow-hidden">
        {/* Left Side: Active Video Image */}
        <div className="w-[65%] md:w-[60%] h-[144px] sm:h-[240px] md:h-[525px] relative flex-shrink-0">
          <Image
            src={activeVideo.thumbnail || "/image/placeholder.jpg"}
            alt={activeVideo.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 65vw, 60vw"
          />
          {/* Subtle gradient overlay to blend into the black background on desktop/mobile */}
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 to-transparent md:bg-none z-10 pointer-events-none" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 z-10 pointer-events-none" />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-[35%] md:w-[40%] flex flex-col justify-center py-2 pr-4 md:px-12 md:py-0 z-20 bg-zinc-900 relative">
          {!showRecommended ? (
            <div className="flex flex-col h-full md:justify-center">
              <h1 className="text-white text-[11px] sm:text-base md:text-4xl lg:text-5xl font-bold md:font-black font-['DM_Sans'] tracking-tight leading-[1.2] mb-1 md:mb-6">
                {formatTitle(activeVideo.title)
                  .split("\n")
                  .map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
              </h1>
              <p className="text-white/90 md:text-white/80 text-[7px] sm:text-[10px] md:text-base lg:text-lg font-medium font-['DM_Sans'] text-left md:text-justify leading-tight md:leading-relaxed max-w-[450px]">
                {activeVideo.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-row gap-1 md:gap-3 mt-2 md:mt-8">
                {/* PLAY */}
                <button
                  onClick={() =>
                    activeVideo.link && window.open(activeVideo.link, "_blank")
                  }
                  className="flex-1 md:flex-none md:w-36 h-5 md:h-12 bg-gradient-to-b from-blue-600 to-blue-900 md:bg-none md:bg-[#2D5FFE] rounded-[46px] flex items-center justify-center md:justify-start px-1 md:px-1.5 relative group hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="w-3 h-3 md:w-8 md:h-8 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPlay className="text-white ml-0.5 text-[5px] md:text-[10px]" />
                  </div>
                  <span className="flex-1 text-white text-[6px] sm:text-[8px] md:text-lg font-bold font-['DM_Sans'] md:pr-2 text-center md:text-left md:ml-3">
                    PLAY
                  </span>
                </button>

                {/* RECOMMENDED */}
                <button
                  onClick={() => setShowRecommended(true)}
                  aria-label="Show recommended videos"
                  className="flex-1 md:flex-none md:w-48 h-5 md:h-12 bg-gradient-to-b from-blue-600 to-blue-900 md:bg-none md:bg-[#2D5FFE] rounded-[46px] flex items-center justify-center text-white text-[6px] sm:text-[8px] md:text-lg font-bold font-['DM_Sans'] hover:scale-105 transition-transform cursor-pointer"
                >
                  RECOMMENDED
                </button>
              </div>
            </div>
          ) : (
            /* Recommended Panel */
            <div className="flex flex-col h-full justify-center animate-in fade-in slide-in-from-right duration-300">
              <div className="flex justify-between items-center mb-2 md:mb-6">
                <div
                  className="bg-[#2D5FFE] text-white px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-xs font-bold tracking-wider"
                  role="status"
                >
                  RECOMMENDED
                </div>
                <button
                  onClick={() => setShowRecommended(false)}
                  aria-label="Close recommendations panel"
                  className="text-white hover:text-[#FFDD00] transition-colors bg-white/10 p-1 md:p-2 rounded-full cursor-pointer"
                >
                  <FaTimes className="text-[10px] md:text-base" />
                </button>
              </div>

              <div className="flex flex-col gap-2 md:gap-4 overflow-y-auto max-h-[100px] md:max-h-[380px] pr-1 custom-scrollbar">
                {(activeVideo.recommendations || []).map(
                  (video: any, idx: number) => (
                    <div
                      key={idx}
                      onClick={() =>
                        video.link && window.open(video.link, "_blank")
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          video.link && window.open(video.link, "_blank");
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Watch recommended video: ${video.title}`}
                      className="flex gap-2 group cursor-pointer transition-all hover:bg-white/5 p-1 rounded-lg md:rounded-xl"
                    >
                      <div className="flex-1 flex flex-col justify-between py-0">
                        <h3 className="text-white text-[8px] md:text-sm font-bold leading-tight group-hover:text-[#2D5FFE] transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                        <div className="flex justify-between items-center text-white/60 text-[6px] md:text-xs mt-1 font-medium">
                          <span>
                            {new Date(video.date).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span>{video.duration}</span>
                        </div>
                      </div>
                      <div className="w-12 h-8 md:w-24 md:h-14 relative rounded-md md:rounded-lg overflow-hidden flex-shrink-0 shadow-sm md:shadow-lg group-hover:scale-105 transition-transform">
                        <Image
                          src={video.thumbnail || "/image/placeholder.jpg"}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 48px, 96px"
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails Area */}
      <div className="w-full max-w-[1440px] px-4 md:px-[33px] mt-4 md:mt-8">
        <div
          className="flex flex-row md:flex-wrap lg:flex-nowrap justify-start md:justify-center overflow-x-auto gap-2 md:gap-[26px] py-4 md:py-6 scrollbar-hide"
          role="tablist"
        >
          {videos.map((video: any, i: number) => (
            <div
              key={video.id}
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Select program: ${video.title}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveIndex(i);
                }
              }}
              className={`relative cursor-pointer group transition-all duration-300 flex-shrink-0 ${activeIndex === i ? "scale-[1.02] md:scale-105" : ""
                }`}
              onClick={() => setActiveIndex(i)}
            >
              {/* Indicator Arrow (Desktop only) */}
              {activeIndex === i && (
                <div className="hidden md:block absolute -top-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#FFDD00] z-30" />
              )}

              {/* The Image */}
              <div
                className="w-[96px] h-[54px] sm:w-[128px] sm:h-[72px] md:w-80 md:h-48 overflow-hidden rounded-md md:rounded-lg relative transition-all duration-300"
              >
                <Image
                  src={video.thumbnail || "/image/placeholder.jpg"}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 96px, 320px"
                />
              </div>

              {/* Active Border */}
              {activeIndex === i && (
                <div className="absolute -inset-[1.5px] md:-inset-[2px] border-[2px] md:border-[5px] border-[#FFDD00] rounded-md md:rounded-lg pointer-events-none z-30 transition-all duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Pagination/Scroll Indicator */}
        <div
          className="flex items-center justify-center gap-2 md:gap-6 mt-4 md:mt-12"
          role="navigation"
          aria-label="YouTube Program Pagination"
        >
          {videos.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to video ${i + 1}`}
              aria-current={activeIndex === i ? "step" : undefined}
              className={`w-1.5 h-1.5 md:w-6 md:h-6 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === i ? "bg-yellow-400" : "bg-white hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};