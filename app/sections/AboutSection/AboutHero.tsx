import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative w-full bg-[#121212] overflow-hidden flex flex-row h-[280px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
            {/* Team Photo Container */}
            <div className="relative w-7/12 sm:w-3/5 h-full">
                <Image
                    src="/image/about/about.png"
                    alt="Radio Budi Luhur Team"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 60vw, 60vw"
                />
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: "linear-gradient(to left, #121212 0.05%, rgba(16,16,16,0) 65%)"
                    }}
                />
            </div>

            {/* Welcome Text Container */}
            <div className="relative w-5/12 sm:w-2/5 flex flex-col justify-center pl-3 pr-4 sm:pl-8 sm:pr-6 md:pl-12 md:pr-10 z-20 text-white bg-transparent">
                <h1 className="text-sm sm:text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-2 sm:mb-4 md:mb-6">
                    Perkenalkin
                    <br />
                    Radio Budi luhur
                </h1>

                <div className="space-y-0.5 sm:space-y-2 text-[8px] sm:text-sm md:text-lg lg:text-xl text-gray-300">
                    <p className="leading-relaxed">
                        <strong className="font-bold text-white">Waktu Mengudara:</strong><br />10.00-20.00 WIB
                    </p>
                    <p className="leading-relaxed">
                        <strong className="font-bold text-white">Email:</strong><br />radiobudiluhur@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
}