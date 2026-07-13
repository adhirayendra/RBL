import EventCard from "./EventCard";

const GRID_EVENTS = [
  {
    id: 1,
    src: "/image/events/Urban-survive.png",
    alt: "Urban Survive Event",
    width: 500,
    height: 300,
    maxWidthClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[420px]",
    priority: true,
  },
  {
    id: 2,
    src: "/image/events/Blustic.png",
    alt: "Biuslic Event",
    width: 500,
    height: 300,
    maxWidthClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[450px]",
    priority: true,
  },
  {
    id: 3,
    src: "/image/events/Get-started.png",
    alt: "Get Started With Your Own Podcast",
    width: 500,
    height: 300,
    maxWidthClass: "max-w-[240px] sm:max-w-[290px] md:max-w-[340px]",
  },
  {
    id: 4,
    src: "/image/events/its-time.png",
    alt: "Its Time To Show Your Podcast",
    width: 500,
    height: 300,
    maxWidthClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[420px]",
  },
  {
    id: 5,
    src: "/image/events/Be-rebel.png",
    alt: "Wreck It Till U Make It",
    width: 500,
    height: 300,
    maxWidthClass: "max-w-[240px] sm:max-w-[290px] md:max-w-[340px]",
  },
  {
    id: 6,
    src: "/image/events/LogoChecksound.png",
    alt: "Checksound Event",
    width: 500,
    height: 300,
    maxWidthClass: "max-w-[280px] sm:max-w-[360px] md:max-w-[420px]",
  },
];

// const CENTERED_EVENT = {
//   id: 5,
//   src: "/image/events/Be-rebel.png",
//   alt: "BR Rebel Event",
//   width: 500,
//   height: 300,
//   maxWidthClass: "max-w-[300px] sm:max-w-[400px] md:max-w-[500px]",
// };

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

      {/* Centered Row 3 */}
      {/* <div className="w-full flex justify-center mt-6">
        <EventCard
          src={CENTERED_EVENT.src}
          alt={CENTERED_EVENT.alt}
          width={CENTERED_EVENT.width}
          height={CENTERED_EVENT.height}
          maxWidthClass={CENTERED_EVENT.maxWidthClass}
        />
      </div> */}
    </div>
  );
}
