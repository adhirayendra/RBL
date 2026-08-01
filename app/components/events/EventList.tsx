import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface EventPhoto {
  _key: string;
  image: {
    asset: { _ref: string };
  };
  alt: string;
}

interface EventData {
  photos?: EventPhoto[];
}

async function getEventData(): Promise<EventData | null> {
  return client.fetch<EventData | null>(
    `*[_type == "event"][0]{ photos }`,
    {},
    { next: { revalidate: 60 } }
  );
}

// Fallback static photos (dipakai jika Sanity belum ada data)
const FALLBACK_PHOTOS = [
  { _key: "1", src: "/image/events/Urban-survive.png", alt: "Urban Survive Event" },
  { _key: "2", src: "/image/events/Blustic.png", alt: "Biuslic Event" },
  { _key: "3", src: "/image/events/Get-started.png", alt: "Get Started With Your Own Podcast" },
  { _key: "4", src: "/image/events/its-time.png", alt: "Its Time To Show Your Podcast" },
  { _key: "5", src: "/image/events/Be-rebel.png", alt: "Wreck It Till U Make It" },
  { _key: "6", src: "/image/events/LogoChecksound.png", alt: "Checksound Event" },
];

export default async function EventList() {
  const data = await getEventData();

  // Gabungkan data Sanity atau fallback
  const photos: { key: string; src: string; alt: string }[] =
    data?.photos && data.photos.length > 0
      ? data.photos.map((p) => ({
          key: p._key,
          src: urlFor(p.image).width(600).url(),
          alt: p.alt,
        }))
      : FALLBACK_PHOTOS.map((p) => ({ key: p._key, src: p.src, alt: p.alt }));

  const isOdd = photos.length % 2 !== 0;
  const lastIndex = photos.length - 1;

  return (
    <div className="max-w-6xl w-full px-6 flex flex-col items-center gap-12">
      {/* Title Header */}
      <h1 className="text-5xl md:text-8xl font-black tracking-wider uppercase text-center mb-8">
        EVENTS
      </h1>

      {/* Responsive Grid – adaptif ganjil & genap */}
      <div className="grid grid-cols-2 gap-6 sm:gap-12 md:gap-16 w-full justify-items-center items-center">
        {photos.map((photo, index) => {
          // Foto terakhir jika jumlah ganjil → span 2 kolom & ukuran lebih kecil
          const isLastOdd = isOdd && index === lastIndex;

          return (
            <div
              key={photo.key}
              className={`relative group flex justify-center items-center transition-all duration-300 ${
                isLastOdd ? "col-span-2" : "col-span-1"
              }`}
            >
              <div
                className={`relative w-full ${
                  isLastOdd
                    ? "max-w-[300px] sm:max-w-[380px] md:max-w-[460px]"
                    : "max-w-[280px] sm:max-w-[360px] md:max-w-[440px]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={300}
                  className="w-full h-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.2)] cursor-pointer"
                  priority={index < 2}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
