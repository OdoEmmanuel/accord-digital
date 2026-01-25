"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative h-[540px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero/serviceHero.jpg"
          alt="Services Hero Background"
          fill
          className="object-cover object-contain"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[#000000B2] z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-[912px] mx-auto">
        <h1 className="font-bold text-[40px] leading-[48px] md:text-[64px] md:leading-[72px] tracking-normal font-inter mb-6">
          Financial <span className="text-[#009688]">Services</span> for Every
          Need
        </h1>

        <p className="text-lg leading-[26px] font-normal font-inter text-gray-200">
          Comprehensive financial solutions tailored to support your goals, from
          personal loans to business financing and investment opportunities. Our
          expertise covers all aspects of modern financial services.
        </p>
      </div>
    </section>
  );
}
