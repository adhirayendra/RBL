import AboutHeader from "../sections/AboutSection/AboutHero";
import AboutHero from "../sections/AboutSection/AboutHero";
import AboutDescription from "../sections/AboutSection/AboutDescription";

export const metadata = {
  title: "About Us - Radio Budi Luhur",
  description: "Tentang Radio Budi Luhur",
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#2D5FFE] to-[#1B3998] flex flex-col pt-24 md:pt-32">
      <AboutHeader />
      <AboutHero />
      <AboutDescription />
    </div>
  );
}
