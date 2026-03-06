"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Topbar() {
  return (
    <div className="hidden w-full border-b border-zinc-800/80 bg-zinc-950 py-3 lg:block">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo Section with Hover Effect */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 transition-all duration-300 group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <div className="h-4 w-1.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-sm" />
          </div>
          <span className="text-xl font-black tracking-[0.2em] text-white transition-colors group-hover:text-orange-100">
            FITUP
          </span>
        </Link>

        {/* Contact Info Section */}
        <div className="flex items-center gap-8">
          {/* Location */}
          <motion.div
            whileHover={{ y: -2 }}
            className="group flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition-colors group-hover:bg-orange-500/10">
              <MapPin className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white transition-colors group-hover:text-orange-400">
                Văn phòng FITUP
              </span>
              <span className="text-xs text-zinc-500">
                TP. Hồ Chí Minh, Việt Nam
              </span>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ y: -2 }}
            className="group flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition-colors group-hover:bg-orange-500/10">
              <Mail className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white transition-colors group-hover:text-orange-400">
                Liên hệ
              </span>
              <span className="text-xs text-zinc-500">hello@fitup.com</span>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -2 }}
            className="group flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition-colors group-hover:bg-orange-500/10">
              <Phone className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white transition-colors group-hover:text-orange-400">
                Hotline 24/7
              </span>
              <span className="text-xs text-zinc-500">0987 654 321</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

