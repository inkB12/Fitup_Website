"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Brain,
  Activity,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function NewsDataSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-950">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-16 flex flex-col items-start md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-wider text-white md:text-5xl drop-shadow-md">
              TẬP LUYỆN <span className="text-[#d68c45]">THÔNG MINH HƠN</span>
            </h2>
          </div>
          <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-[#d68c45] md:mt-0">
            Xem tất cả bài viết <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Box 1: Large (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800"
          >
            <Image
              src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
              alt="AI Posture"
              fill
              className="object-cover transition-transform duration-150 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-400 backdrop-blur-md w-fit">
                <Brain className="h-4 w-4" /> Công Nghệ AI
              </div>
              <h3 className="mb-2 text-2xl md:text-3xl font-bold text-white max-w-lg">
                Giảm 40% Nguy Cơ Chấn Thương Nhờ Phân Tích Tư Thế Real-time
              </h3>
              <p className="text-sm text-zinc-300 max-w-md line-clamp-2">
                Hệ thống AI camera của FITUP có khả năng phát hiện sai lệch
                xương khớp và đưa ra cảnh báo bằng giọng nói ngay trong lúc bạn
                đang thực hiện động tác.
              </p>
            </div>
            {/* Hover Arrow */}
            <div className="absolute right-8 top-8 flex h-12 w-12 translate-x-4 -translate-y-4 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </motion.div>

          {/* Box 2: Small (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="group relative col-span-1 overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between hover:border-[#d68c45]/50 transition-colors"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[#d68c45]/20 px-3 py-1 text-xs font-bold text-[#d68c45]">
                <TrendingUp className="h-4 w-4" /> Dữ Liệu
              </div>
              <h3 className="text-5xl font-black text-white mb-2">
                85<span className="text-3xl text-[#d68c45]">%</span>
              </h3>
              <h4 className="text-lg font-bold text-zinc-100">
                Tỷ lệ duy trì thói quen
              </h4>
            </div>
            <p className="text-sm text-zinc-400">
              Người dùng tuân thủ thực đơn thuần Việt của FITUP có khả năng duy
              trì vóc dáng lâu dài hơn gấp 3 lần so với các chế độ ăn kiêng
              phương Tây.
            </p>
          </motion.div>

          {/* Box 3: Small (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="group relative col-span-1 overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800"
          >
            <Image
              src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
              alt="Nutrition"
              fill
              className="object-cover transition-transform duration-150 group-hover:scale-110 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400 w-fit">
                <Activity className="h-4 w-4" /> Dinh Dưỡng
              </div>
              <h3 className="text-xl font-bold text-white">
                Carb vs Protein: Tỷ lệ vàng cho cơ địa người Việt
              </h3>
            </div>
          </motion.div>

          {/* Box 4: Large (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800 p-8 flex flex-col md:flex-row items-center gap-8 hover:bg-zinc-800/50 transition-colors"
          >
            <div className="flex-1">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Cá nhân hóa lộ trình tập luyện của bạn
              </h3>
              <p className="mb-6 text-sm text-zinc-400 max-w-md leading-relaxed">
                Cung cấp lộ trình tập luyện dựa trên sở thích cá nhân, thói quen và bữa ăn của bạn. Chúng tôi mong muốn mang lại cho bạn giá trị về sức khỏe cũng như tin thần.
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-[#d68c45] hover:text-[#d68c45] transition-colors">
                Khám phá tính năng <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            {/* Mockup Smartwatch visual */}
            <div className="relative h-40 w-40 md:h-48 md:w-48 shrink-0 rounded-full border-4 border-zinc-800 bg-black shadow-[0_0_30px_rgba(214,140,69,0.15)] flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-zinc-700 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border-4 border-t-[#d68c45] border-r-[#d68c45] border-b-zinc-800 border-l-zinc-800 rotate-45" />
              <div className="text-center">
                <span className="block text-2xl font-black text-white">
                  128
                </span>
                <span className="block text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
                  BPM
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


