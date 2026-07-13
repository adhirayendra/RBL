// Import Section
import Hero from "./sections/HomeSection/Hero";
import ProgramSection from "./sections/HomeSection/ProgramSection";
import ArticleSection from "./sections/HomeSection/ArticleSection";
import TopChart from "./sections/HomeSection/TopChart";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramSection />
      <ArticleSection />
      <TopChart />
    </>
  );
}
