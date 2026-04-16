import ProgramHero from "../sections/ProgramSection/ProgramHero";
import { SectionYoutube } from "../sections/ProgramSection/SectionYoutube";
import ProgramSpotify from "../sections/ProgramSection/ProgramSpotify";
import ProgramSection from "../sections/HomeSection/ProgramSection";

export const metadata = {
  title: "Program - Radio Budi Luhur",
  description: "Program Radio Budi Luhur",
};

export default function ProgramPage() {
  return (
    <div className="w-full flex flex-col font-['DM_Sans'] bg-white">
      <ProgramHero />
      <div className="flex flex-col">
        <SectionYoutube />
        <ProgramSpotify />
        <ProgramSection variant="program" />
      </div>
    </div>
  );
}
