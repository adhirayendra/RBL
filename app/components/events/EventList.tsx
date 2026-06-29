import EventCard from "./EventCard";

const GRID_EVENTS = [
  {
    id: 1,
    src: "/image/events/Urban-survive.png",
    alt: "Urban Survive Event",
    width: 420,
    height: 420,
    maxWidthClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[420px]",
    priority: true,
  },
  {
    id: 2,
    src: "/image/events/Blustic.png",
    alt: "Biuslic Event",
    width: 450,
    height: 277,
    maxWidthClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[450px]",
    priority: true,
  },
  {
    id: 3,
    src: "/image/events/Get-started.png",
    alt: "Get Started With Your Own Podcast",
    width: 340,
    height: 306,
    maxWidthClass: "max-w-[240px] sm:max-w-[290px] md:max-w-[340px]",
  },
  {
    id: 4,
    src: "/image/events/its-time.png",
    alt: "Its Time To Show Your Podcast",
    width: 420,
    height: 270,
    maxWidthClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[420px]",
  },
];

const CENTERED_EVENT = {
  id: 5,
  src: "/image/events/Be-rebel.png",
  alt: "BR Rebel Event",
  width: 500,
  height: 309,
  maxWidthClass: "max-w-[300px] sm:max-w-[400px] md:max-w-[500px]",
};

const BOTTOM_EVENTS = [
  CENTERED_EVENT,
  {
    id: 6,
    src: "/image/events/Logo Checksound Color.png",
    alt: "Checksound Color Event",
    width: 420,
    height: 280,
    maxWidthClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[420px]",
  },
];

export default function EventList() {
  return (
    <div className="max-w-6xl w-full px-6 flex flex-col items-center gap-12">
      {/* Title Header */}
      <h1 className="text-5xl md:text-8xl font-black tracking-wider uppercase text-center mb-8">
        EVENTS
      </h1>

      {/* Responsive Grid for Row 1 & 2 */}
      <div className="grid grid-cols-2 gap-6 sm:gap-12 md:gap-16 w-full justify-items-center items-center">
        {GRID_EVENTS.map((event) => (
          <EventCard
            key={event.id}
            src={event.src}
            alt={event.alt}
            width={event.width}
            height={event.height}
            maxWidthClass={event.maxWidthClass}
            priority={event.priority}
          />
        ))}
      </div>

      {/* Bottom Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 w-full justify-items-center mt-6">
        {BOTTOM_EVENTS.map((event) => (
          <EventCard
            key={event.id}
            src={event.src}
            alt={event.alt}
            width={event.width}
            height={event.height}
            maxWidthClass={event.maxWidthClass}
            priority={event.priority}
          />
        ))}
      </div>
    </div>
  );
}
