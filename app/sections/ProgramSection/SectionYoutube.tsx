"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";
<<<<<<< HEAD
import useSWR from "swr";
import { client } from "@/sanity/lib/client";

// Fetcher standard untuk mengambil data dari Sanity
const fetcher = (groqQuery: string) => client.fetch(groqQuery);
=======
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6

export const SectionYoutube = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showRecommended, setShowRecommended] = useState(false);

<<<<<<< HEAD
  // Query GROQ terintegrasi untuk menyusun data persis seperti format awal
  const query = `*[_type == "youtubeProgram"] {
    "id": _id,
    "title": programName,
    "description": description,
    "thumbnail": programThumbnail.asset->url,
    
    // Ambil video pertama (terbaru) sebagai video utama segmen ini
    "link": *[_type == "youtubeVideo" && program._ref == ^._id] | order(publishedDate desc)[0].youtubeUrl,
    
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
=======
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
          title: "NGOBRAKS Eps. 2 Saat \"NORMAL\",  jadi \"BEBAN?!\"",
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
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6

  return (
    <section className="w-full bg-gradient-to-b from-blue-600 to-[#2D5FFE] md:bg-[#2D5FFE] overflow-hidden flex flex-col items-center pb-16">
      {/* Yellow Tab */}
      <div className="self-start bg-[#FFDD00] text-black font-black px-6 py-1 rounded-t-[26px] text-[11px] md:text-2xl tracking-wide shadow-md ml-6 md:ml-16">
        Program Youtube
      </div>

      {/* Hero Section */}
      <div className="w-full flex flex-row bg-zinc-900 min-h-[144px] md:min-h-[500px] md:h-[525px] relative overflow-hidden">
        {/* Left Side: Active Video Image */}
        <div className="w-[65%] md:w-[60%] h-[144px] sm:h-[240px] md:h-[525px] relative flex-shrink-0">
          <Image
<<<<<<< HEAD
            src={activeVideo.thumbnail || "/image/placeholder.jpg"}
            alt={activeVideo.title}
=======
            src={videos[activeIndex].thumbnail}
            alt={videos[activeIndex].title}
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 65vw, 60vw"
          />
          {/* Subtle gradient overlay to blend into the black background on desktop/mobile */}
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 to-transparent md:bg-none z-10 pointer-events-none" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent to-[#121212] z-10 pointer-events-none" />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-[35%] md:w-[40%] flex flex-col justify-center py-2 pr-4 md:px-12 md:py-0 z-20 bg-zinc-900 relative">
          {!showRecommended ? (
            <div className="flex flex-col h-full md:justify-center">
              <h1 className="text-white text-[11px] sm:text-base md:text-4xl lg:text-5xl font-bold md:font-black font-['DM_Sans'] tracking-tight leading-[1.2] mb-1 md:mb-6">
<<<<<<< HEAD
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
=======
                {videos[activeIndex].title.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>
              <p className="text-white/90 md:text-white/80 text-[7px] sm:text-[10px] md:text-base lg:text-lg font-medium font-['DM_Sans'] text-left md:text-justify leading-tight md:leading-relaxed max-w-[450px]">
                {videos[activeIndex].description}
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
              </p>

              {/* Buttons */}
              <div className="flex flex-row gap-1 md:gap-3 mt-2 md:mt-8">
                {/* PLAY */}
                <button
<<<<<<< HEAD
                  onClick={() =>
                    activeVideo.link && window.open(activeVideo.link, "_blank")
                  }
=======
                  onClick={() => window.open(videos[activeIndex].link, '_blank')}
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
                  className="flex-1 md:flex-none md:w-36 h-5 md:h-12 bg-gradient-to-b from-blue-600 to-blue-900 md:bg-none md:bg-[#2D5FFE] rounded-[46px] flex items-center justify-center md:justify-start px-1 md:px-1.5 relative group hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="w-3 h-3 md:w-8 md:h-8 bg-stone-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPlay className="text-white ml-0.5 text-[5px] md:text-[10px]" />
                  </div>
<<<<<<< HEAD
                  <span className="flex-1 text-white text-[6px] sm:text-[8px] md:text-lg font-bold font-['DM_Sans'] md:pr-2 text-center md:text-left md:ml-3">
                    PLAY
                  </span>
=======
                  <span className="flex-1 text-white text-[6px] sm:text-[8px] md:text-lg font-bold font-['DM_Sans'] md:pr-2 text-center md:text-left md:ml-3">PLAY</span>
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
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
<<<<<<< HEAD
                <div
                  className="bg-[#2D5FFE] text-white px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-xs font-bold tracking-wider"
                  role="status"
                >
=======
                <div className="bg-[#2D5FFE] text-white px-2 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-xs font-bold tracking-wider" role="status">
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
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
<<<<<<< HEAD
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
=======
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
                    className="flex gap-2 group cursor-pointer transition-all hover:bg-white/5 p-1 rounded-lg md:rounded-xl"
                  >
                    <div className="flex-1 flex flex-col justify-between py-0">
                      <h3 className="text-white text-[8px] md:text-sm font-bold leading-tight group-hover:text-[#2D5FFE] transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex justify-between items-center text-white/60 text-[6px] md:text-xs mt-1 font-medium">
                        <span>{video.date}</span>
                        <span>{video.duration}</span>
                      </div>
                    </div>
                    <div className="w-12 h-8 md:w-24 md:h-14 relative rounded-md md:rounded-lg overflow-hidden flex-shrink-0 shadow-sm md:shadow-lg group-hover:scale-105 transition-transform">
                      <Image
                        src={video.thumbnail}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 48px, 96px"
                      />
                    </div>
                  </div>
                ))}
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnails Area */}
      <div className="w-full max-w-[1440px] px-4 md:px-[33px] mt-4 md:mt-8">
<<<<<<< HEAD
        <div
          className="flex flex-row md:flex-wrap lg:flex-nowrap justify-start md:justify-center overflow-x-auto gap-2 md:gap-[26px] pb-2 md:pb-0 scrollbar-hide"
          role="tablist"
        >
          {videos.map((video: any, i: number) => (
=======
        <div className="flex flex-row md:flex-wrap lg:flex-nowrap justify-start md:justify-center overflow-x-auto gap-2 md:gap-[26px] pb-2 md:pb-0 scrollbar-hide" role="tablist">
          {videos.map((video, i) => (
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
            <div
              key={video.id}
              role="tab"
              aria-selected={activeIndex === i}
<<<<<<< HEAD
              aria-label={`Select program: ${video.title}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
=======
              aria-label={`Select program: ${video.title.replace('\n', ' ')}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
                  setActiveIndex(i);
                }
              }}
              className="relative cursor-pointer group transition-all flex-shrink-0"
              onClick={() => setActiveIndex(i)}
            >
              {/* Indicator Arrow (Desktop only) */}
              {activeIndex === i && (
                <div className="hidden md:block absolute -top-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#FFDD00] z-30" />
              )}

              {/* The Image */}
<<<<<<< HEAD
              <div
                className={`w-[96px] h-[54px] sm:w-[128px] sm:h-[72px] md:w-80 md:h-48 overflow-hidden rounded-md md:rounded-lg relative transition-all duration-300 ${activeIndex === i ? "scale-[1.02] md:scale-105" : ""}`}
              >
                <Image
                  src={video.thumbnail || "/image/placeholder.jpg"}
=======
              <div className={`w-[96px] h-[54px] sm:w-[128px] sm:h-[72px] md:w-80 md:h-48 overflow-hidden rounded-md md:rounded-lg relative transition-all duration-300 ${activeIndex === i ? 'scale-[1.02] md:scale-105' : ''}`}>
                <Image
                  src={video.thumbnail}
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
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
<<<<<<< HEAD
        <div
          className="flex items-center justify-center gap-2 md:gap-6 mt-4 md:mt-12"
          role="navigation"
          aria-label="YouTube Program Pagination"
        >
          {videos.map((_: any, i: number) => (
=======
        <div className="flex items-center justify-center gap-2 md:gap-6 mt-4 md:mt-12" role="navigation" aria-label="YouTube Program Pagination">
          {videos.map((_, i) => (
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to video ${i + 1}`}
<<<<<<< HEAD
              aria-current={activeIndex === i ? "step" : undefined}
              className={`w-1.5 h-1.5 md:w-6 md:h-6 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === i ? "bg-yellow-400" : "bg-white hover:bg-white/80"}`}
=======
              aria-current={activeIndex === i ? 'step' : undefined}
              className={`w-1.5 h-1.5 md:w-6 md:h-6 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === i ? 'bg-yellow-400' : 'bg-white hover:bg-white/80'}`}
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
            />
          ))}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 8d71c9724697ca01f07ae17fe16811502e1baeb6
