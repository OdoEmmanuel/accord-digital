import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

export default function MissionVisionSection() {
    return (
        <section className="w-full bg-[#f2f7fb] py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-inter font-bold text-[30px] md:text-[56px] leading-[44px] md:leading-[64px] text-[#001F3F] mb-3">
                        Our Mission & Vision
                    </h2>
                    <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#334C65] max-w-[1000px]">
                        Driving financial inclusion and empowerment across Africa through
                        innovative digital solutions.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-between gap-6 w-full max-w-[1312px] mx-auto text-left">
                    <div className="bg-white rounded-[10px] w-full max-w-[644px] min-h-[402px] p-6 md:p-10 lg:pt-10 lg:pr-[62px] lg:pb-10 lg:pl-[62px] flex flex-col gap-[12px] shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 relative mb-2">
                            <Image
                                src="/svgs/services/finance.svg"
                                alt="Mission Icon"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="font-inter font-semibold text-[16px] md:text-[20px] text-[#001F3F]">
                            Our Mission
                        </h3>

                        <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[26px] text-[#334C65] mb-2">
                            To empower communities and businesses across Africa by providing
                            accessible, transparent, and innovative digital financial services
                            that bridge traditional banking gaps and foster economic growth.
                        </p>

                        <div className="space-y-2">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#009688] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-gray-700">Democratize access to financial services</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#009688] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-gray-700">Promote transparency in all dealings</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#009688] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-gray-700">Foster economic empowerment</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[10px] w-full max-w-[644px] min-h-[402px] p-6 md:p-10 lg:pt-10 lg:pr-[62px] lg:pb-10 lg:pl-[62px] flex flex-col gap-[14px] shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 relative mb-2">
                            <Image
                                src="/svgs/services/invest.svg"
                                alt="Vision Icon"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="font-inter font-semibold text-[16px] md:text-[20px] text-[#001F3F]">
                            Our Vision
                        </h3>

                        <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[26px] text-[#334C65] mb-2">
                            To become Africa's leading digital financial institution,
                            recognized for innovation, trust, and meaningful impact on
                            financial inclusion across the continent.
                        </p>

                        <div className="space-y-2">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-[#B4D522] fill-[#B4D522] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-gray-700">Continental market leadership</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-[#B4D522] fill-[#B4D522] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-gray-700">Innovation-driven solutions</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-[#B4D522] fill-[#B4D522] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-gray-700">Measurable social impact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
