"use client";

import { ArrowRight } from "lucide-react";
import vector2 from "@/components/assets/vector-2.svg";
import vector3 from "@/components/assets/vector-3.svg";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-x-hidden pb-0 pt-6">
      <div className="relative mx-auto h-[600px] w-full max-w-[1440px]">
        <img
          className="absolute top-[40px] left-[calc(50.00%_-_651px)] w-[1302px] h-[540px]"
          alt="Vector"
          src={vector2.src}
        />

        <div className="absolute top-[440px] left-[1047px] w-[330px] h-[140px]">
          <img
            className="absolute top-0 left-0 w-[324px] h-[140px]"
            alt="Vector"
            src={vector3.src}
          />

          <h3 className="absolute top-3.5 left-[119px] [font-family:'Montserrat',Helvetica] font-semibold text-[#ffffff] text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Know More
          </h3>

          <p className="absolute top-[43px] left-[141px] [font-family:'Montserrat',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-[normal]">
            Our Training
          </p>

          <p className="top-[63px] left-[141px] w-[166px] [font-family:'Montserrat',Helvetica] font-light text-[11px] absolute text-[#ffffff] tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit ameta, consectetur adipiscing elitaa. Sed do
            eiusmod tempor incit ut labore et dolore magna aliqua, ut enim ad
            minim.
          </p>

          <div className="absolute top-3.5 left-[275px] flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <ArrowRight className="h-4 w-4 text-white" />
          </div>

          <div className="top-[76px] left-4 bg-[#d9d9d9] absolute w-[46px] h-[46px] rounded-[22.8px]" />

          <div className="top-[78px] left-[39px] bg-[#d0d0d0] absolute w-[46px] h-[46px] rounded-[22.8px]" />

          <div className="top-[76px] left-[62px] bg-[#c2c2c2] absolute w-[46px] h-[46px] rounded-[22.8px]" />

          <div className="top-20 left-[84px] bg-[#c5c5c5] absolute w-[46px] h-[46px] rounded-[22.8px]" />
        </div>
      </div>
    </section>
  );
}
