"use client";

import { motion } from "framer-motion";
import { UserPlus, Cpu, Dumbbell, Trophy } from "lucide-react";

const STEPS = [
  {
    id: 1,
    icon: <UserPlus className="h-8 w-8 text-[#d68c45]" />,
    title: "1. Khởi Tạo Hồ Sơ",
    description:
      "Nhập chỉ số cơ thể, thói quen ăn uống và mục tiêu mong muốn (giảm mỡ, tăng cơ...).",
  },
  {
    id: 2,
    icon: <Cpu className="h-8 w-8 text-[#d68c45]" />,
    title: "2. Phân Tích Bằng AI",
    description:
      "Hệ thống AI xử lý dữ liệu để tạo ra lộ trình tập luyện và thực đơn cá nhân hóa 100%.",
  },
  {
    id: 3,
    icon: <Dumbbell className="h-8 w-8 text-[#d68c45]" />,
    title: "3. Bắt Đầu Tập Luyện",
    description:
      "Thực hành theo video hướng dẫn 3D, có AI Voice nhắc nhở và đếm nhịp trực tiếp.",
  },
  {
    id: 4,
    icon: <Trophy className="h-8 w-8 text-[#d68c45]" />,
    title: "4. Lột Xác Toàn Diện",
    description:
      "Theo dõi biểu đồ tiến độ hàng tuần. AI tự động tinh chỉnh bài tập để bạn đạt kết quả nhanh nhất.",
  },
];

export default function AppJourneySection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-zinc-950">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          
          <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-5xl drop-shadow-md">
            HÀNH TRÌNH <span className="text-[#d68c45]">LỘT XÁC</span> CỦA BẠN
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 md:text-base leading-relaxed">
            Chỉ với 4 bước đơn giản, FITUP sẽ biến chiếc điện thoại của bạn
            thành một Huấn luyện viên cá nhân tận tụy nhất.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Background Connecting Line (Desktop) */}
          <div className="absolute top-12 left-[10%] hidden h-[2px] w-[80%] bg-zinc-800 md:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#d68c45] via-[#d68c45] to-red-500 shadow-[0_0_15px_rgba(214,140,69,0.5)]"
            />
          </div>

          {/* Background Connecting Line (Mobile) */}
          <div className="absolute left-[28px] top-10 block h-[80%] w-[2px] bg-zinc-800 md:hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-[#d68c45] via-[#d68c45] to-red-500 shadow-[0_0_15px_rgba(214,140,69,0.5)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: index * 0.15 }}
                className="group relative flex flex-col items-start md:items-center md:text-center pl-16 md:pl-0"
              >
                {/* Step Icon Container */}
                <div className="absolute left-0 top-0 md:relative md:mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 border-2 border-zinc-700 shadow-xl transition-all duration-150 group-hover:border-[#d68c45] group-hover:scale-110 group-hover:shadow-[#d68c45]/30 z-10">
                  <div className="absolute -inset-2 rounded-full bg-[#d68c45]/20 blur-md opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="mt-1 md:mt-0 rounded-2xl border border-transparent bg-zinc-900/40 p-6 transition-colors duration-150 hover:border-zinc-800 hover:bg-zinc-800/50">
                  <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-[#d68c45]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


