"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && <Navbar />}
      <main id="main_content" className="flex-1">
        {children}
      </main>
      {!isStudio && <Footer />}
    </>
  );
}
