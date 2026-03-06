"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import fitupLogo from "@/components/assets/Fitness_Logo__1_-removebg-preview.png";

const NAV_LINKS = [
  { name: "ABOUT US", href: "/about" },
  { name: "BLOG", href: "/blogs" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

      setIsScrolled(currentScrollY > 20);

      if (isMobileOpen) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current && scrollDelta > 4) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current && scrollDelta > 4) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transform transition-[transform,background-color,padding,box-shadow,border-color] duration-200 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "border-b border-zinc-800 bg-[#121212] py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "border-b border-zinc-800/50 bg-[#121212] py-4 backdrop-blur-md"
      }`}
    >
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d68c45]/20 to-transparent" />

      <div className="container mx-auto flex h-12 max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" className="group inline-flex items-center gap-3">
          <Image
            src={fitupLogo}
            alt="FITUP Logo"
            width={56}
            height={56}
            className="h-12 w-12 object-contain transition-transform duration-150 group-hover:scale-105 md:h-14 md:w-14"
            priority
          />
          <span className="text-lg font-black uppercase tracking-[0.18em] text-white transition-colors duration-150 group-hover:text-[#d68c45] md:text-xl">
            FITUP
          </span>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-zinc-300"
            >
              {link.name}
            </Link>
          ))}
          </nav>

          <Link
            href="/download-app"
            className="relative inline-flex items-center rounded-full bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] px-7 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-150 hover:brightness-110"
          >
            START NOW
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-zinc-300 transition-colors hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-zinc-800 bg-[#121212] backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-base font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-zinc-300"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/download-app"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex w-fit items-center rounded-full bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-150 hover:brightness-110"
              >
                START NOW
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

