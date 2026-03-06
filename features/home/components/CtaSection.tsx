"use client";

import { motion } from "framer-motion";
import { Star, Apple, Play, Download, Smartphone } from "lucide-react";
import vector4 from "@/components/assets/vector-4.svg";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden py-32">
      {/* Abstract Background Effects */}
      <div className="absolute inset-0 z-0 bg-black" />

      <img
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[389px] w-[1893px] -translate-x-1/2 -translate-y-1/2"
        alt="Vector"
        src={vector4.src}
      />

      <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Core CTA Box with Animated Corner Brackets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 flex w-full flex-col items-center border border-zinc-800/50 bg-zinc-950/50 p-12 backdrop-blur-xl md:p-20"
        >
          {/* Top Left Bracket */}
          <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-[#d68c45]" />
          {/* Top Right Bracket */}
          <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-[#d68c45]" />
          {/* Bottom Left Bracket */}
          <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-[#d68c45]" />
          {/* Bottom Right Bracket */}
          <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-[#d68c45]" />

          <div className="mb-6 flex items-center justify-center rounded-full bg-[#d68c45]/10 p-4 text-[#d68c45]">
            <Smartphone className="h-8 w-8" />
          </div>

          <h2 className="mb-6 text-3xl font-black tracking-widest text-white md:text-5xl drop-shadow-lg">
            SẴN SÀNG LỘT XÁC?
          </h2>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Tham gia cùng hơn{" "}
            <span className="font-bold text-white">100,000+</span> người dùng đã
            thay đổi vóc dáng thành công. Tải ứng dụng FITUP ngay hôm nay để
            nhận lộ trình tập luyện AI cá nhân hóa hoàn toàn miễn phí trong 7
            ngày đầu tiên.
          </p>

          <div className="relative group">
            {/* Glow effect behind main button */}
            <div className="absolute -inset-1 rounded-full bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl" />
            <button className="relative flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] px-10 py-4 text-lg font-bold text-white shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110">
              <Download className="h-5 w-5" />
              Bắt Đầu Hành Trình Ngay
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


