"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Activity, ArrowUpRight, Brain, TrendingUp } from "lucide-react";

export default function NewsDataSection() {
  const router = useRouter();

  const navigateTo = (href: string) => {
    router.push(href);
  };

  const handleKeyNavigate = (
    event: React.KeyboardEvent<HTMLElement>,
    href: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      router.push(href);
    }
  };

  return (
    <section className="relative z-10 w-full bg-zinc-950 py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-16 flex flex-col items-start md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-wider text-white drop-shadow-md md:text-5xl">
              TẬP LUYỆN <span className="text-[#d68c45]">THÔNG MINH HƠN</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => navigateTo("/blogs")}
            className="mt-6 flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-[#d68c45] md:mt-0"
          >
            Xem tất cả bài viết <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>

        <div className="grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            role="link"
            tabIndex={0}
            onClick={() => navigateTo("/blogs/ai-posture-realtime-injury-prevention")}
            onKeyDown={(event) =>
              handleKeyNavigate(event, "/blogs/ai-posture-realtime-injury-prevention")
            }
            className="group relative col-span-1 cursor-pointer overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900 md:col-span-2"
          >
            <Image
              src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
              alt="AI posture analysis"
              fill
              className="object-cover opacity-60 transition-transform duration-150 group-hover:scale-110 group-hover:opacity-40"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-400 backdrop-blur-md">
                <Brain className="h-4 w-4" /> Công Nghệ AI
              </div>
              <h3 className="mb-2 max-w-lg text-2xl font-bold text-white md:text-3xl">
                Giảm 40% Nguy Cơ Chấn Thương Nhờ Phân Tích Tư Thế Real-time
              </h3>
              <p className="max-w-md line-clamp-2 text-sm text-zinc-300">
                Hệ thống AI camera của FITUP có khả năng phát hiện sai lệch xương
                khớp và đưa ra cảnh báo bằng giọng nói ngay trong lúc bạn đang
                thực hiện động tác.
              </p>
            </div>

            <div className="pointer-events-none absolute right-8 top-8 flex h-12 w-12 -translate-y-4 translate-x-4 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            role="link"
            tabIndex={0}
            onClick={() => navigateTo("/blogs/vietnamese-meal-plan-habit-retention")}
            onKeyDown={(event) =>
              handleKeyNavigate(event, "/blogs/vietnamese-meal-plan-habit-retention")
            }
            className="group relative col-span-1 flex cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-[#d68c45]/50"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[#d68c45]/20 px-3 py-1 text-xs font-bold text-[#d68c45]">
                <TrendingUp className="h-4 w-4" /> Dữ Liệu
              </div>
              <h3 className="mb-2 text-5xl font-black text-white">
                85<span className="text-3xl text-[#d68c45]">%</span>
              </h3>
              <h4 className="text-lg font-bold text-zinc-100">
                Tỷ lệ duy trì thói quen
              </h4>
            </div>
            <p className="text-sm text-zinc-400">
              Người dùng tuân thủ thực đơn thuần Việt của FITUP có khả năng duy trì
              vóc dáng lâu dài hơn gấp 3 lần so với các chế độ ăn kiêng phương Tây.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.15 }}
            role="link"
            tabIndex={0}
            onClick={() => navigateTo("/blogs/carb-protein-ratio-for-vietnamese-body")}
            onKeyDown={(event) =>
              handleKeyNavigate(event, "/blogs/carb-protein-ratio-for-vietnamese-body")
            }
            className="group relative col-span-1 cursor-pointer overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900"
          >
            <Image
              src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
              alt="Carb and protein ratio"
              fill
              className="object-cover opacity-60 transition-transform duration-150 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-lg bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                <Activity className="h-4 w-4" /> Dinh Dưỡng
              </div>
              <h3 className="text-xl font-bold text-white">
                Carb vs Protein: Tỷ lệ vàng cho cơ địa người Việt
              </h3>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            role="link"
            tabIndex={0}
            onClick={() => navigateTo("/blogs/personal-roadmap-from-training-data")}
            onKeyDown={(event) =>
              handleKeyNavigate(event, "/blogs/personal-roadmap-from-training-data")
            }
            className="group relative col-span-1 flex cursor-pointer flex-col items-center gap-8 overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:bg-zinc-800/50 md:col-span-2 md:flex-row"
          >
            <div className="flex-1">
              <h3 className="mb-4 text-2xl font-bold text-white">
                Cá nhân hóa lộ trình tập luyện của bạn
              </h3>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-zinc-400">
                Cung cấp lộ trình tập luyện dựa trên sở thích cá nhân, thói quen và
                bữa ăn của bạn. Chúng tôi mong muốn mang lại cho bạn giá trị về sức
                khỏe cũng như tinh thần.
              </p>
              <span className="flex items-center gap-2 text-sm font-bold text-[#d68c45]">
                Khám phá tính năng <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full border-4 border-zinc-800 bg-black shadow-[0_0_30px_rgba(214,140,69,0.15)] md:h-48 md:w-48">
              <div className="absolute inset-2 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed border-zinc-700" />
              <div className="absolute inset-6 rotate-45 rounded-full border-4 border-b-zinc-800 border-l-zinc-800 border-r-[#d68c45] border-t-[#d68c45]" />
              <div className="text-center">
                <span className="block text-2xl font-black text-white">128</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  BPM
                </span>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
