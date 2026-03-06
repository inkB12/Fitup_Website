"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Topbar() {
  return (
    <div className="hidden w-full border-b border-zinc-800/80 bg-[#121212] py-3 lg:block">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo Section with Hover Effect */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 transition-all duration-150 group-hover:border-[#d68c45] group-hover:shadow-[0_0_15px_rgba(214,140,69,0.3)]">
            <div className="h-4 w-1.5 bg-gradient-to-b from-[#d68c45] to-[#d68c45] rounded-sm" />
          </div>
          <span className="text-xl font-black tracking-[0.2em] text-white transition-colors group-hover:text-[#d68c45]">
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
            <MapPin className="h-5 w-5 text-[#d68c45] transition-all group-hover:brightness-110" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white transition-colors group-hover:text-[#d68c45]">
                FITUP corporate
              </span>
              <span className="text-xs text-zinc-500">
                Headquarters: TP. Hồ Chí Minh, Việt Nam
              </span>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            whileHover={{ y: -2 }}
            className="group flex cursor-pointer items-center gap-3"
          >
            <Mail className="h-5 w-5 text-[#d68c45] transition-all group-hover:brightness-110" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white transition-colors group-hover:text-[#d68c45]">
               Workspace
              </span>
              <span className="text-xs text-zinc-500">Email: hello@fitup.com</span>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -2 }}
            className="group flex cursor-pointer items-center gap-3"
          >
            <Phone className="h-5 w-5 text-[#d68c45] transition-all group-hover:brightness-110" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white transition-colors group-hover:text-[#d68c45]">
                Hotline 24/7
              </span>
              <span className="text-xs text-zinc-500">Telephone: 0987 654 321</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



