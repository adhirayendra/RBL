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

import { episodes } from "@/data/dataPrograms/spotify";

export default function ProgramSpotify() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentEpisode = episodes[activeIndex];
  const currentTrack = currentEpisode.playlist[currentTrackIdx];

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
      <audio
        ref={audioRef}
        src={currentTrack.src}
        key={`${activeIndex}-${currentTrackIdx}`}
      />

      <section className="w-full bg-[#2C2C2C] relative pt-16 pb-12 mt-12 md:mt-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[56px] -translate-y-[98%] bg-[#FFDD00] px-8 md:px-10 py-2 md:py-3 rounded-t-[20px] md:rounded-t-[30px]">
          <h2 className="text-black text-lg md:text-xl font-extrabold font-['DM_Sans'] tracking-wide">
            Program Spotify
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 lg:gap-16">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 rounded-[20px] overflow-hidden shadow-2xl transition-all duration-500">
            <Image
              src={currentEpisode.mainCover}
              alt={currentEpisode.title}
              width={316}
              height={316}
              className="w-full h-full object-cover"
              priority
              quality={80}
              sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
            />
          </div>

          <div className="flex-1 w-full text-white">
            <div className="mb-6 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 transition-all duration-300 break-words">
                {isPlaying
                  ? `PLAYING: ${currentTrack.title}`
                  : `AUDIO SERIES : ${currentEpisode.title}`}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium">
                {currentEpisode.author}
              </p>
            </div>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-3 sm:gap-4 bg-white/5 py-4 rounded-xl px-3 sm:px-4 lg:px-6 mb-6">
              <button
                onClick={() => skipTrack("prev")}
                aria-label="Previous track"
                className="text-gray-400 hover:text-white transition-colors order-1"
              >
                <FaStepBackward size={18} className="sm:hidden" />
                <FaStepBackward size={20} className="hidden sm:block" />
              </button>

              <div className="flex-1 basis-full md:basis-auto order-4 md:order-2 flex items-center gap-2 sm:gap-3 relative w-full">
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
                className="text-gray-400 hover:text-white transition-colors order-2 md:order-3"
              >
                <FaStepForward size={18} className="sm:hidden" />
                <FaStepForward size={20} className="hidden sm:block" />
              </button>

              <div className="hidden lg:flex items-center gap-2 group ml-2 order-4">
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
                className="hidden sm:block text-gray-500 hover:text-white transition-colors px-2 order-5"
              >
                <FaEllipsisH size={20} />
              </button>

              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause track" : "Play track"}
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform flex-shrink-0 shadow-lg ml-auto md:ml-2 order-3 md:order-6"
              >
                {isPlaying ? (
                  <FaPause className="text-base sm:text-lg" />
                ) : (
                  <FaPlay className="ml-1 text-base sm:text-lg" />
                )}
              </button>
            </div>

            <div
              className="w-full max-h-[200px] sm:max-h-[180px] md:max-h-[160px] overflow-y-auto pr-2 sm:pr-4 spotify-scrollbar"
              role="list"
              aria-label="Playlist"
            >
              <div className="flex flex-col border-t border-white/10">
                {currentEpisode.playlist.map((track, trackIdx) => (
                  <div
                    key={track.id}
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
                    className={`flex justify-between items-center gap-2 py-3 sm:py-4 border-b border-white/5 group cursor-pointer hover:bg-white/5 px-2 rounded-lg transition-colors ${currentTrackIdx === trackIdx ? "bg-white/5" : ""}`}
                  >
                    <div className="flex gap-2 sm:gap-4 items-center min-w-0">
                      <span
                        className={`text-gray-500 font-bold w-4 flex-shrink-0 ${currentTrackIdx === trackIdx ? "text-[#FFDD00]" : ""}`}
                        aria-hidden="true"
                      >
                        {currentTrackIdx === trackIdx && isPlaying
                          ? "▶"
                          : trackIdx + 1}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span
                          className={`font-bold transition-colors truncate ${currentTrackIdx === trackIdx ? "text-[#FFDD00]" : "text-white group-hover:text-[#FFDD00]"}`}
                        >
                          {track.title}
                        </span>
                        <span className="text-xs text-gray-500 truncate">
                          {currentEpisode.author}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-sm flex-shrink-0 ${currentTrackIdx === trackIdx ? "text-[#FFDD00]" : "text-gray-500"}`}
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

      <section className="w-full bg-[#2D5FFE] pb-10 sm:pb-15 pt-8">
        <div
          className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 flex flex-wrap md:flex-nowrap justify-center gap-6 sm:gap-8 md:gap-10 pb-10 pt-10 scroll-smooth"
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
                className={`w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-[24px] sm:rounded-[40px] overflow-hidden transition-all duration-300 ${activeIndex === i ? "border-[4px] sm:border-[6px] border-[#FFDD00]" : "bg-gray-200/40 group-hover:scale-105"}`}
              >
                <Image
                  src={episode.thumbnail}
                  alt=""
                  width={256}
                  height={256}
                  className={`w-full h-full object-cover transition-all duration-300 ${activeIndex === i ? "opacity-100" : "opacity-80"}`}
                  quality={60}
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Pagination Dots */}
        <div
          className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12"
          role="navigation"
          aria-label="Series Pagination"
        >
          {episodes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to series ${i + 1}`}
              aria-current={activeIndex === i ? "step" : undefined}
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === i ? "bg-[#FFDD00]" : "bg-white hover:bg-white/80"}`}
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
    </div>
  );
}
