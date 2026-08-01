"use client";

import Image from "next/image";

export interface TrackItem {
  id: string;
  titleMusic: string;
  artistName: string;
  durationMusic: string;
  albumCover: string;
}

interface PlaylistClientProps {
  tracks: TrackItem[];
  playlistUrl: string;
}

export default function PlaylistClient({
  tracks,
  playlistUrl,
}: PlaylistClientProps) {
  const lastTapRef = { current: 0 };

  const handleClick = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return; // mobile uses double-tap
    window.open(playlistUrl, "_blank");
  };

  const handleTouchEnd = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      window.open(playlistUrl, "_blank");
    }
    lastTapRef.current = now;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="playlist-scroll max-h-[480px] overflow-y-auto px-2">
        <div className="flex flex-col">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="playlist-row group items-center py-6 border-t first:border-t-0 border-black/10 cursor-pointer hover:bg-black/5 transition-all duration-300"
              onClick={handleClick}
              onTouchEnd={handleTouchEnd}
            >
              {/* Rank Number */}
              <div className="text-[18px] md:text-2xl font-black text-black/80 px-4 md:px-8 select-none text-center min-w-[44px] md:min-w-[80px]">
                {index + 1}
              </div>

              {/* Album & Vinyl Container */}
              <div className="flex justify-start items-center">
                <div className="album-vinyl">
                  <div className="album-cover-wrapper shadow-2xl">
                    <Image
                      src={track.albumCover || "https://placehold.co/200x200"}
                      alt={track.titleMusic}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="vinyl-record">
                    <div
                      className="vinyl-center"
                      style={{ backgroundImage: `url('${track.albumCover}')` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Song Info */}
              <div className="flex flex-col justify-center px-4 md:px-12 min-w-0">
                <h3 className="text-base md:text-2xl font-bold text-black leading-tight truncate">
                  {track.titleMusic}
                </h3>
                <p className="text-xs md:text-base text-black/60 font-medium truncate">
                  {track.artistName}
                </p>
              </div>

              {/* Duration */}
              <div className="text-right text-sm md:text-xl font-bold text-black/70 px-3 md:px-8 select-none">
                {track.durationMusic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
