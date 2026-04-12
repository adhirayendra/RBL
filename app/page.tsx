import Hero from "./components/Hero";
import ProgramSection from "./components/ProgramSection";
import ArticleSection from "./components/ArticleSection";
import TopChart from "./components/TopChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative selection:bg-blue-300">
      <Hero />
      <ProgramSection />
      <ArticleSection />
      <TopChart />
    </main>
  );
}
