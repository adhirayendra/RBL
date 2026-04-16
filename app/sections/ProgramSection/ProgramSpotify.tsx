import Image from "next/image";

export default function ProgramSpotify() {
  return (
    <div className="w-full">
      {/* Top Half: Dark Grey */}
      <section className="w-full bg-[#2C2C2C] relative pt-16 pb-16 mt-12 md:mt-16">
        
        {/* Tab */}
        <div className="absolute top-0 left-6 md:left-16 -translate-y-[98%] bg-[#FFDD00] px-8 md:px-10 py-2 md:py-3 rounded-t-[20px] md:rounded-t-[30px]">
          <h2 className="text-black text-lg md:text-xl font-extrabold font-['DM_Sans'] tracking-wide">Program Spotify</h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Main Cover */}
          <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="https://placehold.co/316x316" alt="Cover" width={316} height={316} className="w-full h-full object-cover" />
          </div>
          
          {/* Player Info */}
          <div className="flex-1 w-full text-white">
             <h3 className="text-3xl md:text-4xl font-bold mb-2">Dramadhan : The Sound Of Home</h3>
             <p className="text-sm md:text-base text-gray-300 font-normal mb-8">Radio Budi Luhur</p>
             
             {/* Timeline and Play Button */}
             <div className="flex items-center gap-4 mt-8">
                 <span className="text-gray-400 text-sm opacity-50">|◀</span>
                 <div className="flex-1 h-[4px] bg-neutral-600 relative rounded-full mx-2">
                     <div className="absolute top-0 left-0 h-full w-1/3 bg-white rounded-full"></div>
                 </div>
                 <span className="text-gray-400 text-xs md:text-sm">00:00</span>
                 <span className="text-gray-400 font-bold tracking-widest opacity-50 px-2 lg:px-4">•••</span>
                 
                 <button className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black ml-2 hover:scale-105 transition-transform flex-shrink-0">
                     <span className="ml-[2px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent"></span>
                 </button>
             </div>

             <div className="flex justify-between items-center text-xs md:text-sm border-t border-gray-700/80 py-4 mt-6 px-1">
                 <div className="flex gap-4">
                    <span className="text-gray-500 font-bold">1</span>
                    <span className="font-bold text-white">Dramadhan : The Sound Of Home</span>
                 </div>
                 <span className="text-gray-500">13:57</span>
             </div>

          </div>
        </div>
      </section>

      {/* Bottom Half: Blue Slider */}
      <section className="w-full bg-[#2D5FFE] py-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex gap-6 overflow-x-auto hide-scrollbar">
           {[1, 2, 3, 4].map((item, i) => (
             <div key={i} className={`flex-shrink-0 w-44 h-44 md:w-56 md:h-56 rounded-[20px] overflow-hidden ${i===0 ? 'border-[3px] border-[#FFDD00]' : 'bg-gray-300/50'}`}>
                <Image src={`https://placehold.co/240x240`} alt="Episode" width={240} height={240} className="w-full h-full object-cover mix-blend-overlay opacity-80" />
             </div>
           ))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-8">
          <div className="w-3 h-3 rounded-full bg-[#FFDD00]"></div>
          <div className="w-3 h-3 rounded-full bg-white/80"></div>
        </div>
      </section>
    </div>
  );
}
