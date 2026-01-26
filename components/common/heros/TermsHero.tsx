"use client";

import { FileText } from "lucide-react";

export default function TermsHero() {
  return (
    <section className="relative w-full h-[390px] overflow-hidden flex flex-col items-center justify-center text-center px-4">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero/termsHero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#000000B2] z-10" />

      <div className="relative z-20 max-w-[912px] mx-auto flex flex-col items-center text-white h-full justify-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "#FFFFFF33" }}
        >
          <FileText className="w-6 h-6 text-white" />
        </div>

        <h1 className="font-bold text-[30px] md:text-[48px] leading-[1.2] tracking-normal font-inter mb-4">
          Terms of Service
        </h1>

        <p className="text-base md:text-lg font-normal text-gray-300">
          Last updated: January 2025
        </p>
      </div>
    </section>
  );
}
