import Image from "next/image";
import { Lightbulb, Rocket, TrendingUp } from "lucide-react";

export default function OurStorySection() {
    return (
        <section className="w-full bg-[#f2f7fb] py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-inter font-bold text-[30px] md:text-[56px] leading-[44px] md:leading-[64px] text-[#001F3F] mb-4">
                        Our Story
                    </h2>
                    <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#334C65] max-w-[1000px]">
                        From concept to reality, discover how Accord Digitals is reshaping
                        Africa's financial landscape.
                    </p>
                </div>

                <div className="bg-white rounded-[10px] w-full max-w-[1328px] mx-auto p-6 md:p-[62px_57px] flex flex-col xl:flex-row gap-10 items-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative w-full max-w-[550px] h-[300px] md:h-[450px] flex-shrink-0">
                        <div className="w-full h-full relative rounded-[25px] overflow-hidden">
                            <Image
                                src="/story.jpg"
                                alt="Our Story - The Genesis"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 flex-grow max-w-3xl">
                        <div>
                            <h3 className="font-inter font-bold text-[24px] md:text-[28px] text-[#1F1F2A] mb-4">
                                The Genesis
                            </h3>
                        </div>

                        <div className="space-y-6 font-inter font-normal text-[16px] md:text-[18px] leading-[26px] text-[#1F1F2A] text-justify">
                            <p>
                                Accord Digitals was born from a simple observation: millions of
                                Africans remain underserved by traditional financial
                                institutions, yet they possess the entrepreneurial spirit and
                                digital adoption rates necessary for financial inclusion.
                            </p>
                            <p>
                                Our founder, with decades of experience in Africa's financial
                                sector, recognized the opportunity to bridge this gap through
                                innovative digital solutions that combine the trust of traditional
                                banking with the accessibility of modern fintech.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#D4E8D4] flex items-center justify-center flex-shrink-0">
                                    <Lightbulb className="w-4 h-4 text-[#7CA87C]" />
                                </div>
                                <span className="font-inter font-bold text-[16px] text-[#001F3F]">
                                    2023: Concept Development
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#D4E8D4] flex items-center justify-center flex-shrink-0">
                                    <Rocket className="w-4 h-4 text-[#7CA87C]" />
                                </div>
                                <span className="font-inter font-bold text-[16px] text-[#001F3F]">
                                    2024: Platform Launch
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#D4E8D4] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-4 h-4 text-[#7CA87C]" />
                                </div>
                                <span className="font-inter font-bold text-[16px] text-[#001F3F]">
                                    2025: Continental Expansion
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
