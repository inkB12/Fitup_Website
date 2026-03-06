"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Flame, TrendingUp, Users, Activity } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Giant FITUP Title with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mb-32 flex justify-center"
        >
          {/* Glow background */}
          <div className="absolute top-1/2 left-1/2 h-40 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/20 blur-[120px]" />
          <h2 className="relative z-10 text-[5rem] font-black tracking-[0.2em] text-orange-500/10 drop-shadow-2xl md:text-[8rem] lg:text-[10rem]">
            FITUP
          </h2>
          {/* Lớp text đè lên tạo viền sáng */}
          <h2 className="absolute z-20 text-[5rem] font-black tracking-[0.2em] text-transparent md:text-[8rem] lg:text-[10rem] bg-clip-text bg-gradient-to-b from-orange-400 to-transparent opacity-80">
            FITUP
          </h2>
        </motion.div>

        {/* Features Zig-Zag Layout */}
        <div className="flex flex-col gap-32 md:gap-40">
          {/* Feature 1: Image Left, Text Right */}
          <div className="flex flex-col items-center md:flex-row md:justify-start">
            {/* Image & Widgets Group */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative h-[450px] w-full md:w-[50%] lg:w-[45%]"
            >
              {/* Main Image */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-orange-500/10">
                <Image
                  src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
                  alt="Lộ trình tập luyện AI"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              {/* Floating App Widget: Progress & Tasks */}
              <motion.div
                whileHover={{ y: -5 }}
                className="absolute -bottom-10 -right-4 z-30 w-64 rounded-2xl border border-zinc-700/50 bg-black/60 p-5 backdrop-blur-md shadow-xl sm:-right-10"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-300">
                    Daily Goal
                  </span>
                  <span className="text-xs font-bold text-orange-500">85%</span>
                </div>
                {/* Progress Bar Mock */}
                <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-orange-600 to-orange-400" />
                </div>
                {/* Checkbox List Mock */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    <span>Cardio 30 mins</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 line-through">
                    <CheckCircle2 className="h-4 w-4 text-zinc-600" />
                    <span>Bài tập cốt lõi</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Card - Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative z-10 -mt-20 w-[90%] rounded-[2rem] border border-zinc-800 bg-zinc-950/90 p-8 shadow-2xl backdrop-blur-sm transition-all hover:border-orange-500/30 md:mt-0 md:-ml-24 md:w-[55%] md:p-12 lg:w-[50%]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-3xl font-bold leading-snug text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Personalized
                </span>
                <br /> Lộ trình tập
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                Hệ thống AI phân tích thể trạng và mục tiêu của bạn để tạo ra lộ
                trình tập luyện độc bản. Tự động điều chỉnh độ khó sau mỗi buổi
                tập để đảm bảo bạn luôn tiến bộ mà không gặp chấn thương.
              </p>

              <div className="mt-8 flex justify-end">
                <div className="h-1 w-8 rounded-full bg-zinc-700 transition-all duration-300 group-hover:w-16 group-hover:bg-orange-500" />
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Text Left, Image Right */}
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-end">
            {/* Text Card - Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative z-10 -mt-20 w-[90%] rounded-[2rem] border border-zinc-800 bg-zinc-950/90 p-8 shadow-2xl backdrop-blur-sm transition-all hover:border-orange-500/30 md:mt-0 md:-mr-24 md:w-[55%] md:p-12 lg:w-[50%]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-3xl font-bold leading-snug text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Localized
                </span>
                <br /> Vietnamese Nutrition
              </h3>
              <p className="text-base leading-relaxed text-zinc-400">
                Không cần ép mình ăn những món xa lạ. Nhận ngay thực đơn cá nhân
                hóa dựa trên các món ăn thuần Việt quen thuộc, giúp bạn dễ dàng
                theo đuổi lối sống lành mạnh mà vẫn ngon miệng.
              </p>

              <div className="mt-8 flex justify-start">
                <div className="h-1 w-8 rounded-full bg-zinc-700 transition-all duration-300 group-hover:w-16 group-hover:bg-orange-500" />
              </div>
            </motion.div>

            {/* Image & Widgets Group */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative h-[450px] w-full md:w-[50%] lg:w-[45%]"
            >
              {/* Main Image */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-orange-500/10">
                <Image
                  src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
                  alt="Vietnamese Nutrition"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              {/* Floating App Widget: Calorie & Community */}
              <motion.div
                whileHover={{ y: -5 }}
                className="absolute -bottom-10 -left-4 z-30 w-64 rounded-2xl border border-zinc-700/50 bg-black/60 p-5 backdrop-blur-md shadow-xl sm:-left-10"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <Flame className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <span className="block text-xs text-zinc-400">
                      Burned Today
                    </span>
                    <span className="block text-xl font-bold text-white">
                      450 <span className="text-sm text-zinc-500">kcal</span>
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-4">
                  <div className="flex -space-x-2">
                    <img
                      src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
                      alt="Người dùng"
                      className="h-8 w-8 rounded-full border-2 border-black"
                    />
                    <img
                      src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
                      alt="Người dùng"
                      className="h-8 w-8 rounded-full border-2 border-black"
                    />
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-zinc-800 text-[10px] text-white">
                      +12
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Users className="h-3 w-3" /> Bạn bè
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

