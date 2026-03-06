"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Zap, Users, ArrowRight } from "lucide-react";

const VALUES = [
  {
    icon: <Brain className="h-8 w-8 text-blue-400" />,
    title: "Thích ứng nhờ AI",
    description:
      "Công nghệ AI tự động phân tích và điều chỉnh cường độ tập luyện thích ứng hoàn toàn với thể trạng thực tế của cơ thể bạn.",
  },
  {
    icon: <Heart className="h-8 w-8 text-red-400" />,
    title: "Dinh dưỡng chuẩn khoa học",
    description:
      "Chế độ dinh dưỡng không dựa trên suy đoán, mà được đo lường chính xác từ dữ liệu khoa học và văn hóa ẩm thực Việt.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: "Kết nối tức thì",
    description:
      "Xóa bỏ rào cản thời gian. Kết nối nhanh chóng với các chuyên gia PT hàng đầu chỉ qua vài cú chạm ngay trên ứng dụng.",
  },
  {
    icon: <Users className="h-8 w-8 text-green-400" />,
    title: "Cộng đồng cùng phát triển",
    description:
      "Sức mạnh của cộng đồng. Chúng tôi xây dựng một môi trường tích cực để mọi người cùng chia sẻ thành quả và tạo động lực.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="relative w-full overflow-hidden pb-32 pt-16 bg-zinc-950">
      {/* Background abstract glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6">
        {/* Core Values Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-wider text-white md:text-4xl">
            GIÁ TRỊ <span className="text-orange-500">CỐT LÕI</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid Cards */}
        <div className="mb-24 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {VALUES.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col justify-center rounded-[2rem] border border-zinc-800 bg-zinc-900/40 p-10 backdrop-blur-md transition-colors hover:border-orange-500/50 hover:bg-zinc-900/80"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 transition-colors group-hover:bg-zinc-800/50">
                {val.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-orange-400">
                {val.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
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
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Pulsing glow effect */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 opacity-60 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl" />
          <button className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 px-12 py-4 text-lg font-bold text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
            Bắt Đầu Hành Trình Cùng Chúng Tôi
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

