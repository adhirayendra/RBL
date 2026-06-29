"use client";

import { client } from "@/sanity/lib/client";
import useSWR from "swr";

import PlaylistClient from "../ProgramSection/PlaylistClient";

const fetcher = (groqQuery: string) => client.fetch(groqQuery);

const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/6L2m9wL9kJAmNhzlmIkFRI";

export default function TopChart() {
  // Query GROQ yang sudah diperbaiki sintaksisnya
  const query = `*[_type == "topMusic"] | order(rank asc) [0...30] {
    _id,
    rank,
    titleMusic,
    artistName,
    durationMusic,
    albumCover
  }`;

  // Menggunakan SWR dengan melemparkan data langsung ke tracks
  const { data: tracks, isLoading } = useSWR(query, fetcher);

  return (
    <section className="w-full bg-gradient-to-bl from-[#FFDD00] to-[#E49A07] py-28 text-[#1E1E1E]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 tracking-tight drop-shadow-md">
          TOP 30 by Radio Budi Luhur
        </h2>

        {isLoading ? (
          <div className="text-center font-bold text-[#1E1E1E] opacity-70">
            Loading Top Chart...
          </div>
        ) : (
          /* tracks langsung mengirimkan array murni berisi maksimal 30 lagu sesuai sorting rank */
          <PlaylistClient
            tracks={tracks || []}
            playlistUrl={SPOTIFY_PLAYLIST_URL}
          />
        )}
      </div>
    </section>
  );
}
