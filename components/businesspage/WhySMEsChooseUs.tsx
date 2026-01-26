"use client";

import {
    Shield,
    Zap,
    BarChart3,
    Users,
    TrendingUp,
    Calculator,
} from "lucide-react";

const reasons = [
    {
        icon: Shield,
        title: "Local Expertise",
        description:
            "Deep understanding of African markets and business ecosystems",
    },
    {
        icon: Zap,
        title: "Fast Processing",
        description: "Quick decisions so you never miss business opportunities",
    },
    {
        icon: BarChart3,
        title: "Growth Partners",
        description: "We provide advisory support beyond just financing",
    },
    {
        icon: Users,
        title: "Relationship Banking",
        description: "Dedicated relationship managers who understand your business",
    },
    {
        icon: TrendingUp,
        title: "Fast Processing",
        description: "Repayment schedules aligned with your business cycles",
    },
    {
        icon: Calculator,
        title: "Industry Experience",
        description: "20+ years serving diverse African businesses",
    },
];

export default function WhySMEsChooseUs() {
    return (
        <section className="w-full py-16 md:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-[1012px] text-center mb-16">
                    <h2 className="font-bold text-[30px] leading-[1.2] md:text-[48px] text-[#001F3F] mb-4">
                        Why SMEs Choose Accord Digitals
                    </h2>
                    <p className="font-normal text-base md:text-lg text-[#636372]">
                        We understand the unique challenges African businesses face
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1240px]">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="rounded-[10px] flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
                            style={{
                                width: "380px",
                                height: "238px",
                                padding: "34px 20px",
                                gap: "16px",
                                backgroundColor: "#EEF9F8",
                                border: "1px solid #B2DFDB",
                            }}
                        >
                            <div
                                className="flex items-center justify-center rounded-full flex-shrink-0"
                                style={{
                                    backgroundColor: "#D1EFE9",
                                    width: "52px",
                                    height: "52px",
                                }}
                            >
                                <reason.icon className="w-[25px] h-[25px] text-[#009688]" />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <h3 className="font-bold text-[20px] leading-tight text-[#111827]">
                                    {reason.title}
                                </h3>

                                <p className="font-normal text-sm md:text-base text-[#636372] leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
