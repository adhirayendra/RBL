"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaEllipsisH, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function ProgramSpotify() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const episodes = [
    {
      id: 1,
      title: "Dramadhan",
      author: "Radio Budi Luhur",
      mainCover: "/image/spotifySeries/Spotify 1.png",
      thumbnail: "/image/spotifySeries/Spotify 1.png",
      duration: "13:57",
      progress: "1/3",
      playlist: [
        { id: 1, title: "Hidup Begini Begini Aja", duration: "03:45", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 2, title: "Ekspidisi Menyentuh Awan", duration: "10:20", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 3, title: "Penyakit Orang Kaya", duration: "15:45", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 4, title: "Suara Dari Masa Lalu", duration: "12:30", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
      ]
    },
    {
      id: 2,
      title: "Into the Spectrum",
      author: "Radio Budi Luhur",
      mainCover: "/image/spotifySeries/Cover Spotify 1.png",
      thumbnail: "/image/spotifySeries/Cover Spotify 1.png",
      duration: "15:20",
      progress: "2/5",
      playlist: [
        { id: 1, title: "Spectrum Beginnings", duration: "15:20", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 2, title: "Wavelengths", duration: "12:15", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 3, title: "Color Theory", duration: "14:40", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
      ]
    },
    {
      id: 3,
      title: "Tanya Jawab Asal",
      author: "Radio Budi Luhur",
      mainCover: "/image/spotifySeries/Spotify 1.png",
      thumbnail: "/image/spotifySeries/Cover Spotify 1.png",
      duration: "10:45",
      progress: "1/1",
      playlist: [
        { id: 1, title: "Q&A Session 1", duration: "10:45", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 2, title: "Behind the Scenes", duration: "08:30", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
      ]
    },
    {
      id: 4,
      title: "Now We Know",
      author: "Radio Budi Luhur",
      mainCover: "/image/spotifySeries/Spotify 1.png",
      thumbnail: "/image/spotifySeries/Cover Spotify 1.png",
      duration: "12:10",
      progress: "4/10",
      playlist: [
        { id: 1, title: "Episode 1: Atoms", duration: "12:10", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 2, title: "Episode 2: Space", duration: "15:00", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 3, title: "Episode 3: Ocean", duration: "11:30", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
        { id: 4, title: "Episode 4: History", duration: "14:20", src: "/audio/SpotiDownloader.com - Baby - Justin Bieber.mp3" },
      ]
    },
  ];

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
      setCurrentTrackIdx((currentTrackIdx - 1 + playlist.length) % playlist.length);
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
        <div className="absolute top-0 left-6 md:left-16 -translate-y-[98%] bg-[#FFDD00] px-8 md:px-10 py-2 md:py-3 rounded-t-[20px] md:rounded-t-[30px]">
          <h2 className="text-black text-lg md:text-xl font-extrabold font-['DM_Sans'] tracking-wide">Program Spotify</h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start gap-10 lg:gap-16">
          <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-[20px] overflow-hidden shadow-2xl transition-all duration-500">
              <Image 
                src={currentEpisode.mainCover} 
                alt={currentEpisode.title} 
                width={316} 
                height={316} 
                className="w-full h-full object-cover" 
              />
          </div>
          
          <div className="flex-1 w-full text-white">
             <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-1 transition-all duration-300">
                  {isPlaying ? `PLAYING: ${currentTrack.title}` : `AUDIO SERIES : ${currentEpisode.title}`}
                </h3>
                <p className="text-sm md:text-base text-gray-400 font-medium">
                  {currentEpisode.author}
                </p>
             </div>
             
             <div className="flex items-center gap-4 bg-white/5 py-4 rounded-xl px-4 lg:px-6 mb-6">
                 <button 
                   onClick={() => skipTrack("prev")}
                   className="text-gray-400 hover:text-white transition-colors"
                 >
                    <FaStepBackward size={20} />
                 </button>
                 
                 <div className="flex-1 flex items-center gap-3 relative">
                    <span className="text-gray-400 text-[10px] md:text-xs font-medium w-8 text-right">
                      {formatTime(currentTime)}
                    </span>
                    <input 
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="flex-1 h-1 bg-neutral-600 rounded-full appearance-none cursor-pointer accent-white hover:accent-[#FFDD00] transition-all"
                    />
                    <span className="text-gray-400 text-[10px] md:text-xs font-medium w-8">
                      {formatTime(duration)}
                    </span>
                 </div>

                 <button 
                    onClick={() => skipTrack("next")}
                    className="text-gray-400 hover:text-white transition-colors"
                 >
                    <FaStepForward size={20} />
                 </button>

                 <div className="hidden lg:flex items-center gap-2 group ml-2">
                    <button onClick={() => setIsMuted(!isMuted)} className="text-gray-400 hover:text-white">
                      {isMuted || volume === 0 ? <FaVolumeMute size={18}/> : <FaVolumeUp size={18}/>}
                    </button>
                    <input 
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-0 group-hover:w-20 overflow-hidden h-1 bg-neutral-600 rounded-full appearance-none cursor-pointer accent-white transition-all duration-300"
                    />
                 </div>
                 
                 <button className="text-gray-500 hover:text-white transition-colors px-2">
                    <FaEllipsisH size={20} />
                 </button>
                 
                 <button 
                   onClick={togglePlay}
                   className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform flex-shrink-0 shadow-lg ml-2"
                 >
                     {isPlaying ? <FaPause className="text-lg" /> : <FaPlay className="ml-1 text-lg" />}
                 </button>
             </div>

             <div className="w-full max-h-[160px] overflow-y-auto pr-4 spotify-scrollbar">
                <div className="flex flex-col border-t border-white/10">
                   {currentEpisode.playlist.map((track, trackIdx) => (
                     <div 
                       key={track.id} 
                       onClick={() => {
                         setCurrentTrackIdx(trackIdx);
                         setTimeout(() => {
                            if (audioRef.current) {
                              audioRef.current.play();
                              setIsPlaying(true);
                            }
                         }, 100);
                       }}
                       className={`flex justify-between items-center py-4 border-b border-white/5 group cursor-pointer hover:bg-white/5 px-2 rounded-lg transition-colors ${currentTrackIdx === trackIdx ? 'bg-white/5' : ''}`}
                     >
                        <div className="flex gap-4 items-center">
                           <span className={`text-gray-500 font-bold w-4 ${currentTrackIdx === trackIdx ? 'text-[#FFDD00]' : ''}`}>
                             {currentTrackIdx === trackIdx && isPlaying ? "▶" : trackIdx + 1}
                           </span>
                           <div className="flex flex-col">
                              <span className={`font-bold transition-colors ${currentTrackIdx === trackIdx ? 'text-[#FFDD00]' : 'text-white group-hover:text-[#FFDD00]'}`}>
                                {track.title}
                              </span>
                              <span className="text-xs text-gray-500">{currentEpisode.author}</span>
                           </div>
                        </div>
                        <span className={`text-sm ${currentTrackIdx === trackIdx ? 'text-[#FFDD00]' : 'text-gray-500'}`}>
                          {track.duration}
                        </span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#2D5FFE] pb-15 pt-8">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex gap-10 overflow-x-auto hide-scrollbar pb-10 pt-10">
           {episodes.map((episode, i) => (
             <div 
               key={i} 
               onClick={() => {
                 setActiveIndex(i);
                 setCurrentTrackIdx(0);
                 if (isPlaying && audioRef.current) {
                   audioRef.current.pause();
                   setIsPlaying(false);
                 }
               }}
               className="flex-shrink-0 cursor-pointer group relative pt-6"
             >
                {activeIndex === i && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#FFDD00] z-30" />
                )}

                {/* Thumbnail Container */}
                <div className={`w-48 h-48 md:w-64 md:h-64 rounded-[40px] overflow-hidden transition-all duration-300 ${activeIndex === i ? 'border-[6px] border-[#FFDD00]' : 'bg-gray-200/40 group-hover:scale-105'}`}>
                   <Image 
                     src={episode.thumbnail} 
                     alt={episode.title} 
                     width={256} 
                     height={256} 
                     className={`w-full h-full object-cover transition-all duration-300 ${activeIndex === i ? 'opacity-100' : 'opacity-80'}`} 
                   />
                </div>
             </div>
           ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-5 mt-4">
          {[0, 1].map((dotIndex) => {
            // Logic for pagination dots: showing current page group
            const isActivePage = (activeIndex <= 1 && dotIndex === 0) || (activeIndex > 1 && dotIndex === 1);
            return (
              <div 
                key={dotIndex}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${isActivePage ? 'bg-[#FFDD00]' : 'bg-white'}`}
              ></div>
            );
          })}
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
