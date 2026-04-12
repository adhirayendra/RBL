import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgramHero from "../components/ProgramHero";
import { SectionYoutube } from "../components/SectionYoutube";
import ProgramSpotify from "../components/ProgramSpotify";
import ProgramSection from "../components/ProgramSection";

export const metadata = {
  title: 'Program - Radio Budi Luhur',
  description: 'Program Radio Budi Luhur',
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