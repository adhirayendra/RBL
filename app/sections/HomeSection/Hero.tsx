import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"

      className="relative w-full pt-[95px] sm:pt-0 bg-[#2D5FFE] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D5FFE] via-[#2D5FFE] to-[#FFFEF5] opacity-90" />

      <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[450px] md:h-[650px] lg:h-[850px]">
        <Image
          src="/image/hero.webp"
          alt="Radio Budi Luhur Hero"
          fill
          className="object-cover object-center"
          priority
          quality={95}
          sizes="100vw"
        />
      </div>
    </section>
  );
}