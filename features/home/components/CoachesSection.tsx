"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dumbbell,
  Activity,
  Star,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

const COACHES = [
  {
    id: 1,
    name: "Alex Nguyễn",
    role: "Strength & Conditioning",
    rating: "4.9",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    position: "left",
  },
  {
    id: 2,
    name: "AI FITUP Coach",
    role: "24/7 Smart Assistant",
    rating: "5.0",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    position: "center",
  },
  {
    id: 3,
    name: "Sarah Trần",
    role: "Yoga & Flexibility",
    rating: "4.8",
    image:
      "https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg",
    position: "right",
  },
];

export default function CoachesSection() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Floating Background Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-32 z-0 hidden opacity-20 md:block"
      >
        <Dumbbell className="h-24 w-24 text-orange-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute right-10 bottom-32 z-0 hidden opacity-20 md:block"
      >
        <Activity className="h-32 w-32 text-orange-500" />
      </motion.div>

      <div className="container mx-auto flex max-w-7xl flex-col items-center px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center relative z-10"
        >
          <div className="mb-4 flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500 backdrop-blur-md">
            <Activity className="h-4 w-4" />
            <span>Đồng Hành Cùng Chuyên Gia</span>
          </div>
          <h2 className="mb-6 text-4xl font-black text-white md:text-5xl lg:text-6xl drop-shadow-md">
            24/7{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              AI-Coach
            </span>{" "}
            & PT Connection
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
            Trợ lý AI phân tích tư thế trực tiếp và giải đáp thắc mắc 24/7. Đồng
            thời, dễ dàng đặt lịch tập 1:1 với đội ngũ Huấn luyện viên cá nhân
            (PT) chuyên nghiệp ngay trên ứng dụng.
          </p>
        </motion.div>

        {/* Coaches Cards Showcase */}
        <div className="relative mt-12 flex h-[450px] w-full items-center justify-center md:h-[600px]">
          {/* Intense Glow Background */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/40 blur-[120px] md:h-[500px] md:w-[700px] md:bg-orange-600/30" />

          {COACHES.map((coach, index) => {
            // Xác định class CSS dựa trên vị trí (Trái - Giữa - Phải)
            const isCenter = coach.position === "center";
            const isLeft = coach.position === "left";
            const isRight = coach.position === "right";

            const baseCardClasses =
              "absolute overflow-hidden rounded-[2rem] transition-transform duration-300 ease-out";

            // Xử lý vị trí tĩnh (sẽ kết hợp hover animation ở Framer Motion)
            const positionClasses = isCenter
              ? "z-20 h-[380px] w-[260px] md:h-[500px] md:w-[340px]"
              : isLeft
                ? "z-10 h-[320px] w-[220px] -translate-x-28 -rotate-6 md:h-[400px] md:w-[280px] md:-translate-x-48"
                : "z-10 h-[320px] w-[220px] translate-x-28 rotate-6 md:h-[400px] md:w-[280px] md:translate-x-48";

            return (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={
                  isCenter
                    ? {
                        scale: 1.05,
                        y: -10,
                        clipPath: "inset(0 round 2rem)",
                        transition: { duration: 0.18, ease: "easeOut" },
                      }
                    : {
                        scale: 1.05,
                        rotate: 0,
                        y: -20,
                        x: isLeft ? -150 : 150,
                        zIndex: 15,
                        clipPath: "inset(0 round 2rem)",
                        transition: { duration: 0.18, ease: "easeOut" },
                      }
                }
                className={`${baseCardClasses} ${positionClasses} group`}
                style={{ clipPath: "inset(0 round 2rem)" }}
              >
                <div className="relative flex h-full w-full flex-col border border-zinc-800/50 bg-zinc-900 shadow-2xl">
                  {/* Coach Image */}
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay để làm chìm ảnh, nổi chữ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-full bg-orange-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-400 backdrop-blur-md">
                        {isCenter ? "AI BOT" : "EXPERT PT"}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-semibold">
                          {coach.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-1 text-2xl font-bold text-white drop-shadow-md">
                      {coach.name}
                    </h3>
                    <p className="mb-4 text-sm text-zinc-300 drop-shadow-sm">
                      {coach.role}
                    </p>

                    {/* Hover Action Button */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isCenter ? "max-h-12 opacity-100" : "max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100"}`}
                    >
                      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600">
                        {isCenter ? (
                          <MessageCircle className="h-4 w-4" />
                        ) : (
                          <CalendarCheck className="h-4 w-4" />
                        )}
                        {isCenter ? "Chat Now" : "Book Session"}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
