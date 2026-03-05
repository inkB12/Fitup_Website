"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Flame, Crown, ArrowRight } from "lucide-react";

const PACKAGES = [
  {
    id: 1,
    name: "Tự Do & Linh Hoạt",
    target: "Dành cho người bận rộn, muốn tự tập",
    icon: <Zap className="h-6 w-6 text-blue-400" />,
    price: "Cơ Bản",
    color: "blue",
    features: [
      "AI tạo lịch tập 3-4 buổi/tuần",
      "Gợi ý thực đơn theo calo mục tiêu",
      "Theo dõi tiến độ qua biểu đồ",
      "Truy cập cộng đồng 100k+ thành viên",
    ],
    isPopular: false,
  },
  {
    id: 2,
    name: "Độ Body Thần Tốc",
    target: "Cam kết thay đổi vóc dáng sau 60 ngày",
    icon: <Flame className="h-8 w-8 text-white" />,
    price: "Tối Ưu",
    color: "orange",
    features: [
      "Lộ trình AI cá nhân hóa 100%",
      "Thực đơn thuần Việt chi tiết từng bữa",
      "AI phân tích tư thế tập qua camera",
      "Cập nhật bài tập tự động mỗi tuần",
      "Ưu tiên hỗ trợ từ chuyên gia dinh dưỡng",
    ],
    isPopular: true, // Gói nổi bật nhất
  },
  {
    id: 3,
    name: "Kèm 1:1 Chuyên Sâu",
    target: "Dành cho người cần PT giám sát trực tiếp",
    icon: <Crown className="h-6 w-6 text-yellow-400" />,
    price: "Cao Cấp",
    color: "yellow",
    features: [
      "Mọi quyền lợi của gói Tối Ưu",
      "Book lịch tập qua Video Call với PT",
      "Sửa tư thế và đếm nhịp Real-time",
      "Chuyên gia thiết kế lại thực đơn 24/7",
    ],
    isPopular: false,
  },
];

export default function WorkoutPackagesSection() {
  return (
    <section className="relative w-full overflow-hidden py-24 bg-zinc-950">
      {/* Background glow for the whole section */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange-600/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="mb-4 flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md">
            <Crown className="h-4 w-4" />
            <span>Đầu Tư Cho Sức Khỏe</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-5xl drop-shadow-md">
            LỘ TRÌNH DÀNH RIÊNG <span className="text-orange-500">CHO BẠN</span>
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 md:text-base leading-relaxed">
            Cho dù bạn muốn tự tập luyện theo nhịp độ riêng hay cần sự giám sát
            khắt khe từ PT, FITUP đều có giải pháp hoàn hảo giúp bạn rút ngắn
            thời gian đạt được mục tiêu.
          </p>
        </motion.div>

        {/* Pricing/Packages Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10 items-center">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col rounded-[2rem] border bg-zinc-900/50 p-8 backdrop-blur-md transition-all duration-300 ${
                pkg.isPopular
                  ? "scale-100 border-orange-500 shadow-2xl shadow-orange-500/20 md:scale-105 z-20 py-12 bg-zinc-900/90"
                  : "border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50 z-10"
              }`}
            >
              {/* Ribbon for Popular Package */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 h-32 w-32 overflow-hidden rounded-tr-[2rem]">
                  <div className="absolute top-6 right-[-35px] w-[150px] rotate-45 bg-gradient-to-r from-orange-600 to-red-600 py-1.5 text-center text-[10px] font-bold tracking-wider text-white shadow-md uppercase">
                    Phổ biến nhất
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="mb-8 flex flex-col items-center text-center border-b border-zinc-800/50 pb-8">
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner ${
                    pkg.isPopular
                      ? "bg-gradient-to-br from-orange-400 to-orange-600"
                      : "bg-zinc-800"
                  }`}
                >
                  {pkg.icon}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {pkg.name}
                </h3>
                <p className="h-10 text-sm text-zinc-400">{pkg.target}</p>
                <div className="mt-6 flex items-end justify-center gap-1">
                  <span
                    className={`text-3xl font-black ${pkg.isPopular ? "text-orange-500" : "text-white"}`}
                  >
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* Package Features List */}
              <div className="flex-1">
                <ul className="flex flex-col gap-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 shrink-0 ${pkg.isPopular ? "text-orange-500" : "text-zinc-500"}`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${pkg.isPopular ? "text-zinc-200 font-medium" : "text-zinc-400"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <button
                  className={`group flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold transition-all ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 hover:scale-[1.02]"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  Chọn Gói Này
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
