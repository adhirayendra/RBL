import Image from "next/image";
import RadioWidget from "./RadioWidget";

export default function StreamingHero() {
  return (
    <section className="relative w-full min-h-[785px] flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Background Gradient (Layered behind the image) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-600 to-stone-50" />
      
      {/* Base Background Image (Layered in front of gradient) */}
      <div className="absolute inset-0 z-10 w-full h-[785px]">
        <Image 
          src="/image/backgroundstream.webp" // Using the existing hero image as background or placehold
          alt="Streaming Background"
          fill
          className="object-cover object-top"
          unoptimized={true}
          sizes="100vw"
        />
      </div>

      {/* Content */}
      {/* Desktop View: Absolute positioning mapping perfectly to the 1440x785 Figma coordinates */}
      <div className="relative z-20 w-full max-w-[1440px] h-[785px] mx-auto hidden md:block">
        <div className="absolute left-1/2 -translate-x-1/2 top-[433px]">
          <RadioWidget />
        </div>
      </div>

      {/* Mobile View: Flexible centering */}
      <div className="relative z-20 w-full px-6 flex flex-col items-center pb-20 md:hidden pt-[400px]">
        <RadioWidget />
      </div>

    </section>
  );
}
