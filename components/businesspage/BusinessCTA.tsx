"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BusinessCTA() {
    return (
        <section className="w-full py-16 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <h2 className="font-bold text-[30px] leading-[1.2] md:text-[48px] text-[#001F3F] mb-4">
                    Let's Grow Your Business Together
                </h2>
                <p className="font-normal text-base md:text-lg text-[#636372] mb-10 max-w-[600px]">
                    Schedule a free consultation to discuss how we can support your
                    business goals
                </p>

                <Link href="/get-started">
                    <button
                        className="flex items-center justify-center text-white font-semibold cursor-pointer hover:opacity-90 transition-opacity"
                        style={{
                            width: "256px",
                            height: "48px",
                            padding: "16px 24px",
                            gap: "10px",
                            borderRadius: "12px",
                            backgroundColor: "#001F3F",
                        }}
                    >
                        Schedule Consultation
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </section>
    );
}
