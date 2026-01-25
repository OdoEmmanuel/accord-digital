"use client";

import { TrendingUp } from "lucide-react";

const stats = [
    {
        label: "Assets Under Management",
        value: "N2.5B+",
        trend: "+12% growth YoY",
        isTrend: true,
    },
    {
        label: "Customers Served",
        value: "35M+",
        trend: "+32% increase",
        isTrend: true,
    },
    {
        label: "Digital Transaction",
        value: "1M+",
        trend: "Monthly Volume",
        isTrend: true,
    },
    {
        label: "Years of Experience",
        value: "20+",
        trend: "Industry Expertise",
        isTrend: true,
    },
    {
        label: "Active Clients",
        value: "15,000+",
        trend: "+25% increase",
        isTrend: true,
    },
];

export default function StatsSection() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-[45px]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[230px] h-[138px] p-6 rounded-[8px] border border-border flex flex-col justify-between bg-white hover:shadow-md transition-shadow"
                        >
                            <div>
                                <p className="text-[14px] font-normal text-[#636372]">{stat.label}</p>
                                <h3 className="text-[20px] font-bold text-[#111827] mt-2">
                                    {stat.value}
                                </h3>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <TrendingUp className="w-4 h-4 text-[#009688]" />
                                <span className="text-xs font-medium text-[#009688]">
                                    {stat.trend}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
