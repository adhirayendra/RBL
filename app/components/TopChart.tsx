import PlaylistClient from "./PlaylistClient";
import type { TrackItem } from "./PlaylistClient";

// DAFTAR LAGU MANUAK (Silakan edit di bawah ini)
const chartTracks: TrackItem[] = [
  { id: "1", name: "SWIM", artists: "BTS", duration: "02:39", albumCover: "https://i.scdn.co/image/ab67616d00004851dfa17fad7f190c901603270e" },
  { id: "2", name: "Risk It All", artists: "Bruno Mars", duration: "03:24", albumCover: "https://i.scdn.co/image/ab67616d000048511cc6f24606517f854014ca69" },
  { id: "3", name: "FATHER (feat. Travis Scott)", artists: "Kanye West, Ye, Travis Scott", duration: "02:49", albumCover: "https://i.scdn.co/image/ab67616d0000485195184f6a953569b683ca9a0d" },
  { id: "4", name: "Ada titik-titik di ujung doa", artists: "Sal Priadi", duration: "05:05", albumCover: "https://i.scdn.co/image/ab67616d00004851686acaaa87bfc6ebb42b3bd2" },
  { id: "5", name: "Babydoll", artists: "Dominic Fike", duration: "01:37", albumCover: "https://i.scdn.co/image/ab67616d000048517b1b6f41c1645af9757d5616" },
  { id: "6", name: "Choosin' Texas", artists: "Ella Langley", duration: "03:52", albumCover: "https://i.scdn.co/image/ab67616d0000485190958927fbba47a62c3e63f8" },
  { id: "7", name: "Man I Need", artists: "Olivia Dean", duration: "03:04", albumCover: "https://i.scdn.co/image/ab67616d000048519a336bfb6d40bbd90a507417" },
  { id: "8", name: "kota ini tak sama tanpamu", artists: "Nadhif Basalamah", duration: "04:39", albumCover: "https://i.scdn.co/image/ab67616d00004851f3e3f888fbfcc916ecce50a9" },
  { id: "9", name: "Everything u are", artists: "Hindia", duration: "03:56", albumCover: "https://i.scdn.co/image/ab67616d0000485105898628baab6ef07a0a4d03" },
  { id: "10", name: "Bahagia Lagi", artists: "Piche Kota", duration: "03:47", albumCover: "https://i.scdn.co/image/ab67616d000048515bd00b369e89c5cbc74d827b" },
  { id: "11", name: "Man I Need", artists: "Olivia Dean", duration: "03:04", albumCover: "https://i.scdn.co/image/ab67616d00004851e3d69e17dde129037a1f09e2" },
  { id: "12", name: "Opalite", artists: "Taylor Swift", duration: "03:55", albumCover: "https://i.scdn.co/image/ab67616d00004851d7812467811a7da6e6a44902" },
  { id: "13", name: "Sedia Aku Sebelum Hujan", artists: "Idgitaf", duration: "03:50", albumCover: "https://i.scdn.co/image/ab67616d000048518dc8c573565969d55f9f3477" },
  { id: "14", name: "Who Knows", artists: "Daniel Caesar", duration: "03:46", albumCover: "https://i.scdn.co/image/ab67616d000048512bad6e56e77d5bef0aa3f2dc" },
  { id: "15", name: "Monokrom", artists: "Tulus", duration: "03:34", albumCover: "https://i.scdn.co/image/ab67616d0000485171c65edbeed32af70b900637" },
  { id: "16", name: "Die On This Hill", artists: "SIENNA SPIRO", duration: "03:37", albumCover: "https://i.scdn.co/image/ab67616d00004851ec4833919808083d733ca9af" },
  { id: "17", name: "Foto kita blur", artists: "Sal Priadi", duration: "04:31", albumCover: "https://i.scdn.co/image/ab67616d000048513489e60f1b695d3e2b814682" },
  { id: "18", name: "I Just Might", artists: "Bruno Mars", duration: "03:32", albumCover: "https://i.scdn.co/image/ab67616d000048514c31c840dd48083590b0157a" },
  { id: "19", name: "Bersenja Gurau", artists: "Raim Laode", duration: "03:14", albumCover: "https://i.scdn.co/image/ab67616d000048513e2cf96ce4558b8f2376b79a" },
  { id: "20", name: "Monolog", artists: "Pamungkas", duration: "03:27", albumCover: "https://i.scdn.co/image/ab67616d0000485132ab17f5515e51490841f648" },
  { id: "21", name: "Mangu", artists: "Fourtwnty, Charita Utami", duration: "04:21", albumCover: "https://i.scdn.co/image/ab67616d000048518d18d73bbfc8985d52865edf" },
  { id: "22", name: "Ordinary", artists: "Alex Warren", duration: "03:06", albumCover: "https://i.scdn.co/image/ab67616d00004851e74e15fe75e80ea69f38a680" },
  { id: "23", name: "iloveitiloveitiloveit", artists: "Bella Kay", duration: "03:03", albumCover: "https://i.scdn.co/image/ab67616d00004851d34a0632f6861e8875d6899b" },
  { id: "24", name: "Jatuh Suka", artists: "Tulus", duration: "03:55", albumCover: "https://i.scdn.co/image/ab67616d000048516ac3c7938191585c53c8180d" },
  { id: "25", name: "WHERE IS MY HUSBAND!", artists: "RAYE", duration: "03:17", albumCover: "https://i.scdn.co/image/ab67616d000048510e62daaea2c7b94053e1c142" },
  { id: "26", name: "Love Me Not", artists: "Ravyn Lenae", duration: "03:33", albumCover: "https://i.scdn.co/image/ab67616d00004851b034f9cdf12ae14c603daa99" },
  { id: "27", name: "The Fate of Ophelia", artists: "Taylor Swift", duration: "03:46", albumCover: "https://i.scdn.co/image/ab67616d00004851b1d3ef29ee15a18842973471" },
  { id: "28", name: "Lantas", artists: "Juicy Luicy", duration: "03:54", albumCover: "https://i.scdn.co/image/ab67616d00004851062c6573009fdebd43de443b" },
  { id: "29", name: "Manchild", artists: "Sabrina Carpenter", duration: "03:33", albumCover: "https://i.scdn.co/image/ab67616d0000485135e8c95e427167c4d26899e1" },
  { id: "30", name: "Disarankan di Bandung", artists: "Dongker", duration: "02:32", albumCover: "https://i.scdn.co/image/ab6775700000b8a82baed487598c130037cdcd1b" },
];

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/6L2m9wL9kJAmNhzlmIkFRI";

export default function TopChart() {
  return (
    <section className="w-full bg-gradient-to-bl from-[#FFDD00] to-[#E49A07] py-28 text-[#1E1E1E]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 tracking-tight drop-shadow-md">
          TOP 30 by Radio Budi Luhur
        </h2>
        <PlaylistClient tracks={chartTracks} playlistUrl={SPOTIFY_PLAYLIST_URL} />
        
        {/* Pesan Instruksi Singkat (Bisa dihapus nanti)
        <p className="mt-8 text-center text-sm opacity-60">
          Edit lagu di file: <code>app/components/TopChart.tsx</code>
        </p> */}
      </div>
    </section>
  );
}
