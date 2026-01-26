"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const industries = [
    "Retail & E-commerce",
    "Transportation & Logistics",
    "Manufacturing",
    "Professional Services",
    "Hospitality & Tourism",
    "Technology & IT Services",
    "Agriculture & Food Processing",
    "Construction & Real Estate",
];

export default function IndustriesWeServe() {
    return (
        <section className="w-full py-16 md:py-20 bg-[#F8FCFF]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-[1012px] text-center mb-16">
                    <h2 className="font-bold text-[30px] leading-[1.2] md:text-[48px] text-[#001F3F] mb-4">
                        Industries We Serve
                    </h2>
                    <p className="font-normal text-base md:text-lg text-[#636372]">
                        Supporting businesses across diverse sectors of the African economy
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-[40px] w-full max-w-[1240px]">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="bg-white flex items-center justify-center text-center hover:shadow-md transition-shadow duration-300"
                            style={{
                                width: "260px",
                                height: "120px",
                                padding: "24px",
                                borderRadius: "12px",
                                border: "1px solid #E0E0EB",
                            }}
                        >
                            <h3 className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                {industry}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <Button
                        className="bg-[#001F3F] hover:bg-[#001F3F]/80 text-white font-semibold rounded-[12px] h-[48px] px-[24px] cursor-pointer"
                    >
                        View All Services
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
