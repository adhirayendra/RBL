export default function AboutHeader() {
  return (
    <div className="w-full flex flex-col">
      {/* Mobile */}
      <div className="md:hidden self-start bg-[#FFDD00] px-6 py-1.5 rounded-t-[20px] shadow-md ml-6 z-20">
        <h2 className="text-black text-sm font-extrabold font-['DM_Sans'] tracking-wide">
          About
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden md:block w-full self-stretch z-20">
        <div className="max-w-[1440px] mx-auto px-[33px]">
          <div className="inline-block bg-[#FFDD00] px-10 py-3 rounded-t-[35px] shadow-md">
            <h2 className="text-black text-2xl font-extrabold font-['DM_Sans'] tracking-wide">
              About
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}