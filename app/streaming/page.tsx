import StreamingHero from "../components/StreamingHero";

export const metadata = {
  title: "Streaming - Radio Budi Luhur",
  description: "Streaming Radio Budi Luhur Live",
};

export default function StreamingPage() {
  return (
    <div className="w-full h-full flex flex-col font-['DM_Sans'] bg-slate-50">
      <StreamingHero />
    </div>
  );
}
