"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VALUES = [
  {
    title: "Thích ứng nhờ AI",
    description:
      "Công nghệ AI phân tích thể trạng và tự điều chỉnh lộ trình tập phù hợp với tiến độ thực tế của bạn.",
  },
  {
    title: "Dinh dưỡng chuẩn khoa học",
    description:
      "Thực đơn được tối ưu bằng dữ liệu dinh dưỡng và thói quen ăn uống Việt Nam, giúp dễ theo lâu dài.",
  },
  {
    title: "Kết nối tức thì",
    description:
      "Đặt lịch và trao đổi nhanh với huấn luyện viên cá nhân ngay trên ứng dụng, không gián đoạn trải nghiệm.",
  },
  {
    title: "Cộng đồng cùng phát triển",
    description:
      "Xây dựng môi trường tích cực để mọi người chia sẻ kết quả, duy trì động lực và tiến bộ bền vững mỗi ngày.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative w-full overflow-hidden pb-32 pt-16 bg-zinc-950">
      {/* Background abstract glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d68c45]/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6">
        {/* Core Values Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-wider text-white md:text-4xl">
            GIÁ TRỊ <span className="text-[#d68c45]">CỐT LÕI</span>
          </h2>
        </motion.div>

        {/* 4 Cards Layout */}
        <div className="mb-24 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative min-h-[210px] rounded-2xl border border-zinc-700/70 bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#d68c45]/45"
            >
              <span className="text-[3rem] font-semibold leading-none tracking-tight text-zinc-100/90">
                {index + 1}
              </span>
              <h3 className="mt-2 text-[1.02rem] font-semibold text-white transition-colors group-hover:text-[#d68c45]">
                {val.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Join Now CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative group"
        >
          {/* Pulsing glow effect */}
          <div className="absolute -inset-1 rounded-full bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] opacity-60 blur-lg transition-all duration-200 group-hover:opacity-100 group-hover:blur-xl" />
          <button className="relative flex items-center gap-3 rounded-full bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] px-12 py-4 text-lg font-bold text-white shadow-xl transition-transform duration-150 group-hover:scale-105 group-hover:brightness-110">
            Bắt Đầu Hành Trình Cùng Chúng Tôi
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}



