"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GreetingSection() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden py-20">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dratbz8bh/image/upload/v1771924295/chay-bo-3-170262930243577429218_kilixq.jpg"
          alt="Đội ngũ FITUP"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 text-5xl font-black tracking-widest text-white md:text-7xl drop-shadow-2xl"
        >
          XIN CHÀO!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          Chúng tôi là <span className="font-bold text-[#d68c45]">FITUP</span>.
          Hơn cả một ứng dụng công nghệ, chúng tôi là người bạn đồng hành 24/7
          trên hành trình lột xác, mang trải nghiệm kết nối Personal Trainer
          liền mạch đến mọi nơi bạn đến.
        </motion.p>
      </div>
    </section>
  );
}



