// Import Section
import Hero from "./sections/homeSection/Hero";
import ProgramSection from "./sections/homeSection/ProgramSection";
import ArticleSection from "./sections/homeSection/ArticleSection";
import TopChart from "./sections/homeSection/TopChart";

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
