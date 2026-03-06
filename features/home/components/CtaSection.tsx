"use client";

import { motion } from "framer-motion";
import { Star, Apple, Play, Download, Smartphone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden py-32">
      {/* Abstract Background Effects */}
      <div className="absolute inset-0 z-0 bg-black" />

      {/* Breathing Glow Sphere */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 z-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/20 blur-[120px]"
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
          <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-orange-500" />
          {/* Top Right Bracket */}
          <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-orange-500" />
          {/* Bottom Left Bracket */}
          <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-orange-500" />
          {/* Bottom Right Bracket */}
          <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-orange-500" />

          <div className="mb-6 flex items-center justify-center rounded-full bg-orange-500/10 p-4 text-orange-500">
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
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-600 to-red-600 opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl" />
            <button className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 text-lg font-bold text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
              <Download className="h-5 w-5" />
              Bắt Đầu Hành Trình Ngay
            </button>
          </div>
        </motion.div>

        {/* Ratings & Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-12 flex w-full max-w-md items-center justify-center gap-8 text-sm text-zinc-400 md:gap-16"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <span className="font-medium text-white">
              4.9/5 <span className="text-zinc-500">(24k+ Đánh giá)</span>
            </span>
          </div>
        </motion.div>

        {/* Download Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          {/* Kho ứng dụng Button */}
          <button className="group relative flex h-14 w-48 items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-black overflow-hidden transition-all hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Apple className="relative z-10 h-7 w-7 text-white" />
            <div className="relative z-10 flex flex-col items-start text-left">
              <span className="text-[10px] leading-none text-zinc-400">
                Tải xuống trên
              </span>
              <span className="text-base font-semibold leading-none text-white">
                Kho ứng dụng
              </span>
            </div>
          </button>

          {/* CH Play Button */}
          <button className="group relative flex h-14 w-48 items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-black overflow-hidden transition-all hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Play className="relative z-10 h-6 w-6 text-white fill-white" />
            <div className="relative z-10 flex flex-col items-start text-left">
              <span className="text-[10px] leading-none text-zinc-400">
                TẢI TRÊN
              </span>
              <span className="text-base font-semibold leading-none text-white">
                CH Play
              </span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

