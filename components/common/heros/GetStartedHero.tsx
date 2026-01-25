"use client";

import { MapPin, Clock } from "lucide-react";

export default function GetStartedHero() {
    return (
        <section className="relative w-full h-[540px] overflow-hidden flex flex-col items-center justify-center text-center px-4">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero/getStartedHero.jpg')",
                }}
            />

            <div className="absolute inset-0 bg-[#000000B2] z-10" />

            <div className="relative z-20 max-w-[912px] mx-auto flex flex-col items-center text-white h-full justify-center">
                <h1 className="font-bold text-[30px] md:text-[64px] leading-[1.2] md:leading-[72px] tracking-normal font-inter mb-6">
                    Get in Touch with Our
                    <br className="hidden md:block" /> Financial Experts
                </h1>

                <p className="text-base md:text-[18px] leading-[26px] font-normal font-inter text-gray-200 mb-10">
                    Connect with our team through multiple channels. We're here to support
                    your financial journey with personalized consultations and expert
                    guidance.
                </p>

                <div className="flex flex-col gap-4 mt-6 text-sm md:text-base text-gray-200 w-full max-w-[95%] mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
                        <MapPin className="w-5 h-5 flex-shrink-0 mb-1 sm:mb-0" />
                        <span>Lagos Headquarters - Victoria Island Business District</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
                        <Clock className="w-5 h-5 flex-shrink-0 mb-1 sm:mb-0" />
                        <span className="flex flex-col sm:block">
                            <span>Mon-Fri: 8:00 AM - 6:00 PM WAT</span>
                            <span className="hidden sm:inline mx-2">|</span>
                            <span>Sat: 9:00 AM - 2:00 PM</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
