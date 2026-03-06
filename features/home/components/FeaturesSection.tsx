"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  Flame,
  TrendingUp,
  Users,
  Activity,
  Facebook,
  Instagram,
  Music2,
  Youtube,
  Heart,
} from "lucide-react";

const socialIcons = [
  { alt: "Facebook", Icon: Facebook },
  { alt: "TikTok", Icon: Music2 },
  { alt: "YouTube", Icon: Youtube },
  { alt: "Instagram", Icon: Instagram },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden py-12">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="relative mx-auto mb-14 h-[60px] w-[1302px] max-w-full">
          <p className="absolute top-[3px] left-[535px] [font-family:'Montserrat',Helvetica] font-medium text-[#ffffff] text-2xl text-center tracking-[3.00px] leading-[normal]">
            Transform Your Body, Transform Your Life.
          </p>

          <div className="absolute top-0 left-[80px] flex h-[41px] w-[287px] items-center justify-center rounded-[36px] border-[1.2px] border-solid border-[#3f3f3f]">
            <div className="flex items-center justify-center gap-4">
              <Heart className="h-[11px] w-[11px] fill-[#d68c45] text-[#d68c45]" />
              <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#d68c45] text-[16.8px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Follow
              </p>
              {socialIcons.map((icon, index) => {
                const Icon = icon.Icon;
                return (
                  <Icon
                    key={index}
                    className="w-[19px] h-[19px] text-white"
                    aria-label={icon.alt}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Zig-Zag Layout */}
        <div className="relative flex flex-col gap-32 md:gap-40">
          {/* Feature 1: Image Left, Text Right */}
          <div className="relative z-10 flex flex-col items-center md:flex-row md:justify-start">
            <div className="pointer-events-none absolute -top-24 right-[6%] z-0 h-[317px] w-[316px] rounded-[158px/158.5px] blur-[50px] bg-[linear-gradient(180deg,rgba(242,47,70,0.63)_0%,rgba(214,140,69,0.63)_100%,rgba(112,97,163,0.63)_100%)]" />
            {/* Image & Widgets Group */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="relative h-[450px] w-full md:w-[50%] lg:w-[45%]"
            >
              {/* Main Image */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#d68c45]/10">
                <Image
                  src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
                  alt="Lộ trình tập luyện AI"
                  fill
                  className="object-cover transition-transform duration-150 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              {/* Floating App Widget: Progress & Tasks */}
              <motion.div
                whileHover={{ y: -5 }}
                className="absolute -bottom-10 -right-4 z-[60] w-64 rounded-2xl border border-zinc-700/50 bg-black/60 p-5 backdrop-blur-md shadow-xl sm:-right-10"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-300">
                    Daily Goal
                  </span>
                  <span className="text-xs font-bold text-[#d68c45]">85%</span>
                </div>
                {/* Progress Bar Mock */}
                <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-[#d68c45] to-[#d68c45]" />
                </div>
                {/* Checkbox List Mock */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-[#d68c45]" />
                    <span>Cardio 30 mins</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-[#d68c45]" />
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
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group relative z-10 -mt-20 w-[90%] rounded-[2rem] border border-zinc-800 bg-zinc-950/90 p-8 shadow-2xl backdrop-blur-sm transition-all hover:border-[#d68c45]/30 md:mt-0 md:-ml-24 md:w-[55%] md:p-12 lg:w-[50%]"
            >
              <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d68c45]/10 text-[#d68c45]">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-3xl font-bold leading-snug text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d68c45] to-[#d68c45]">
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
                <div className="h-1 w-8 rounded-full bg-zinc-700 transition-all duration-150 group-hover:w-16 group-hover:bg-[#d68c45]" />
              </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Text Left, Image Right */}
          <div className="relative z-10 flex flex-col-reverse items-center md:flex-row md:justify-end">
            <div className="pointer-events-none absolute -top-24 left-[6%] z-0 h-[317px] w-[316px] rounded-[158px/158.5px] blur-[50px] bg-[linear-gradient(180deg,rgba(242,47,70,0.63)_0%,rgba(214,140,69,0.63)_100%,rgba(112,97,163,0.63)_100%)]" />
            {/* Text Card - Overlapping */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group relative z-20 -mt-20 w-[90%] rounded-[2rem] border border-zinc-800 bg-zinc-950/90 p-8 shadow-2xl backdrop-blur-sm transition-all hover:border-[#d68c45]/30 md:mt-0 md:-mr-24 md:w-[55%] md:p-12 lg:w-[50%]"
            >
              <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d68c45]/10 text-[#d68c45]">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-3xl font-bold leading-snug text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d68c45] to-[#d68c45]">
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
                <div className="h-1 w-8 rounded-full bg-zinc-700 transition-all duration-150 group-hover:w-16 group-hover:bg-[#d68c45]" />
              </div>
              </div>
            </motion.div>

            {/* Image & Widgets Group */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="relative h-[450px] w-full md:w-[50%] lg:w-[45%]"
            >
              {/* Main Image */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#d68c45]/10">
                <Image
                  src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
                  alt="Vietnamese Nutrition"
                  fill
                  className="object-cover transition-transform duration-150 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              </div>

              {/* Floating App Widget: Calorie & Community */}
              <motion.div
                whileHover={{ y: -5 }}
                className="absolute -bottom-10 -left-4 z-[60] w-64 rounded-2xl border border-zinc-700/50 bg-black/60 p-5 backdrop-blur-md shadow-xl sm:-left-10"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d68c45]/20">
                    <Flame className="h-6 w-6 text-[#d68c45]" />
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



