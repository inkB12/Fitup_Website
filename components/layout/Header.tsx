"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Hiệu ứng thay đổi background khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Workout Plan", href: "/workout-plan" },
    { name: "Become PT", href: "/become-pt" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-zinc-800 bg-black/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2"
          : "border-b border-zinc-800/50 bg-black/40 backdrop-blur-md py-4"
      }`}
    >
      {/* Đường viền ánh sáng chìm ở đáy Header */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="container mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
        {/* Navigation - Desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-medium transition-colors"
              >
                {/* Active Pill Animation */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-zinc-800/80 border border-zinc-700/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Text (Z-10 so it's above the pill) */}
                <span
                  className={`relative z-10 ${isActive ? "text-orange-500 drop-shadow-sm" : "text-zinc-400 hover:text-white"}`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-zinc-400 hover:text-orange-500 transition-colors p-2"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="group relative hidden md:block w-72">
          {/* Glow effect on focus */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-focus-within:opacity-40" />

          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="relative h-10 w-full rounded-full border border-zinc-700 bg-zinc-900/60 pl-5 pr-12 text-sm text-white placeholder-zinc-500 backdrop-blur-sm transition-all focus:border-orange-500 focus:bg-zinc-950 focus:outline-none"
          />
          <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-orange-500" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-800 bg-black/95 backdrop-blur-2xl overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive
                        ? "text-orange-500"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Search Bar */}
              <div className="relative w-full mt-4">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="h-12 w-full rounded-full border border-zinc-700 bg-zinc-900/50 pl-5 pr-12 text-base text-white focus:border-orange-500 focus:outline-none"
                />
                <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
