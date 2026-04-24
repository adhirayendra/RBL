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

  // Fetch Now Playing info from AzuraCast
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

  // Sync volume state with Audio element
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
        src="https://c2.siar.us/listen/radiobudiluhur/live" 
        preload="none" 
      />

      {/* Main Container - Desktop relies on exact mapping, Mobile relies on flex */}
      <div className="relative w-full flex flex-col md:block md:w-[800px] md:h-[212px] md:mt-[21px] bg-white rounded-3xl shadow-lg px-6 py-6 md:p-0">
        
        {/* Album Art (Left: 11px, Top: 0 from wrapper, which is -21px from white box) */}
        <div className="hidden md:block absolute w-52 h-52 rounded-[10px] shadow-[6px_10px_4px_0px_rgba(0,0,0,0.25)] z-10 overflow-hidden bg-gray-200" style={{ left: '11px', top: '-21px' }}>
          <Image 
            src={nowPlaying.art} 
            alt="Album Art" 
            fill
            className="object-cover"
            sizes="208px"
          />
        </div>
        
        {/* Mobile Album Art */}
        <div className="md:hidden w-52 h-52 mx-auto rounded-[10px] shadow-[6px_10px_4px_0px_rgba(0,0,0,0.25)] z-10 overflow-hidden bg-gray-200 -mt-20 mb-6 relative shrink-0">
          <Image 
            src={nowPlaying.art} 
            alt="Album Art" 
            fill
            className="object-cover"
            sizes="208px"
          />
        </div>

        {/* Text Container: Desktop (absolute) & Mobile (flow) */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-1 md:gap-0">
          
          {/* Title */}
          {/* Top: 55px from wrapper = 34px from white box, Left: 225px */}
          <div className="md:absolute flex flex-col md:flex-row items-center md:items-start gap-3" style={{ left: '225px', top: '34px' }}>
            <h2 className="text-stone-900 text-3xl md:text-4xl font-bold truncate max-w-full md:max-w-[420px] leading-none">
              {nowPlaying.title}
            </h2>
          </div>

          {/* Live Indicator (Far Right) */}
          <div className="md:absolute flex justify-center mt-2 md:mt-0" style={{ right: '32px', top: '38px' }}>
            <div className="flex items-center justify-center gap-1.5 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
              <span className="text-red-500 text-[10px] font-extrabold uppercase tracking-wider">Live</span>
            </div>
          </div>

          {/* Artist */}
          {/* Top: 101px from wrapper = 80px from white box, Left: 228px */}
          <div className="md:absolute" style={{ left: '228px', top: '80px' }}>
            <p className="text-neutral-500 text-lg md:text-xl font-bold truncate max-w-full md:max-w-[500px] leading-tight mt-1 md:mt-0">
              {nowPlaying.artist}
            </p>
          </div>

        </div>

        {/* Controls Container: Desktop (absolute) & Mobile (flow) */}
        <div className="flex flex-row justify-between items-center w-full mt-6 md:mt-0 md:w-auto">
          
          {/* Play Icon */}
          {/* Top: 173px from wrapper = 152px from white box, Left: 225px */}
          <button 
            onClick={togglePlay}
            className="md:absolute flex items-center justify-center overflow-hidden hover:scale-105 transition-transform shrink-0 outline-none cursor-pointer"
            style={{ left: '225px', top: '152px', width: '35px', height: '35px' }}
            aria-label={isPlaying ? "Pause Stream" : "Play Stream"}
          >
            {/* Outline matches the provided snippet: outline-4 outline-offset-[-2px] */}
            <div className="absolute left-[2.67px] top-[2.67px] w-7 h-7 outline outline-4 outline-offset-[-2px] outline-neutral-500 rounded-full flex items-center justify-center">
               {isPlaying ? (
                <FaPause className="text-neutral-500 text-[10px]" />
              ) : (
                <FaPlay className="text-neutral-500 text-[10px] pl-[2px]" />
              )}
            </div>
          </button>

          {/* Volume Control */}
          {/* Top: 189px from wrapper = 168px from white box, Left: 645px */}
          <div className="md:absolute flex items-center w-32 shrink-0" style={{ left: '645px', top: '168px', height: '8px' }}>
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
