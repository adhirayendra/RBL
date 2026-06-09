import Image from "next/image";

interface EventCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidthClass: string;
  priority?: boolean;
}

export default function EventCard({
  src,
  alt,
  width,
  height,
  maxWidthClass,
  priority = false,
}: EventCardProps) {
  return (
    <div className="relative group flex justify-center items-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.2)] cursor-pointer ${maxWidthClass}`}
        priority={priority}
      />
    </div>
  );
}
