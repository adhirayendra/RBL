import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[850px] bg-[#2D5FFE] overflow-hidden"
    >
      {/* Background Gradients & Accents (Matching Figma) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D5FFE] via-[#2D5FFE] to-[#FFFEF5] opacity-90" />

      {/* Hero Content */}
      <div className="relative w-full h-[850px]">
        <Image
          src="/image/hero.webp"
          alt="Radio Budi Luhur Hero"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="(max-width: 768px) 100vw, 1920px"
        />
      </div>
    </section>
  );
}
