"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Music2,
} from "lucide-react";
import fitupLogo from "@/components/assets/Fitness_Logo__1_-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-zinc-800 bg-black pb-6 pt-20 text-zinc-400">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#d68c45]/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto mb-16 flex max-w-7xl flex-col justify-between gap-16 px-6 lg:flex-row lg:gap-12">
        {/* Brand & Newsletter */}
        <div className="flex max-w-md flex-col gap-6">
          <Link href="/" className="group flex items-center gap-3 w-fit">
            <Image
              src={fitupLogo}
              alt="FITUP Logo"
              width={56}
              height={56}
              className="h-12 w-12 object-contain transition-transform duration-150 group-hover:scale-105 md:h-14 md:w-14"
              priority
            />
            <span className="text-3xl font-black tracking-widest text-white">
              FITUP
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-zinc-400">
            Hệ sinh thái thể hình thông minh tích hợp AI. Thay đổi vóc dáng,
            nâng tầm cuộc sống với lộ trình cá nhân hóa và đội ngũ PT chuyên
            nghiệp 24/7.
          </p>

         
        </div>

        {/* Links Container */}
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          {/* Menu */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Khám Phá
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              {[
                { label: "Về Chúng Tôi", href: "/about" },
                { label: "Blog Kiến Thức", href: "/blogs" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 transition-colors hover:text-[#d68c45]"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools / Legal */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Chính Sách
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              {[
                { label: "Bảo mật thông tin", href: "/privacy-policy" },
                { label: "Điều khoản dịch vụ", href: "/tos" },
                { label: "Chính sách hoàn tiền", href: "/refund-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#d68c45]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Liên Hệ
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                www.fitup.com
              </li>
              <li>
                Email: hello@fitup.com
              </li>
              <li>
                Tel: 0987 654 321
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-zinc-800/80 px-6 pt-8 text-xs sm:flex-row md:text-sm">
        <p className="flex items-center gap-2">
          © 2026 FITUP. Bảo lưu mọi quyền.
          <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
          <span className="text-zinc-500">Mã số thuế: 01234567</span>
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61559948289103" },
            { icon: Music2, href: "#" }, // Tiktok
            { icon: Instagram, href: "#" },
            { icon: Youtube, href: "#" },
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors hover:border-[#d68c45] hover:bg-[linear-gradient(135deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}


