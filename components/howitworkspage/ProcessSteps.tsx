"use client";

import {
    UserPlus,
    FileText,
    Search,
    CheckCircle2,
    Smartphone,
    Clock,
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Create Your Account",
        description:
            "Sign up on our digital platform in minutes. Provide basic information and verify your identity securely.",
        icon: UserPlus,
    },
    {
        id: 2,
        title: "Submit Your Application",
        description:
            "Choose your desired service and submit your application with minimal documentation. Our digital forms make it quick and easy.",
        icon: FileText,
    },
    {
        id: 3,
        title: "Quick Assessment",
        description:
            "Our advanced algorithms and experienced team assess your application swiftly, typically within 24-48 hours.",
        icon: Search,
    },
    {
        id: 4,
        title: "Get Approved",
        description:
            "Receive instant notification of approval. Review terms, sign digitally, and proceed with confidence.",
        icon: CheckCircle2,
    },
    {
        id: 5,
        title: "Funds Disbursed",
        description:
            "Approved funds are transferred directly to your account. Start using your funds immediately for your needs.",
        icon: Smartphone,
    },
    {
        id: 6,
        title: "Flexible Repayment",
        description:
            "Enjoy flexible repayment options with payroll integration or automated deductions. Track everything on your dashboard.",
        icon: Clock,
    },
];

export default function ProcessSteps() {
    return (
        <div className="w-full h-full p-4 md:py-16 bg-gray-50/50">
            <div className="w-full max-w-[1328px] mx-auto transition-all p-6 md:p-14">
                <div className="flex flex-col gap-8 md:gap-8 justify-center h-full">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-[#C6D6E6] text-[#001F3F] rounded flex items-center justify-center">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div className="max-w-[1124px]">
                                <h3 className="text-lg md:text-xl font-bold text-[#222222] mb-2">
                                    {step.id}. {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-[#666666] leading-relaxed font-normal">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
