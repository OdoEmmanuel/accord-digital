import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function LeadershipSection() {
    return (
        <section className="w-full bg-[#F2F7FB] py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-inter font-bold text-[32px] md:text-[56px] leading-[44px] md:leading-[64px] text-[#001F3F] mb-6">
                        Leadership Team
                    </h2>
                    <p className="font-inter font-normal text-[14px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#334C65] max-w-[1000px]">
                        Our leadership brings decades of experience from Africa's leading
                        financial institutions, driving innovation and trust in every solution
                        we create
                    </p>
                </div>

                <div className="bg-white rounded-[10px] w-full max-w-[1328px] mx-auto p-6 md:p-[62px_57px] flex flex-col xl:flex-row gap-10 items-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative w-full max-w-[430px] h-[300px] md:h-[430px] flex-shrink-0">
                        <div className="w-full h-full relative rounded-[25px] overflow-hidden">
                            <Image
                                src="/profile.jpg"
                                alt="Badru Akeem"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 flex-grow max-w-[744px]">
                        <div>
                            <h3 className="font-inter font-semibold text-[24px] md:text-[28px] text-[#222222] mb-2">
                                Badru Akeem
                            </h3>
                            <p className="font-inter font-semibold text-[16px] md:text-[20px] text-[#009688]">
                                Chief Executive Officer & Founder
                            </p>
                        </div>

                        <div className="space-y-6 font-inter font-normal text-[16px] md:text-[20px] leading-[26px] text-[#222222] text-justify">
                            <p>
                                With over 20 years of experience in Africa's financial services
                                sector, Badru has held pivotal leadership roles at First City,
                                LAPO MFB, Primera MFB, and Fastcash Finance. His deep
                                understanding of both traditional banking and emerging fintech
                                solutions positions him uniquely to bridge the gap between
                                established financial institutions and innovative digital
                                services.
                            </p>
                            <p>
                                Badru's vision for Accord Digitals centers on democratizing
                                financial access across Africa, leveraging technology to create
                                inclusive solutions that serve both banked and unbanked
                                populations. His leadership philosophy emphasizes transparency,
                                community empowerment, and sustainable growth that benefits all
                                stakeholders.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <a href="#" className="text-gray-900 hover:text-[#001F3F] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-900 hover:text-[#001F3F] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-900 hover:text-[#001F3F] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <span className="font-inter font-medium text-[14px] text-gray-900">
                                @badruakeem
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
