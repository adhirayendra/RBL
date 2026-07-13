"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs"; // Menambahkan BsX untuk tombol close

import { navbarItems } from "@/app/assets/NavbarList";

export default function Navbar() {
  const [navListOpen, setNavListOpen] = useState(false);

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center z-50 py-6 px-4">
        <header className="flex items-center gap-4">
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
        </header>

        <div className="block">
          <Link
            href="/streaming"
            className="bg-linear-to-br from-[#FFDD00] to-[#C1A600] text-black font-extrabold px-6 py-2.5 rounded-full flex items-center gap-3 hover:opacity-90 transition-all shadow-lg uppercase tracking-wider text-xs"
          >
            <Image src="/image/play.png" alt="Play" width={16} height={16} />
            LIVE STREAMING
          </Link>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setNavListOpen(true)} // Membuka menu
          aria-label="Open navigation menu"
          className="md:hidden text-black text-xl bg-linear-to-br from-[#FFDD00] to-[#C1A600] w-10 h-10 flex justify-center items-center rounded-lg transition-colors"
        >
          <BsList />
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[100] flex flex-col transition-transform duration-300 md:hidden ${navListOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header di dalam Menu Mobile */}
        <div className="bg-gradient-to-r from-[#FFDD00] to-[#C1A600] flex justify-between items-center px-6 py-4 shadow-md">
          {/* Tombol Close (X) */}
          <button
            onClick={() => setNavListOpen(false)} // Menutup menu
            aria-label="Close navigation menu"
            className="text-black text-3xl focus:outline-none"
          >
            <BsX />
          </button>

          {/* Frekuensi Info */}
          <span className="text-black font-bold text-xl tracking-wide">
            107.7 FM
          </span>

          {/* Mini Logo kanan */}
          <Image
            src="/image/logo.png"
            alt="Radio Budi Luhur Logo Mini"
            width={35}
            height={35}
            className="object-contain"
          />
        </div>

        {/* Menu Items Links */}
        <ul className="flex flex-col gap-6 pt-10 px-8 text-black font-extrabold text-2xl uppercase tracking-wider">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setNavListOpen(false)} // Otomatis tutup menu saat link diklik
                className="hover:text-gray-600 transition-colors block w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}