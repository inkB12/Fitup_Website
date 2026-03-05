"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Music2,
  Activity,
  Flame,    
  Zap,
} from "lucide-react";

// Dữ liệu giả lập cho 3 slide (Bạn có thể thay link bằng URL Cloudinary của bạn sau này)
const SLIDES = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    title: "Vượt Qua Giới Hạn Bản Thân",
    description:
      "Trải nghiệm lộ trình tập luyện được cá nhân hóa 100% bởi AI, giúp bạn đạt mục tiêu nhanh chóng và an toàn nhất.",
    icon: <Flame className="h-6 w-6 text-orange-500" />,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    title: "Kết Nối PT Chuyên Nghiệp 24/7",
    description:
      "Không còn tập luyện đơn độc. Đội ngũ huấn luyện viên của chúng tôi luôn sẵn sàng đồng hành cùng bạn mọi lúc, mọi nơi.",
    icon: <Activity className="h-6 w-6 text-blue-500" />,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    title: "Dinh Dưỡng Chuẩn Khoa Học",
    description:
      "Thực đơn đa dạng, dễ chuẩn bị dựa trên ẩm thực Việt, tối ưu hóa quá trình phục hồi và phát triển cơ bắp.",
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000); // Chuyển slide mỗi 5 giây
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full pb-16 pt-8">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Main Banner Carousel */}
        <div className="relative min-h-[65vh] w-full overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Ảnh nền */}
              <Image
                src={SLIDES[currentSlide].image}
                alt={SLIDES[currentSlide].title}
                fill
                className="object-cover"
                priority
              />

              {/* Lớp Overlay Gradient màu chìm để làm nổi bật Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent" />

              {/* Nội dung Text của Slide */}
              <div className="absolute bottom-12 left-8 md:bottom-20 md:left-16 max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-4 flex items-center gap-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    {SLIDES[currentSlide].icon}
                  </div>
                  <h2 className="text-2xl font-bold tracking-wide text-white md:text-4xl drop-shadow-lg">
                    {SLIDES[currentSlide].title}
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-sm leading-relaxed text-zinc-300 drop-shadow-md md:text-base"
                >
                  {SLIDES[currentSlide].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators (Dấu chấm chuyển slide) */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 z-20">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Floating "Know More" Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              type: "spring",
              bounce: 0.4,
            }}
            className="absolute -bottom-8 right-6 z-30 flex w-[300px] flex-col justify-between rounded-3xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 shadow-2xl shadow-orange-500/30 md:right-16 md:w-[360px]"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Know More</h3>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -45 }}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform"
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </motion.div>
            </div>

            <h4 className="mb-2 text-sm font-semibold text-white">
              Our Training
            </h4>
            <p className="mb-6 text-xs leading-relaxed text-white/90 line-clamp-3 drop-shadow-sm">
              Ứng dụng công nghệ AI tiên tiến kết hợp cùng kiến thức chuyên môn
              từ các chuyên gia, mang đến trải nghiệm tập luyện mượt mà và hiệu
              quả nhất.
            </p>

            {/* Overlapping Avatars */}
            <div className="flex -space-x-4">
              <div className="h-10 w-10 overflow-hidden rounded-full border-[3px] border-orange-600 bg-zinc-300">
                <Image
                  src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
                  alt="User 1"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="h-10 w-10 overflow-hidden rounded-full border-[3px] border-orange-600 bg-zinc-400">
                <Image
                  src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
                  alt="User 2"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-orange-600 bg-zinc-900 text-xs font-bold text-white">
                99+
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text & Socials */}
        <div className="mt-20 flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
          {/* Social Links */}
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <span className="font-semibold text-white">Follow *</span>
            <div className="flex items-center gap-4">
              {[Facebook, Music2, Youtube, Instagram].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -3, color: "#f97316" }} // #f97316 is tailwind orange-500
                  className="text-zinc-400 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Slogan */}
          <h2 className="text-center text-xl font-light tracking-wide text-zinc-300 md:text-3xl">
            Transform Your Body,{" "}
            <span className="font-semibold text-orange-500">
              Transform Your Life.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
