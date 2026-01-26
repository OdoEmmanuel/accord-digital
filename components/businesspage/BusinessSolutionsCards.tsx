"use client";

import { CheckCircle2, Calculator, TrendingUp, ShieldCheck } from "lucide-react";

const solutions = [
    {
        icon: Calculator,
        title: "SME Working Capital",
        description:
            "Keep your business running smoothly with flexible working capital loans tailored to your cash flow needs.",
        features: [
            "Quick approval process",
            "Flexible repayment terms",
            "Competitive interest rates",
            "No collateral for qualified businesses",
        ],
        iconBg: "linear-gradient(43.14deg, #009688 0%, #A2AA31 103.47%)",
    },
    {
        icon: TrendingUp,
        title: "Business Expansion",
        description:
            "Fuel your growth with expansion financing for new locations, equipment, or product lines",
        features: [
            "Long-term financing options",
            "Scalable loan amounts",
            "Business advisory support",
            "Growth-focused terms",
        ],
        iconBg: "linear-gradient(43.14deg, #009688 0%, #A2AA31 103.47%)",
    },
    {
        icon: ShieldCheck,
        title: "Payroll Financing",
        description:
            "Never miss a payroll with our short-term financing solutions designed for salary obligations.",
        features: [
            "Fast disbursement",
            "Aligned with payroll cycles",
            "Minimal documentation",
            "Repeat financing available",
        ],
        iconBg: "linear-gradient(43.14deg, #009688 0%, #A2AA31 103.47%)",
    },
];

export default function BusinessSolutionsCards() {
    return (
        <section className="w-full py-16 md:py-20 bg-[#F8FCFF]">
            <div className="max-w-[1400px] mx-auto px-4 flex justify-center">
                <div className="flex flex-wrap justify-center gap-8 w-full">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[10px] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                            style={{
                                width: "420px",
                                height: "426px",
                                padding: "34px 20px",
                                gap: "32px",
                            }}
                        >
                            <div
                                className="w-[52px] h-[52px] rounded-[8px] flex items-center justify-center text-white"
                                style={{ background: solution.iconBg }}
                            >
                                <solution.icon className="w-6 h-6" />
                            </div>

                            <div>
                                <h3 className="text-[20px] font-bold text-[#009688] mb-4">
                                    {solution.title}
                                </h3>
                                <p className="text-base text-[#636372] leading-relaxed mb-6">
                                    {solution.description}
                                </p>

                                <div className="flex flex-col gap-3">
                                    {solution.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 bg-[#107C10] rounded-full">
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-sm text-[#334C65]">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
