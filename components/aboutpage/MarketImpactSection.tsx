import { TrendingUp, Clock, Smartphone, Store, GraduationCap } from "lucide-react";

export default function MarketImpactSection() {
    return (
        <section className="w-full bg-[#F6FFF5] py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-inter font-bold text-[30px] md:text-[56px] leading-[44px] md:leading-[64px] text-[#001F3F] mb-4">
                        Market Impact
                    </h2>
                    <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#334C65] max-w-[1000px]">
                        Understanding the scope of financial inclusion challenges and our role
                        in creating solutions.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8 max-w-[1332px] mx-auto">
                    <div className="w-full lg:max-w-[420px] h-auto bg-[#EBFFE9] min-h-[168px] border border-[#E0E0E0] rounded-[12px] p-5 flex flex-col justify-between hover:border-[#009688] transition-colors">
                        <h3 className="font-inter font-semibold text-[16px] text-[linear-gradient(0deg, #636372, #636372),
linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));]">
                            Underserved Population
                        </h3>
                        <p className="font-inter font-bold text-[40px] text-[#001F3F]">
                            400M+
                        </p>
                        <div className="flex items-center gap-2 text-[#4CAF50]">
                            <TrendingUp className="w-4 h-4" />
                            <span className="font-inter text-[14px]">Adults across Africa</span>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[420px] h-auto min-h-[168px] border border-[#E0E0E0] rounded-[12px] p-5 flex flex-col justify-between hover:border-[#009688] transition-colors bg-[#EBFFE9]">
                        <h3 className="font-inter font-semibold text-[16px] text-[linear-gradient(0deg, #636372, #636372),
linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));]">
                            Financial Inclusion Gap
                        </h3>
                        <p className="font-inter font-bold text-[40px] text-[#001F3F]">
                            57%
                        </p>
                        <div className="flex items-center gap-2 text-[#4CAF50]">
                            <Clock className="w-4 h-4" />
                            <span className="font-inter text-[14px]">Without bank accounts</span>
                        </div>
                    </div>

                    <div className="w-full lg:max-w-[420px] h-auto min-h-[168px] border border-[#E0E0E0] rounded-[12px] p-5 flex flex-col justify-between hover:border-[#009688] transition-colors bg-[#EBFFE9]">
                        <h3 className="font-inter font-semibold text-[16px] text-[linear-gradient(0deg, #636372, #636372),
linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));]">
                            Underserved Population
                        </h3>
                        <p className="font-inter font-bold text-[40px] text-[#001F3F]">
                            89%
                        </p>
                        <div className="flex items-center gap-2 text-[#4CAF50]">
                            <Smartphone className="w-4 h-4" />
                            <span className="font-inter text-[14px]">Mobile adoption rate</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white w-full max-w-[1332px] mx-auto rounded-[12px] p-5 md:p-8 lg:p-10 shadow-sm min-h-[204px] flex flex-col justify-center">
                    <h3 className="font-inter font-bold text-[24px] text-[#001F3F] mb-6">
                        Success Stories
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                                <Store className="w-5 h-5 text-[#2E7D32]" />
                            </div>
                            <div>
                                <h4 className="font-inter font-bold text-[16px] text-[#001F3F] mb-1">
                                    Small Business Growth
                                </h4>
                                <p className="font-inter font-normal text-[14px] leading-[22px] text-gray-600">
                                    Enabled over 10,000 small businesses to access working
                                    capital, resulting in average revenue growth of 35% within the
                                    first year of partnership.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                                <GraduationCap className="w-5 h-5 text-[#2E7D32]" />
                            </div>
                            <div>
                                <h4 className="font-inter font-bold text-[16px] text-[#001F3F] mb-1">
                                    Education Financing
                                </h4>
                                <p className="font-inter font-normal text-[14px] leading-[22px] text-gray-600">
                                    Supported 5,000+ students in accessing education loans, with
                                    92% successful completion rates and improved career outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
