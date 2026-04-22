import Image from "next/image";
import Link from "next/link";

import { navbarItems } from "@/app/assets/NavbarList";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      {/* Container dengan Grid 3 Kolom */}
      <div className="max-w-360 mx-auto px-6 md:px-16 flex justify-between items-center">
        {/* KOLOM 1: Navigasi (Hanya muncul di Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-[#FFDD00] font-bold text-[15px] tracking-widest">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* KOLOM 2: Logo (Tengah Sempurna) */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex justify-start md:justify-center z-0">
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Radio Budi Luhur Logo"
              width={60}
              height={60}
              className="object-contain hover:scale-110 transition-transform"
              priority
              quality={80}
              sizes="60px"
            />
          </Link>
        </div>

        {/* KOLOM 3: Button (Sisi Kanan) */}
        <div className="flex justify-end items-center gap-4">
          <div className="hidden md:block">
            <Link
              href="#"
              className="bg-gradient-to-br from-[#FFDD00] to-[#C1A600] text-black font-extrabold px-6 py-2.5 rounded-full flex items-center gap-3 hover:opacity-90 transition-all shadow-lg uppercase tracking-wider text-xs"
            >
              <Image src="/image/play.png" alt="Play" width={16} height={16} />
              LIVE STREAMING
            </Link>
          </div>

          {/* Mobile Menu Icon (Muncul di HP sebagai ganti Menu Kiri) */}
          <button
            aria-label="Open navigation menu"
            className="md:hidden text-[#FFDD00] font-bold border-2 border-[#FFDD00] px-3 py-1 rounded hover:bg-[#FFDD00] hover:text-black transition-colors"
          >
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
}
