"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa";

interface NowPlaying {
  title: string;
  artist: string;
  art: string;
}

export default function RadioWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [nowPlaying, setNowPlaying] = useState<NowPlaying>({
    title: "Memuat info stream...",
    artist: "Radio Budi Luhur",
    art: "https://placehold.co/201x201/2D5FFE/FFFFFF?text=RBL",
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("https://c2.siar.us/api/nowplaying/radiobudiluhur");
        if (response.ok) {
          const data = await response.json();
          setNowPlaying({
            title: data.now_playing?.song?.title || "Live Stream",
            artist: data.now_playing?.song?.artist || "Radio Budi Luhur",
            art: data.now_playing?.song?.art || "https://placehold.co/201x201/2D5FFE/FFFFFF?text=RBL",
          });
        }
      } catch (error) {
        console.error("Gagal mengambil data now playing", error);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.load();
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((e) => {
          console.error("Autoplay di-block atau terjadi error: ", e);
        });
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="relative w-full max-w-[800px] h-auto md:h-[240px] mx-auto font-['DM_Sans'] flex justify-center">

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="https://c2.siar.us/listen/radiobudiluhur/stream"
        preload="none"
      />

      {/* Main Container */}
      <div className="relative w-full flex flex-col md:block md:w-[800px] md:h-[212px] md:mt-[21px] bg-white rounded-3xl shadow-lg px-6 py-6 md:p-0">

        {/* Desktop Album Art */}
        <div className="hidden md:block absolute w-52 h-52 rounded-[10px] shadow-[6px_10px_4px_0px_rgba(0,0,0,0.25)] z-10 overflow-hidden bg-gray-200 md:left-[11px] md:-top-[21px]">
          <Image
            src={nowPlaying.art}
            alt="Album Art"
            fill
            className="object-cover"
            sizes="208px"
          />
        </div>

        {/* Mobile Album Art */}
        <div className="md:hidden w-52 h-52 mx-auto rounded-[10px] shadow-[6px_10px_4px_0px_rgba(0,0,0,0.25)] z-10 overflow-hidden bg-gray-200 -mt-20 mb-10 relative shrink-0">
          <Image
            src={nowPlaying.art}
            alt="Album Art"
            fill
            className="object-cover"
            sizes="208px"
          />
        </div>

        {/* Text Container */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-1 md:gap-0 w-full px-4 md:px-0">

          {/* Title */}
          <div className="relative md:absolute flex flex-col md:flex-row items-center md:items-start gap-3 md:left-[255px] md:top-[34px] w-full md:w-auto">
            <h2 className="text-stone-900 text-xl sm:text-2xl md:text-4xl font-bold line-clamp-2 md:truncate w-full md:max-w-[420px] leading-tight md:leading-none">
              {nowPlaying.title}
            </h2>
          </div>

          {/* Artist */}
          <div className="relative md:absolute mt-1 md:mt-0 md:left-[258px] md:top-[80px]">
            <p className="text-neutral-500 text-[15px] md:text-xl font-bold truncate max-w-full md:max-w-[500px] leading-tight">
              {nowPlaying.artist}
            </p>
          </div>

        </div>

        {/* Controls Container */}
        <div className="flex flex-row justify-between items-center w-full mt-6 md:mt-0 md:w-auto">

          {/* Play Icon */}
          <button
            onClick={togglePlay}
            className="relative md:absolute flex items-center justify-center overflow-hidden hover:scale-105 transition-transform shrink-0 outline-none cursor-pointer w-[35px] h-[35px] md:left-[225px] md:top-[152px]"
            aria-label={isPlaying ? "Pause Stream" : "Play Stream"}
          >
            <div className="absolute left-[2.67px] top-[2.67px] w-7 h-7 outline outline-4 outline-offset-[-2px] outline-neutral-500 rounded-full flex items-center justify-center">
              {isPlaying ? (
                <FaPause className="text-neutral-500 text-[10px]" />
              ) : (
                <FaPlay className="text-neutral-500 text-[10px] pl-[2px]" />
              )}
            </div>
          </button>

          {/* Volume Control */}
          <div className="relative md:absolute flex items-center w-32 shrink-0 h-[8px] md:left-[645px] md:top-[168px]">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-2 bg-neutral-500 rounded-3xl appearance-none cursor-pointer accent-stone-900"
              aria-label="Volume"
            />
          </div>

        </div>

      </div>
    </div>
  );
}