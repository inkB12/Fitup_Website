"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Component Đếm Số Động (Animated Counter)
function AnimatedCounter({
  to,
  duration = 2,
}: {
  to: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1,
        );
        // easeOutQuart function cho hiệu ứng chậm dần ở cuối
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * to));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, to, duration]);

  return <span ref={nodeRef}>{count.toLocaleString("vi-VN")}</span>;
}

export default function StatsSection() {
  const stats = [
    {
      number: 100000,
      suffix: "+",
      title: "Lộ Trình Hoàn Thành",
      description:
        "Hơn 100 ngàn bài tập đã được AI cá nhân hóa và tối ưu hiệu quả cho từng học viên.",
      delay: 0.1,
    },
    {
      number: 2500,
      suffix: "+",
      title: "Thực Đơn Thuần Việt",
      description:
        "Kho dữ liệu khổng lồ với các món ăn quen thuộc, giúp bạn kiểm soát calo mà không cần nhịn đói.",
      delay: 0.15,
    },
    {
      number: 150,
      suffix: "+",
      title: "Chuyên Gia & PT",
      description:
        "Đội ngũ huấn luyện viên giàu kinh nghiệm, đạt chứng chỉ quốc tế luôn sẵn sàng hỗ trợ bạn 24/7.",
      delay: 0.15,
    },
  ];

  return (
    <section className="relative w-full py-24">
      {/* Background Image from Cloudinary with Parallax-like fixed attachment */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg")',
        }}
      >
        {/* Dark/Orange Overlays for Glassmorphism effect */}
        <div className="absolute inset-0 bg-zinc-950/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          
          <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-4xl drop-shadow-md">
            NHỮNG CON SỐ <span className="text-[#d68c45]">BIẾT NÓI</span>
          </h2>
          <p className="max-w-2xl text-sm text-zinc-300 md:text-base">
            Sự nỗ lực và thành quả của cộng đồng người dùng chính là thước đo
            chính xác nhất cho chất lượng của hệ thống trí tuệ nhân tạo và đội
            ngũ chuyên gia tại FITUP.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: stat.delay }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-zinc-700/50 bg-black/40 p-10 text-center backdrop-blur-md transition-all hover:border-[#d68c45]/50 hover:bg-black/60 hover:shadow-2xl hover:shadow-[#d68c45]/20"
            >
              {/* Shine effect on hover */}
              <div className="absolute -left-full top-0 z-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-150 group-hover:left-[200%] group-hover:opacity-100" />

              <div className="relative z-10 mb-2 flex items-baseline gap-1">
                <span className="text-5xl font-black text-white md:text-6xl drop-shadow-lg">
                  <AnimatedCounter to={stat.number} duration={2.5} />
                </span>
                <span className="text-3xl font-bold text-[#d68c45]">
                  {stat.suffix}
                </span>
              </div>

              <h4 className="relative z-10 mb-3 text-lg font-bold text-zinc-100 uppercase tracking-wide">
                {stat.title}
              </h4>
              <p className="relative z-10 text-sm leading-relaxed text-zinc-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


