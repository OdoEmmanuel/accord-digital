"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const heroImages = [
  "/hero/heroBg.jpg",
  "/hero/heroBg1.jpg",
  "/hero/heroBg2.jpg",
  "/hero/heroBg3.jpg",
  "/hero/heroBg4.jpg",
  "/hero/heroBg5.jpg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[calc(100vh-64px)] lg:h-[calc(100vh-100px)] w-full overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >

          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-top"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#000000B2] z-10" />

      <div className="max-w-[912px] mx-auto relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1
          className="font-bold text-[30px] leading-[48px] md:text-[64px] md:leading-[72px] tracking-normal font-inter mb-6"
        >
          Digital <span className="text-[#009688]">Financial</span> Solutions for Modern Businesses
        </h1>

        <p className="text-base leading-[26px] font-normal font-inter text-gray-200 mb-10">
          Transform your financial operations with our comprehensive suite of digital banking, investment management, and fintech solutions designed for today's dynamic market.
        </p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 w-full px-2">
          <Link href="/get-started">
            <Button className="h-12 sm:h-14 px-3 sm:px-4 bg-[#009688] hover:bg-[#009688]/90 text-white text-sm sm:text-base font-semibold rounded-[12px] cursor-pointer">
              Start Your Journey
              <ArrowRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>

          <Link href="/services">
            <Button
              variant="outline"
              className="h-12 sm:h-14 px-3 sm:px-4 border border-[#009688] text-[#009688] hover:bg-[#009688]/10 hover:text-[#009688] bg-transparent text-sm sm:text-base font-semibold rounded-[12px] cursor-pointer"
            >
              Explore Services
              <ArrowRight className="ml-1 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
