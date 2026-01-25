import Image from "next/image";

const values = [
    {
        title: "Trust & Transparency",
        description:
            "We believe in complete transparency in all financial dealings, building trust through clear communication, fair pricing, and honest business practices that put our clients' interests first.",
        iconName: "secure.svg",
    },
    {
        title: "Innovation",
        description:
            "We continuously innovate through technology and user-centered design, creating solutions that anticipate and meet the evolving needs of Africa's dynamic financial landscape.",
        iconName: "digital.svg",
    },
    {
        title: "Empowerment",
        description:
            "We focus on empowering underserved communities and businesses, providing them with the financial tools and knowledge needed to achieve their goals and build sustainable futures.",
        iconName: "consult.svg",
    },
    {
        title: "Partnership",
        description:
            "We approach every relationship as a partnership, working collaboratively with clients, stakeholders, and communities to create mutual value and lasting impact.",
        iconName: "support.svg",
    },
    {
        title: "Regulatory Compliance",
        description:
            "We maintain the highest standards of regulatory compliance and ethical practices, ensuring our operations meet and exceed industry requirements for security and governance.",
        iconName: "fast.svg",
    },
    {
        title: "Accessibility",
        description:
            "We design our services to be accessible to all, regardless of location, economic status, or technical expertise, ensuring financial inclusion reaches every corner of Africa.",
        iconName: "travel.svg",
    },
];

export default function ValuesSection() {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-inter font-bold text-[30px] md:text-[56px] leading-[44px] md:leading-[64px] text-[#001F3F] mb-6">
                        Our Values & Principles
                    </h2>
                    <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#334C65] max-w-[1000px]">
                        The core principles that guide every decision and interaction at Accord
                        Digitals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1312px] mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-[#D9E6F2] bg-opacity-30 rounded-[10px] p-6 lg:pt-[34px] lg:pr-[28px] lg:pb-[34px] lg:pl-[28px] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-full lg:max-w-[416px] min-h-[314px]"
                        >
                            <div className="w-12 h-12 relative mb-2">
                                <Image
                                    src={`/svgs/services/${value.iconName}`}
                                    alt={`${value.title} Icon`}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="font-inter font-bold text-[20px] md:text-[24px] text-[#001F3F]">
                                {value.title}
                            </h3>

                            <p className="font-inter font-normal text-[16px] leading-[26px] text-[#334C65]">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
