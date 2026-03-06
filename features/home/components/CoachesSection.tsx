"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CalendarCheck, MessageCircle, Star } from "lucide-react";

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
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="container mx-auto flex max-w-7xl flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative z-10 mb-12 flex flex-col items-center text-center md:mb-16"
        >
          <h2 className="mb-5 text-3xl font-black text-white drop-shadow-md md:mb-6 md:text-5xl lg:text-6xl">
            24/7{" "}
            <span className="bg-gradient-to-r from-[#d68c45] to-red-500 bg-clip-text text-transparent">
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

        <div className="relative mt-12 hidden h-[600px] w-full items-center justify-center md:flex">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d68c45]/30 blur-[120px]" />

          {COACHES.map((coach, index) => {
            const isCenter = coach.position === "center";
            const isLeft = coach.position === "left";

            const baseCardClasses =
              "absolute overflow-hidden rounded-[2rem] transition-transform duration-150 ease-out";

            const positionClasses = isCenter
              ? "z-20 h-[500px] w-[340px]"
              : isLeft
                ? "z-10 h-[400px] w-[280px] -translate-x-48 -rotate-6"
                : "z-10 h-[400px] w-[280px] translate-x-48 rotate-6";

            return (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
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
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover transition-transform duration-150 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                  <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-full bg-[#d68c45]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d68c45] backdrop-blur-md">
                        {isCenter ? "AI BOT" : "EXPERT PT"}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-semibold">{coach.rating}</span>
                      </div>
                    </div>

                    <h3 className="mb-1 text-2xl font-bold text-white drop-shadow-md">
                      {coach.name}
                    </h3>
                    <p className="mb-4 text-sm text-zinc-300 drop-shadow-sm">
                      {coach.role}
                    </p>

                    <div
                      className={`overflow-hidden transition-all duration-150 ${
                        isCenter
                          ? "max-h-12 opacity-100"
                          : "max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => router.push("/download-app")}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#d68c45_0%,#96310b_80%,#6b121c_100%)] py-3 text-sm font-semibold text-white shadow-lg transition-all duration-150 hover:brightness-110"
                      >
                        {isCenter ? (
                          <MessageCircle className="h-4 w-4" />
                        ) : (
                          <CalendarCheck className="h-4 w-4" />
                        )}
                        Start now
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
