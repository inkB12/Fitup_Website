"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const PACKAGES = [
  {
    id: 1,
    name: "Tự Do & Linh Hoạt",
    target: "Dành cho người bận rộn, muốn tự tập",
    price: "Cơ Bản",
    features: [
      "AI tạo lịch tập 3-4 buổi/tuần",
      "Gợi ý thực đơn theo calo mục tiêu",
      "Theo dõi tiến độ qua biểu đồ",
      "Truy cập cộng đồng 100k+ thành viên",
    ],
  },
  {
    id: 2,
    name: "Độ Body Thần Tốc",
    target: "Cam kết thay đổi vóc dáng sau 60 ngày",
    price: "Tối Ưu",
    features: [
      "Lộ trình AI cá nhân hóa 100%",
      "Thực đơn thuần Việt chi tiết từng bữa",
      "AI phân tích tư thế tập qua camera",
      "Cập nhật bài tập tự động mỗi tuần",
      "Ưu tiên hỗ trợ từ chuyên gia dinh dưỡng",
    ],
  },
  {
    id: 3,
    name: "Kèm 1:1 Chuyên Sâu",
    target: "Dành cho người cần PT giám sát trực tiếp",
    price: "Cao Cấp",
    features: [
      "Mọi quyền lợi của gói Tối Ưu",
      "Book lịch tập qua Video Call với PT",
      "Sửa tư thế và đếm nhịp Real-time",
      "Chuyên gia thiết kế lại thực đơn 24/7",
    ],
  },
];

export default function WorkoutPackagesSection() {
  const [activePackageId, setActivePackageId] = useState(2);

  return (
    <section className="relative w-full overflow-hidden py-24 bg-zinc-950">
      {/* Background glow for the whole section */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#d68c45]/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          
          <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-5xl drop-shadow-md">
            LỘ TRÌNH DÀNH RIÊNG <span className="text-[#d68c45]">CHO BẠN</span>
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 md:text-base leading-relaxed">
            Bạn muốn tự tập luyện theo nhịp độ riêng hay cần sự giám sát
            khắt khe từ PT, FITUP đều có giải pháp hoàn hảo giúp bạn rút ngắn
            thời gian đạt được mục tiêu.
          </p>
        </motion.div>

        {/* Pricing/Packages Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10 items-center">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              onClick={() => setActivePackageId(pkg.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePackageId(pkg.id);
                }
              }}
              className={`relative flex cursor-pointer flex-col rounded-[2rem] border bg-zinc-900/50 p-8 backdrop-blur-md transition-all duration-150 ${
                activePackageId === pkg.id
                  ? "scale-100 border-[#d68c45] shadow-2xl shadow-[#d68c45]/20 md:scale-105 z-20 py-12 bg-zinc-900/90"
                  : "border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50 z-10"
              }`}
            >
              {/* Ribbon for Popular Package */}
              {activePackageId === pkg.id && (
                <div className="absolute top-0 right-0 h-32 w-32 overflow-hidden rounded-tr-[2rem]">
                  <div className="absolute top-6 right-[-35px] w-[150px] rotate-45 bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] py-1.5 text-center text-[10px] font-bold tracking-wider text-white shadow-md uppercase">
                    Đang chọn
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="mb-8 flex flex-col items-center text-center border-b border-zinc-800/50 pb-8">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {pkg.name}
                </h3>
                <p className="h-10 text-sm text-zinc-400">{pkg.target}</p>
                <div className="mt-6 flex items-end justify-center gap-1">
                  <span
                    className={`text-3xl font-black ${activePackageId === pkg.id ? "text-[#d68c45]" : "text-white"}`}
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
                        className={`mt-0.5 h-5 w-5 shrink-0 ${activePackageId === pkg.id ? "text-[#d68c45]" : "text-zinc-500"}`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${activePackageId === pkg.id ? "text-zinc-200 font-medium" : "text-zinc-400"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


