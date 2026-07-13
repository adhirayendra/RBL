import Image from "next/image";
import { FaInstagram, FaYoutube, FaGoogle, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socialIcons = [
    { icon: <FaXTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaGoogle />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
  ];

  return (
    <footer className="w-full relative overflow-hidden flex flex-col items-center bg-white">
      {/* Container untuk Background Gambar Utama */}
      {/* Menggunakan w-screen dan w-full untuk memastikan memenuhi lebar, 
          dan relative untuk layering elemen di atasnya */}
      <div className="relative w-screen w-full h-[350px] md:h-[500px]">
        {/* Gambar Background Ilustrasi (image/footer.png) */}
        <Image
          src="/image/footer.png"
          alt="Radio Budi Luhur Background Illustration"
          fill
          // KEY CHANGE: Menggunakan object-cover agar gambar memenuhi seluruh container
          // dan object-bottom agar bagian bawah ilustrasi (area kuning) tetap terlihat.
          className="object-cover object-bottom"
          priority
          quality={70}
          sizes="(max-width: 768px) 100vw, 1525px"
        />

        {/* OVERLAY: Gradasi Biru Solid di Bagian Atas */}
        {/* Ini untuk memastikan teks "Listen Streaming Now!" terlihat jelas 
            dan serasi dengan bagian atas gradasi, menutupi langit putih dari object-cover */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#2D5FFE] to-transparent z-10" />

        {/* 1. Judul di atas (dalam z-index lebih tinggi) */}
        <div className="absolute top-8 left-0 w-full text-center z-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Listen Streaming Now!
          </h2>
        </div>

        {/* 2. Logo RBL Floating di tengah area ilustrasi */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-36 h-36 md:w-60 md:h-60 drop-shadow-2xl">
            <Image
              src="/image/logo.png"
              alt="Logo Radio Budi Luhur"
              fill
              className="object-contain"
              priority
              quality={80}
              sizes="(max-width: 768px) 144px, 240px"
            />
          </div>
        </div>
      </div>

      {/* 3. Social Media & Copyright Section (Di atas area ilustrasi kuning) */}
      <div className="relative z-20 w-full flex flex-col items-center pb-12 mt-[-60px] md:mt-[-100px] gap-8">
        <div className="flex items-center justify-center gap-3 md:gap-5">
          {socialIcons.map((social, i) => {
            const platformNames = ["Twitter", "Instagram", "Youtube", "Google", "Tiktok"];
            const platform = platformNames[i] || "Social Media";
            return (
              <a
                key={i}
                href={social.link}
                aria-label={`Follow us on ${platform}`}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-b from-blue-400 to-[#2D5FFE] text-white flex items-center justify-center text-lg md:text-xl shadow-xl hover:scale-110 transition-transform border border-white/50"
              >
                {social.icon}
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-xs md:text-sm font-medium">
          <p>© 2026 Radio Budi Luhur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}