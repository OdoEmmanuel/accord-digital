"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="w-full py-16 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-[1328px] mx-auto min-h-[471px] bg-[#009688] rounded-[12px] py-16 md:py-20 px-8 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 pointer-events-none">
                        <svg
                            className="absolute top-0 right-0 w-[300px] h-[200px] opacity-30"
                            viewBox="0 0 300 200"
                            fill="none"
                        >
                            <path
                                d="M300 0 Q200 100 300 200"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                            />
                        </svg>
                        <svg
                            className="absolute bottom-0 left-0 w-[300px] h-[200px] opacity-30"
                            viewBox="0 0 300 200"
                            fill="none"
                        >
                            <path
                                d="M0 0 Q100 100 0 200"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 text-center max-w-[1065px] mx-auto">
                        <h2 className="font-inter font-bold text-[28px] leading-[36px] md:text-[42px] md:leading-[50px] text-white mb-6">
                            Ready to Transform Your Financial Future?
                        </h2>
                        <p className="font-inter font-semibold text-base md:text-[20px] md:leading-[28px] text-white/90 mb-10">
                            Join thousands of satisfied clients who trust Accord Digital for their financial needs. Get started today with a complimentary consultation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/get-started">
                                <button className="w-full sm:w-[256px] h-12 px-6 py-4 bg-white text-[#009688] border border-white rounded-[12px] font-semibold text-base cursor-pointer hover:bg-white/90 transition-colors flex items-center justify-center gap-2.5">
                                    Schedule Consultation
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <Link href="/get-started">
                                <button className="w-full sm:w-auto h-12 px-6 py-4 bg-transparent text-white border border-white rounded-[12px] font-semibold text-base cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-center gap-2.5">
                                    Contact Us
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
