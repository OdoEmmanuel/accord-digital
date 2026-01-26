"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const requirements = [
    "Valid government-issued ID (Driver's License, National ID, or International Passport).",
    "Proof of income or employment (for certain services).",
    "Bank account details for fund disbursement.",
    "Basic personal and contact information.",
    "Reference contacts (may be required).",
];

export default function WhatYouNeed() {
    return (
        <section className="w-full py-16 md:py-20 bg-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="max-w-[1012px] text-center mb-16">
                    <h2 className="font-bold text-[30px] leading-[1.2] md:text-[48px] text-[#001F3F] mb-4">
                        What You'll Need
                    </h2>
                    <p className="font-normal text-base md:text-lg text-[#636372]">
                        From concept to reality, discover how Accord Digitals is reshaping
                        Africa's financial landscape.
                    </p>
                </div>

                {/* Main Card */}
                <div
                    className="bg-white rounded-[12px] border border-gray-100 shadow-sm flex flex-col items-center"
                    style={{
                        width: "100%",
                        maxWidth: "1098px",
                        minHeight: "488px",
                        padding: "40px",
                        gap: "32px",
                    }}
                >
                    {/* Checklist */}
                    <div className="w-full flex flex-col gap-4">
                        {requirements.map((req, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-base md:text-lg text-[#1F1F2A]">
                                    {req}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Info Note Box */}
                    <div
                        className="w-full rounded-[8px] p-6 text-center md:text-left"
                        style={{ backgroundColor: "#F5F9FD" }}
                    >
                        <p className="text-[#334C65] text-sm md:text-base leading-relaxed">
                            <span className="font-semibold">Note:</span> Specific requirements
                            may vary depending on the service type and loan amount. Our team
                            will guide you through the exact documentation needed for your
                            application.
                        </p>
                    </div>

                    {/* Button */}
                    <Button
                        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-[8px] h-12 px-8 mt-4"
                    >
                        Start Application
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
