"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Music2,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-zinc-800 bg-black pb-6 pt-20 text-zinc-400">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 h-[300px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto mb-16 flex max-w-7xl flex-col justify-between gap-16 px-6 lg:flex-row lg:gap-12">
        {/* Brand & Newsletter */}
        <div className="flex max-w-md flex-col gap-6">
          <Link href="/" className="group flex items-center gap-3 w-fit">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/20">
              <div className="h-5 w-2 bg-white rounded-sm" />
            </div>
            <span className="text-3xl font-black tracking-widest text-white">
              FITUP
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-zinc-400">
            Hệ sinh thái thể hình thông minh tích hợp AI. Thay đổi vóc dáng,
            nâng tầm cuộc sống với lộ trình cá nhân hóa và đội ngũ PT chuyên
            nghiệp 24/7.
          </p>

          {/* Newsletter Input */}
          <div className="mt-4 flex flex-col gap-3">
            <span className="text-sm font-semibold text-white">
              Đăng ký nhận bí quyết tập luyện
            </span>
            <div className="relative flex w-full max-w-sm items-center">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="h-12 w-full rounded-full border border-zinc-800 bg-zinc-900/50 pl-5 pr-14 text-sm text-white focus:border-orange-500 focus:outline-none"
              />
              <button className="absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white transition-transform hover:scale-105 hover:bg-orange-600">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
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
                "Về Chúng Tôi",
                "Gói Tập Luyện",
                "Trở Thành PT",
                "Blog Kiến Thức",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 transition-colors hover:text-orange-500"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    <span>{item}</span>
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
                "Bảo mật thông tin",
                "Điều khoản dịch vụ",
                "Chính sách hoàn tiền",
                "Quy chế hoạt động",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="transition-colors hover:text-orange-500"
                  >
                    {item}
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
                <strong className="text-white">A:</strong> ĐH FPT, TP. Hồ Chí
                Minh
              </li>
              <li>
                <strong className="text-white">E:</strong> hello@fitup.com
              </li>
              <li>
                <strong className="text-white">W:</strong> www.fitup.com
              </li>
              <li>
                <strong className="text-white">T:</strong> 0987 654 321
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-zinc-800/80 px-6 pt-8 text-xs sm:flex-row md:text-sm">
        <p className="flex items-center gap-2">
          © 2026 FITUP. All rights reserved.
          <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
          <span className="text-zinc-500">Mã số thuế: 01234567</span>
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Facebook, href: "#" },
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
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
