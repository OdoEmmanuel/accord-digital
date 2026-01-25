"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
    {
        icon: "/svgs/secure.svg",
        title: "Secure & Transparent",
        description: "Bank-grade security with complete transparency in all transactions",
        bg: "#D8F4F2",
        textColor: "#009688",
    },
    {
        icon: "/svgs/fast.svg",
        title: "Fast & Convenient",
        description: "Quick approvals and seamless digital experience on any device",
        bg: "#FFE1F7",
        textColor: "#B6288E",
    },
    {
        icon: "/svgs/trusted.svg",
        title: "Trusted & Reliable",
        description: "Backed by 20+ years of banking expertise and proven partnerships",
        bg: "#D7E7FF",
        textColor: "#030940",
    },
];

export default function FeaturesSection() {
    return (
        <section className="w-full md:py-20 py-16 bg-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-[1012px] text-center mb-16">
                    <h2 className="font-inter font-bold text-[30px] leading-[48px] md:text-[56px] md:leading-[64px] text-[#111827] mb-6">
                        Bridging the Gap Between Traditional Banking and Modern <span className="relative z-10 inline-block">
                            <span className="relative z-10 inline-block text-[#b2dfdb]">Financial Needs</span>
                        </span>
                    </h2>
                    <p className="font-normal text-base md:text-[18px] md:leading-[26px] text-[#636372] max-w-[1000px] mx-auto">
                        Accord Digitals leverages advanced analytics, digital platforms, and strategic partnerships to provide seamless credit access, reduce default risk, and enhance user experience across Africa.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="flex flex-wrap justify-between gap-4 w-full px-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: feature.bg }}
                            className="w-full sm:w-[380px] h-auto min-h-[238px] rounded-[10px] pt-[34px] px-[20px] pb-[34px] flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 shadow-sm"
                        >
                            <div className="mb-6 flex items-center justify-center bg-white rounded-full shadow-sm">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={52}
                                    height={52}
                                    className="w-[52px] h-[52px]"
                                />
                            </div>

                            <h3
                                className="font-inter font-semibold text-lg md:text-[24px] mb-3"
                                style={{ color: feature.textColor }}
                            >
                                {feature.title}
                            </h3>

                            <p
                                className="font-normal text-sm leading-[24px] text-[#334C65] md:text-base"

                            >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16">
                    <Button
                        variant="outline"
                        className="h-12 px-8 border border-[#111827] text-[#111827] hover:bg-gray-50 text-base font-semibold rounded-lg cursor-pointer"
                    >
                        Learn More About Us
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
