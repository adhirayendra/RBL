"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaEllipsisH,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

type Track = {
  title: string;
  duration: string;
  src: string;
};

type Episode = {
  _id?: string;
  id?: number;
  title: string;
  author: string;
  coverImage: string;
  duration?: string;
  progress?: string;
  playlist: Track[];
};

type Props = {
  initialEpisodes?: Episode[];
};

export default function ProgramSpotify({ initialEpisodes = [] }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Use Sanity data if available, otherwise empty
  const episodes: Episode[] = initialEpisodes;

  const currentEpisode = episodes[activeIndex];
  const currentTrack = currentEpisode?.playlist?.[currentTrackIdx];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (episodes.length === 0) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // swipe left (next)
      setActiveIndex((activeIndex + 1) % episodes.length);
      setCurrentTrackIdx(0);
      if (isPlaying && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else if (diff < -50) {
      // swipe right (prev)
      setActiveIndex((activeIndex - 1 + episodes.length) % episodes.length);
      setCurrentTrackIdx(0);
      if (isPlaying && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [activeIndex, currentTrackIdx]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (vol > 0) setIsMuted(false);
  };

  const skipTrack = (direction: "next" | "prev") => {
    const playlist = currentEpisode.playlist;
    if (direction === "next") {
      setCurrentTrackIdx((currentTrackIdx + 1) % playlist.length);
    } else {
      setCurrentTrackIdx(
        (currentTrackIdx - 1 + playlist.length) % playlist.length,
      );
    }
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full">
      {episodes.length === 0 ? (
        <section className="w-full relative pt-2 md:pt-16 pb-10 md:pb-12 mt-6 md:mt-12">
          <div className="absolute inset-0 bg-[#2C2C2C]" />
          <div className="absolute top-0 left-6 md:left-16 -translate-y-full bg-[#FFDD00] px-6 md:px-10 py-1.5 md:py-3 rounded-t-[20px] md:rounded-t-[35px] z-20">
            <h2 className="text-black text-sm md:text-2xl font-extrabold font-['DM_Sans'] tracking-wide">
              Program Spotify
            </h2>
          </div>
          <div className="relative z-20 flex items-center justify-center h-48 text-white/50">
            <p>Belum ada program tersedia.</p>
          </div>
        </section>
      ) : (
        <>
          <audio
            ref={audioRef}
            src={currentTrack?.src}
            key={`${activeIndex}-${currentTrackIdx}`}
          />

          <section className="w-full relative pt-2 md:pt-16 pb-10 md:pb-12 mt-6 md:mt-12">
            {/* Layer Background Abu-abu */}
            <div className="absolute inset-0 bg-[#2C2C2C]" />

            <div className="absolute top-0 left-6 md:left-16 -translate-y-full bg-[#FFDD00] px-6 md:px-10 py-1.5 md:py-3 rounded-t-[20px] md:rounded-t-[35px] z-20">
              <h2 className="text-black text-sm md:text-2xl font-extrabold font-['DM_Sans'] tracking-wide">
                Program Spotify
              </h2>
            </div>

            {/* Konten Utama dinaikkan ke z-20 */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start gap-10 lg:gap-16 relative z-20">
              {/* Main Cover - Desktop Only */}
              <div className="hidden md:block w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-[20px] overflow-hidden shadow-2xl transition-all duration-500">
                <Image
                  src={currentEpisode.coverImage}
                  alt={currentEpisode.title}
                  width={316}
                  height={316}
                  className="w-full h-full object-cover"
                  priority
                  quality={80}
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Overlapping Album Covers - Mobile Only */}
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="flex md:hidden justify-center items-center gap-2 relative w-full h-[180px] my-4 overflow-hidden select-none touch-pan-y"
              >
                {/* Preceding Cover */}
                <div
                  onClick={() => {
                    setActiveIndex(
                      (activeIndex - 1 + episodes.length) % episodes.length,
                    );
                    setCurrentTrackIdx(0);
                  }}
                  className="w-24 h-24 relative rounded-md overflow-hidden opacity-60 scale-90 cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={
                      episodes[
                        (activeIndex - 1 + episodes.length) % episodes.length
                      ].coverImage
                    }
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                {/* Active Cover */}
                <div className="w-36 h-36 relative rounded-md overflow-hidden z-10 shadow-2xl scale-100 transition-all duration-300">
                  <Image
                    src={currentEpisode.coverImage}
                    alt={currentEpisode.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="144px"
                  />
                </div>

                {/* Succeeding Cover */}
                <div
                  onClick={() => {
                    setActiveIndex((activeIndex + 1) % episodes.length);
                    setCurrentTrackIdx(0);
                  }}
                  className="w-24 h-24 relative rounded-md overflow-hidden opacity-60 scale-90 cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={episodes[(activeIndex + 1) % episodes.length].coverImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              </div>

              <div className="flex-1 w-full text-white">
                <div className="mb-6 hidden md:block">
                  <h3 className="text-3xl md:text-4xl font-bold mb-1 transition-all duration-300">
                    {isPlaying
                      ? `PLAYING: ${currentTrack.title}`
                      : `AUDIO SERIES : ${currentEpisode.title}`}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 font-medium">
                    {currentEpisode.author}
                  </p>
                </div>

                {/* Player controls - Desktop Layout */}
                <div className="hidden md:flex items-center gap-4 bg-white/5 py-4 rounded-xl px-4 lg:px-6 mb-6">
                  <button
                    suppressHydrationWarning
                    onClick={() => skipTrack("prev")}
                    aria-label="Previous track"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaStepBackward size={20} />
                  </button>

                  <div className="flex-1 flex items-center gap-3 relative">
                    <span
                      className="text-gray-400 text-[10px] md:text-xs font-medium w-8 text-right"
                      aria-hidden="true"
                    >
                      {formatTime(currentTime)}
                    </span>
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Seek track position"
                      className="flex-1 h-1 bg-neutral-600 rounded-full appearance-none cursor-pointer accent-white hover:accent-[#FFDD00] transition-all"
                    />
                    <span
                      className="text-gray-400 text-[10px] md:text-xs font-medium w-8"
                      aria-hidden="true"
                    >
                      {formatTime(duration)}
                    </span>
                  </div>

                  <button
                    onClick={() => skipTrack("next")}
                    aria-label="Next track"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaStepForward size={20} />
                  </button>

                  <div className="hidden lg:flex items-center gap-2 group ml-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      aria-label={isMuted ? "Unmute volume" : "Mute volume"}
                      className="text-gray-400 hover:text-white"
                    >
                      {isMuted || volume === 0 ? (
                        <FaVolumeMute size={18} />
                      ) : (
                        <FaVolumeUp size={18} />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      aria-label="Adjust volume"
                      className="w-0 group-hover:w-20 overflow-hidden h-1 bg-neutral-600 rounded-full appearance-none cursor-pointer accent-white transition-all duration-300"
                    />
                  </div>

                  <button
                    aria-label="More options"
                    className="text-gray-500 hover:text-white transition-colors px-2"
                  >
                    <FaEllipsisH size={20} />
                  </button>

                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause track" : "Play track"}
                    className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform flex-shrink-0 shadow-lg ml-2"
                  >
                    {isPlaying ? (
                      <FaPause className="text-lg" />
                    ) : (
                      <FaPlay className="ml-1 text-lg" />
                    )}
                  </button>
                </div>

                {/* Player controls - Mobile/Tablet Layout */}
                <div className="flex md:hidden flex-col bg-white/5 p-4 rounded-xl mb-4 text-white">
                  {/* Upper row: Track Info & Play/Pause button */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex flex-col select-none max-w-[70%]">
                      <span className="text-xs font-bold truncate">
                        {currentTrack.title}
                      </span>
                      <span className="text-[9px] text-neutral-400 truncate">
                        {currentEpisode.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        aria-label="More options"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaEllipsisH size={16} />
                      </button>
                      <button
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause track" : "Play track"}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform flex-shrink-0 shadow-lg"
                      >
                        {isPlaying ? (
                          <FaPause size={14} />
                        ) : (
                          <FaPlay size={14} className="ml-0.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Lower row: Progress Slider & Time */}
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Seek track position"
                      className="flex-1 h-0.5 bg-neutral-600 rounded-full appearance-none cursor-pointer accent-white"
                    />
                    <span className="text-neutral-400 text-[9px] font-normal min-w-[30px] text-right">
                      {formatTime(currentTime)}
                    </span>
                  </div>
                </div>

                <div
                  className="w-full max-h-[160px] overflow-y-auto pr-4 spotify-scrollbar"
                  role="list"
                  aria-label="Playlist"
                >
                  <div className="flex flex-col border-t border-white/10">
                    {currentEpisode.playlist.map((track, trackIdx) => (
                      <div
                        key={track.title}
                        role="listitem"
                        onClick={() => {
                          setCurrentTrackIdx(trackIdx);
                          setTimeout(() => {
                            if (audioRef.current) {
                              audioRef.current.play();
                              setIsPlaying(true);
                            }
                          }, 100);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setCurrentTrackIdx(trackIdx);
                            setTimeout(() => {
                              if (audioRef.current) {
                                audioRef.current.play();
                                setIsPlaying(true);
                              }
                            }, 100);
                          }
                        }}
                        tabIndex={0}
                        aria-label={`Play track: ${track.title}`}
                        className={`flex justify-between items-center py-3 border-b border-white/5 group cursor-pointer hover:bg-white/5 px-2 rounded-lg transition-colors ${currentTrackIdx === trackIdx ? "bg-white/5" : ""}`}
                      >
                        <div className="flex gap-4 items-center">
                          <span
                            className={`text-[10px] md:text-xs font-bold w-4 ${currentTrackIdx === trackIdx ? "text-[#FFDD00]" : "text-gray-500"}`}
                            aria-hidden="true"
                          >
                            {currentTrackIdx === trackIdx && isPlaying
                              ? "▶"
                              : trackIdx + 1}
                          </span>
                          <div className="flex flex-col">
                            <span
                              className={`text-xs md:text-sm font-bold transition-colors ${currentTrackIdx === trackIdx ? "text-[#FFDD00]" : "text-white group-hover:text-[#FFDD00]"}`}
                            >
                              {track.title}
                            </span>
                            <span className="text-[9px] md:text-xs text-gray-500">
                              {currentEpisode.author}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] md:text-sm ${currentTrackIdx === trackIdx ? "text-[#FFDD00]" : "text-gray-500"}`}
                          aria-label={`Track duration: ${track.duration}`}
                        >
                          {track.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="hidden md:block w-full bg-[#2D5FFE] pb-15 pt-8">
            <div
              className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-6 md:gap-10 pb-10 pt-10 scroll-smooth snap-x hide-scrollbar"
              role="tablist"
              aria-label="Spotify Series Programs"
            >
              {episodes.map((episode, i) => (
                <div
                  key={i}
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={`Select series: ${episode.title}`}
                  tabIndex={0}
                  onClick={() => {
                    setActiveIndex(i);
                    setCurrentTrackIdx(0);
                    if (isPlaying && audioRef.current) {
                      audioRef.current.pause();
                      setIsPlaying(false);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(i);
                      setCurrentTrackIdx(0);
                    }
                  }}
                  className="flex-shrink-0 cursor-pointer group relative pt-6 snap-center"
                >
                  {activeIndex === i && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#FFDD00] z-30" />
                  )}

                  {/* Thumbnail Container */}
                  <div
                    className={`w-36 h-36 md:w-64 md:h-64 rounded-[30px] md:rounded-[40px] overflow-hidden transition-all duration-300 ${activeIndex === i ? "border-[4px] md:border-[6px] border-[#FFDD00]" : "bg-gray-200/40 group-hover:scale-105"}`}
                  >
                    <Image
                      src={episode.coverImage}
                      alt=""
                      width={256}
                      height={256}
                      className={`w-full h-full object-cover transition-all duration-300 ${activeIndex === i ? "opacity-100" : "opacity-80"}`}
                      quality={60}
                      sizes="(max-width: 768px) 144px, 256px"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Pagination Dots */}
            <div
              className="flex justify-center items-center gap-6 mt-12"
              role="navigation"
              aria-label="Series Pagination"
            >
              {episodes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to series ${i + 1}`}
                  aria-current={activeIndex === i ? "step" : undefined}
                  className={`w-4 h-4 md:w-6 md:h-6 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === i ? "bg-[#FFDD00]" : "bg-white hover:bg-white/80"}`}
                ></button>
              ))}
            </div>
          </section>

          <style jsx>{`
        .spotify-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .spotify-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .spotify-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .spotify-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
        </>
      )}
    </div>
  );
}