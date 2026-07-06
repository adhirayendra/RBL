import { SectionYoutube } from "../sections/ProgramSection/SectionYoutube";
import ProgramSpotify from "../sections/ProgramSection/ProgramSpotify";
import ProgramSection from "../sections/HomeSection/ProgramSection";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: "Program - Radio Budi Luhur",
  description: "Program Radio Budi Luhur",
};

export default async function ProgramPage() {
  // Fetch Spotify programs from Sanity
  let sanityEpisodes = [];
  try {
    sanityEpisodes = await client.fetch(`*[_type == "programSpotify"] | order(_createdAt asc) {
      _id,
      title,
      author,
      "coverImage": coverImage.asset->url,
      playlist[] {
        title,
        duration,
        "src": audioFile.asset->url
      }
    }`);
  } catch (error) {
    console.error("Failed to fetch spotifyProgram from Sanity:", error);
  }

  return (
    <div className="w-full flex flex-col font-['DM_Sans'] bg-[#2D5FFE]">
      <div className="flex flex-col pt-24 md:pt-32">
        {" "}
        {/* Increased PT to account for absolute navbar and tab overlap */}
        <SectionYoutube />
        <ProgramSpotify initialEpisodes={sanityEpisodes} />
        <ProgramSection variant="program" />
      </div>
    </div>
  );
}

