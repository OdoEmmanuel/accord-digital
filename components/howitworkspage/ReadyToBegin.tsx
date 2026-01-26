"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ReadyToBegin() {
    return (
        <section className="w-full py-16 md:py-20 bg-[#f2f7fb]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative w-full max-w-[1328px] mx-auto min-h-[471px] rounded-[12px] py-16 md:py-20 px-8 overflow-hidden flex items-center justify-center"
                    style={{
                        background:
                            "linear-gradient(96.98deg, #001F3F 7.17%, #317CAA 102.42%)",
                    }}
                >
                    {/* Decorative curved dotted lines */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Top right curve */}
                        <svg
                            className="absolute top-0 right-0 w-[400px] h-[300px] opacity-20"
                            viewBox="0 0 400 300"
                            fill="none"
                        >
                            <path
                                d="M400 0 Q200 150 400 300"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                            />
                        </svg>
                        {/* Bottom left curve */}
                        <svg
                            className="absolute bottom-0 left-0 w-[400px] h-[300px] opacity-20"
                            viewBox="0 0 400 300"
                            fill="none"
                        >
                            <path
                                d="M0 300 Q200 150 0 0"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                            />
                        </svg>
                        {/* More decorative curves similar to image */}
                        <svg className="absolute top-0 left-1/4 w-full h-full opacity-10 pointer-events-none">
                            <path d="M0 0 Q 300 200 600 0" stroke="white" strokeWidth="2" strokeDasharray="8 8" fill="none" />
                        </svg>
                        <svg className="absolute bottom-0 right-1/4 w-full h-full opacity-10 pointer-events-none">
                            <path d="M0 471 Q 300 271 600 471" stroke="white" strokeWidth="2" strokeDasharray="8 8" fill="none" />
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-[800px] mx-auto">
                        <h2 className="font-bold text-[28px] leading-[36px] md:text-[42px] md:leading-[50px] text-white mb-6">
                            Ready to Begin Your Journey?
                        </h2>
                        <p className="font-semibold text-base md:text-[20px] md:leading-[28px] text-white/90 mb-10">
                            Start your application today and experience the fastest, most
                            transparent lending process in Africa
                        </p>

                        {/* Button */}
                        <div className="flex items-center justify-center">
                            <Link href="/get-started">
                                <button className="h-12 px-8 bg-white text-[#009688] border border-white rounded-[8px] font-semibold text-base cursor-pointer hover:bg-white/90 transition-colors flex items-center justify-center gap-2.5">
                                    Get Started Now
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
