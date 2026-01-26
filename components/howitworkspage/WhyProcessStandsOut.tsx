"use client";

import Image from "next/image";
import { Smartphone, Clock, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: Smartphone,
        title: "100% Digital Process",
        description: "Complete everything online from application to disbursement",
        iconColor: "#009688",
        bg: "#E0F2F1",
    },
    {
        icon: Clock,
        title: "Fast Approvals",
        description: "Get decisions within 24-48 hours, not weeks",
        iconColor: "#009688",
        bg: "#E0F2F1",
    },
    {
        icon: ShieldCheck,
        title: "Trusted & Reliable",
        description: "Backed by 20+ years of banking expertise and proven partnerships",
        iconColor: "#009688",
        bg: "#E0F2F1",
    },
];

export default function WhyProcessStandsOut() {
    return (
        <section className="w-full py-16 md:py-20 bg-[#f2f7fb]">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-[1012px] text-center mb-16">
                    <h2 className="font-bold text-[30px] leading-[1.2] md:text-[48px] text-[#001F3F] mb-4">
                        Why Our Process Stands Out
                    </h2>
                    <p className="font-normal text-base md:text-lg text-[#636372]">
                        We've reimagined the lending process to be fast, secure, and user-friendly
                    </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-between gap-8 w-full max-w-[1328px]">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[10px] flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                            style={{
                                width: "380px",
                                height: "238px",
                                padding: "34px 20px",
                                gap: "16px",
                            }}
                        >
                            <div
                                className="flex items-center justify-center rounded-full flex-shrink-0"
                                style={{
                                    backgroundColor: feature.bg,
                                    width: "52px",
                                    height: "52px"
                                }}
                            >
                                <feature.icon
                                    className="w-6 h-6"
                                    style={{ color: feature.iconColor }}
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <h3 className="font-bold text-[24px] leading-none text-[#111827]">
                                    {feature.title}
                                </h3>

                                <p className="font-normal text-base text-[#636372] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
