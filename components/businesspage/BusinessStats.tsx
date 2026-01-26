"use client";

const stats = [
    { value: "35M+", label: "Customers Served" },
    { value: "1000+", label: "SMEs Financed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" },
];

export default function BusinessStats() {
    return (
        <section
            className="w-full py-16 md:py-20"
            style={{
                background:
                    "linear-gradient(96.98deg, #001F3F 7.17%, #317CAA 102.42%)",
            }}
        >
            <div className="max-w-[1328px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center md:justify-between gap-12 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <span
                                className="font-inter font-bold text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] tracking-normal"
                                style={{ color: "#A2AA31" }}
                            >
                                {stat.value}
                            </span>
                            <span className="text-white text-base md:text-lg font-medium mt-2">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
