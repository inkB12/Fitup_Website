"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, TrendingUp, Utensils } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="relative w-full py-24 bg-zinc-950">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 md:flex-row md:items-center">
          {/* Mission Text - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-md">
              <Target className="h-4 w-4" />
              <span>Sứ mệnh của FITUP</span>
            </div>
            <h2 className="mb-8 text-3xl font-bold tracking-wider text-white md:text-5xl">
              SỨ MỆNH <span className="text-orange-500">CỦA CHÚNG TÔI</span>
            </h2>

            <div className="space-y-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              <p>
                Ứng dụng của chúng tôi là sự kết hợp hoàn hảo giữa{" "}
                <strong className="text-white">số liệu thống kê</strong>, các{" "}
                <strong className="text-white">bài tập đa chức năng</strong> và{" "}
                <strong className="text-white">thông tin khoa học</strong>.
              </p>
              <p>
                Chúng tôi không ngừng nghiên cứu các chương trình tập luyện tiến
                bộ, kết hợp cùng các chuyên gia hàng đầu để tạo ra những thử
                thách hấp dẫn, biến việc đổ mồ hôi trở thành niềm vui mỗi ngày.
              </p>
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                <Utensils className="h-8 w-8 shrink-0 text-orange-500" />
                <p className="text-sm">
                  Kinh nghiệm từ các chuyên gia dinh dưỡng được ứng dụng triệt
                  để nhằm xây dựng kế hoạch ăn uống đậm chất Việt. Giúp bạn{" "}
                  <strong className="text-orange-400">
                    vừa đạt kết quả, vừa tận hưởng niềm vui ăn uống
                  </strong>{" "}
                  mà không phải kiêng khem khắc khổ.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-1"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-[2rem] border border-zinc-800 shadow-2xl">
              <Image
                src=      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"

                alt="FITUP Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* Floating Widget */}
            <motion.div
              whileHover={{ y: -5 }}
              className="absolute -bottom-8 -left-8 rounded-2xl border border-zinc-700/50 bg-black/80 p-6 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                  <TrendingUp className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Cam Kết</h4>
                  <p className="text-sm text-zinc-400">100% Hiệu quả</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


