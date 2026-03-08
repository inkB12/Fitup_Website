"use client";

import { ArrowRight } from "lucide-react";
import vector2 from "@/components/assets/vector-2.svg";
import vector3 from "@/components/assets/vector-3.svg";

type KnowMoreCardProps = {
  className: string;
};

function KnowMoreCard({ className }: KnowMoreCardProps) {
  return (
    <div className={className}>
      <img
        className="absolute top-0 left-0 h-[140px] w-[324px]"
        alt="Vector"
        src={vector3.src}
      />

      <h3 className="absolute top-3.5 left-[119px] whitespace-nowrap text-center text-xl font-semibold tracking-[0] text-white [font-family:'Montserrat',Helvetica]">
        Know More
      </h3>

      <p className="absolute top-[43px] left-[141px] text-center text-sm font-medium tracking-[0] text-white [font-family:'Montserrat',Helvetica]">
        Our Training
      </p>

      <p className="absolute top-[63px] left-[141px] w-[166px] text-[11px] font-light tracking-[0] text-white [font-family:'Montserrat',Helvetica]">
        Personalized plans, smart progress tracking, and expert PT guidance to
        help you reach your fitness goals faster.
      </p>

      <div className="absolute top-3.5 left-[275px] flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <ArrowRight className="h-4 w-4 text-white" />
      </div>

      <div className="absolute top-[76px] left-4 h-[46px] w-[46px] rounded-[22.8px] bg-[#d9d9d9]" />
      <div className="absolute top-[78px] left-[39px] h-[46px] w-[46px] rounded-[22.8px] bg-[#d0d0d0]" />
      <div className="absolute top-[76px] left-[62px] h-[46px] w-[46px] rounded-[22.8px] bg-[#c2c2c2]" />
      <div className="absolute top-20 left-[84px] h-[46px] w-[46px] rounded-[22.8px] bg-[#c5c5c5]" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative hidden w-full overflow-x-hidden pb-0 pt-6 md:block">
      <div className="relative mx-auto h-[600px] w-full max-w-[1440px]">
        <img
          className="absolute top-[40px] left-[calc(50.00%_-_651px)] h-[540px] w-[1302px]"
          alt="Vector"
          src={vector2.src}
        />
        <KnowMoreCard className="absolute top-[440px] left-[1047px] h-[140px] w-[330px]" />
      </div>
    </section>
  );
}
