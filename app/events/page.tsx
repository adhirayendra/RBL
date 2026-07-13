import EventList from "../components/events/EventList";

export const metadata = {
    title: "Events - Radio Budi Luhur",
    description: "Events Radio Budi Luhur",
};

export default function EventsPage() {
    return (
        <div className="w-full min-h-screen bg-[#2D5FFE] flex flex-col items-center pt-32 pb-24 font-['DM_Sans'] text-white">
            <EventList />
        </div>
    );
}
