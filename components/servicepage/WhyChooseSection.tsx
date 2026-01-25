import Image from "next/image";

const features = [
    {
        title: "Fast Processing",
        description:
            "Quick approval and disbursement processes with most applications processed within 48 hours.",
        iconName: "fast.svg",
    },
    {
        title: "Secure & Reliable",
        description:
            "Bank-level security and regulatory compliance ensuring your financial information is protected.",
        iconName: "secure.svg",
    },
    {
        title: "Expert Support",
        description:
            "Dedicated relationship managers and financial advisors to guide you through every step.",
        iconName: "support.svg",
    },
];

export default function WhyChooseSection() {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16 md:mb-20">
                    <h2 className="font-inter font-bold text-[36px] md:text-[56px] leading-[44px] md:leading-[64px] text-[#001F3F] mb-6">
                        Why Choose Accord Digitals
                    </h2>
                    <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-gray-600 max-w-3xl">
                        Our comprehensive approach to financial services ensures you get the
                        right solution for your specific needs, backed by expertise and
                        commitment to excellence.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px] w-full max-w-[1600px] mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white  pt-[34px] pr-[20px] pb-[34px] pl-[20px] gap-4 w-full max-w-[380px] h-full min-h-[262px]  duration-300 "
                        >
                            <div className="relative w-[50px] h-[50px] flex-shrink-0">
                                <Image
                                    src={`/svgs/services/${feature.iconName}`}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex flex-col gap-4 flex-grow">
                                <h3 className="font-inter font-bold text-[20px] md:text-[24px] leading-[32px] text-[#001F3F]">
                                    {feature.title}
                                </h3>

                                <p className="font-inter font-normal text-[16px] leading-[24px] text-gray-600">
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
