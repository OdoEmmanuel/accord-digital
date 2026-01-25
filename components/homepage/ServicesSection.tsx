"use client";

import Image from "next/image";

const services = [
    {
        icon: "/svgs/public.svg",
        title: "Public Sector Lending",
        description:
            "Tailored financial solutions for civil servants with payroll integration.",
        image: "/finance/finance.jpg",
    },
    {
        icon: "/svgs/wallet.svg",
        title: "Digital Lending",
        description:
            "Fast, secure, and transparent digital loans at your fingertips.",
        image: "/finance/finance1.jpg",
    },
    {
        icon: "/svgs/sme.svg",
        title: "SME Financing",
        description:
            "Tailored financial solutions for civil servants with payroll integration.",
        image: "/finance/finance2.jpg",
    },
    {
        icon: "/svgs/asset.svg",
        title: "Asset Finance",
        description:
            "Acquire vehicles, equipment, and property with ease.",
        image: "/finance/finance3.jpg",
    },
    {
        icon: "/svgs/invest.svg",
        title: "Investment Management",
        description:
            "Professional portfolio management with AI-driven insights, risk assessment, and personalized investment strategies for optimal returns.",
        image: "/finance/finance4.jpg",
    },
    {
        icon: "/svgs/advise.svg",
        title: "Financial Advisory",
        description:
            "Expert guidance for your financial journey and business setup.",
        image: "/finance/finance5.jpg",
    },
];

export default function ServicesSection() {
    return (
        <section className="w-full py-16 md:py-20 bg-[#F8FCFF]">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-[1012px] mx-auto text-center mb-16">
                    <h2 className="font-inter font-bold text-[30px] leading-[48px] md:text-[56px] md:leading-[64px] text-[#111827] mb-6">
                        Our Financial Services
                    </h2>
                    <p className="font-normal text-base md:text-[18px] md:leading-[26px] text-[#636372] max-w-[800px] mx-auto">
                        We offer a comprehensive suite of financial services designed to
                        meet the diverse needs of individuals, businesses, and institutions
                        across Africa.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="flex flex-col gap-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Card */}
                            <div className="w-full lg:w-[480px] min-h-[322px] bg-white rounded-[10px] pt-[34px] pr-[20px] pb-[34px] pl-[20px] shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                <div className="mb-6">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={52}
                                        height={52}
                                        className="w-[52px] h-[52px]"
                                    />
                                </div>
                                <h3 className="font-inter font-bold text-[24px] text-[#111827] mb-4">
                                    {service.title}
                                </h3>
                                <p className="font-normal text-[16px] leading-[24px] text-[#636372] flex-grow mb-6">
                                    {service.description}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    <button className="px-4 py-2 border border-[#009688] text-[#059669] rounded-md font-medium text-sm cursor-pointer transition-colors flex items-center gap-2">
                                        Read More
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 12L10 8L6 4"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button className="px-4 py-2 bg-[#009688] text-white rounded-md font-medium text-sm cursor-pointer hover:bg-[#009688]/90 transition-colors flex items-center gap-2">
                                        Download Here
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 12L10 8L6 4"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="w-full lg:w-[480px] h-[300px] lg:h-[412px] relative rounded-[24px] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
