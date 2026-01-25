"use client";

import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      className="relative w-full h-[540px] overflow-hidden flex flex-col items-center justify-center text-center px-4"
      style={{
        background: "linear-gradient(101.44deg, #001F3F 22.27%, #317CAA 100.62%)",
      }}
    >
      <div className="relative z-20 max-w-[912px] mx-auto flex flex-col items-center text-white">
        <h1 className="font-bold text-[30px] leading-[48px] md:text-[64px] md:leading-[72px] tracking-normal font-inter mb-6">
          Transforming Financial Services Across Africa
        </h1>

        <p className="text-base md:text-lg leading-[26px] font-normal font-inter text-gray-200 mb-10 max-w-[912px]">
          We're building the future of digital finance in Africa, empowering
          communities and businesses with innovative financial solutions that
          bridge the gap between traditional banking and modern digital needs.
        </p>

        <div className="flex flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#009688] hover:bg-[#009688]/80 text-white px-4 sm:px-8 py-3 rounded-[8px] font-medium font-inter text-sm sm:text-base transition-colors cursor-pointer whitespace-nowrap">
            Join Our Journey <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-transparent border border-[#009688] text-[#009688] px-4 sm:px-8 py-3 rounded-[8px] font-medium font-inter text-sm sm:text-base transition-colors cursor-pointer whitespace-nowrap">
            Learn More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
