// import PlaylistClient from "../ProgramSection/PlaylistClient";
import PlaylistClient from "@/app/sections/programSection/PlaylistClient";
import { chartTracks } from "@/data/chartTracks";

const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/6L2m9wL9kJAmNhzlmIkFRI";

export default function TopChart() {
  return (
    <section className="w-full bg-gradient-to-bl from-[#FFDD00] to-[#E49A07] py-28 text-[#1E1E1E]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 tracking-tight drop-shadow-md">
          TOP 30 by Radio Budi Luhur
        </h2>
        <PlaylistClient
          tracks={chartTracks}
          playlistUrl={SPOTIFY_PLAYLIST_URL}
        />

        {/* Pesan Instruksi Singkat (Bisa dihapus nanti)
        <p className="mt-8 text-center text-sm opacity-60">
          Edit lagu di file: <code>app/components/TopChart.tsx</code>
        </p> */}
      </div>
    </section>
  );
}
