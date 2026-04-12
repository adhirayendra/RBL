import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function ProgramHero() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] flex items-center justify-end bg-zinc-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/image/Youtube/8zVeXiPuWog-HD 1.png" 
          alt="Radio Budi Luhur Hero"
          fill
          className="object-cover"
        />
        {/* Dark overlay specifically tailored for the right text */}
        <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 via-zinc-900/60 to-transparent" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex justify-end">
        <div className="w-full md:w-[45%] lg:w-[40%] text-left flex flex-col items-start pt-20 md:pt-0">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold font-['DM_Sans'] leading-tight mb-4 flex flex-col">
            <span className="tracking-wide">Perkenalkin</span>
            <span className="tracking-wide">Radio Budi luhur</span>
          </h1>
          <p className="text-white text-sm md:text-sm font-normal font-['DM_Sans'] leading-relaxed mb-8 max-w-sm text-justify">
            Radio komunitas yang telah menjadi suara khas Universitas Budi Luhur sejak 2005, hadir di frekuensi 107.7 FM dan dapat dinikmati secara global melalui platform streaming di www.radiobudiluhur.com atau di RCTI+
          </p>
          
          <div className="flex flex-wrap justify-start gap-4">
            <button className="bg-[#1C3FAA] shadow-lg text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-[46px] flex items-center gap-3 hover:bg-blue-700 transition-colors border border-blue-400/30">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-zinc-900 rounded-full flex items-center justify-center">
                  <FaPlay className="text-[#1C3FAA] ml-0.5 text-[10px]" />
              </div>
              PLAY
            </button>
            <button className="bg-[#1C3FAA] shadow-lg text-white font-bold text-xs md:text-sm px-8 py-2.5 rounded-[46px] hover:bg-blue-700 transition-colors border border-blue-400/30">
              RECOMMENDED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
