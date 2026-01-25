import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function RegulatoryComplianceSection() {
    return (
        <section className="w-full bg-[#f2f7fb] py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-inter font-bold text-[30px] md:text-[56px] leading-[44px] md:leading-[64px] text-[#001F3F] mb-6">
                        Regulatory Compliance
                    </h2>
                    <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-gray-600 max-w-[1000px]">
                        Our commitment to the highest standards of financial regulation and
                        security
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-[20px] w-full max-w-[1318px] mx-auto text-left">
                    <div className="bg-white rounded-[10px] w-full max-w-[649px] min-h-[388px] p-6 md:p-10 lg:pt-10 lg:pr-[62px] lg:pb-10 lg:pl-[62px] flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 relative mb-2">
                            <Image
                                src="/svgs/services/consult.svg"
                                alt="Licensing Icon"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="font-inter font-semibold text-[20px] md:text-[24px] text-[#001F3F]">
                            Licensing & Approvals
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-2">
                                <span className="flex items-center gap-1 bg-[#E8F5E9] text-[#2E7D32] text-xs font-medium px-2 py-1 rounded">
                                    <CheckCircle2 className="w-3 h-3" /> Active
                                </span>
                                <span className="font-inter text-[16px] text-[#334C65]">Central Bank Digital Finance License</span>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="flex items-center gap-1 bg-[#FFF8E1] text-[#F9A825] text-xs font-medium px-2 py-1 rounded">
                                    <Clock className="w-3 h-3" /> Pending
                                </span>
                                <span className="font-inter text-[16px] text-[#334C65]">Regional Financial Services Authorization</span>
                            </div>
                        </div>

                        <p className="font-inter font-normal text-[16px] leading-[26px] text-[#334C65] mt-auto">
                            We maintain active compliance with all relevant financial regulatory
                            bodies and continuously work toward expanded authorizations across
                            African markets.
                        </p>
                    </div>

                    <div className="bg-white rounded-[10px] w-full max-w-[649px] min-h-[388px] p-6 md:p-10 lg:pt-10 lg:pr-[62px] lg:pb-10 lg:pl-[62px] flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 relative mb-2">
                            <Image
                                src="/svgs/services/secure.svg"
                                alt="Security Icon"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h3 className="font-inter font-semibold text-[20px] md:text-[24px] text-[#001F3F]">
                            Security & Protection
                        </h3>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-[#334C65]">ISO 27001 Information Security Management</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-[#334C65]">PCI DSS Level 1 Payment Card Industry Compliance</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-1" />
                                <span className="font-inter text-[15px] text-[#334C65]">GDPR and Data Protection Act Compliance</span>
                            </div>
                        </div>

                        <p className="font-inter font-normal text-[16px] leading-[26px] text-[#334C65] mt-auto">
                            Our security framework exceeds industry standards, ensuring customer
                            data and financial transactions are protected with military-grade
                            encryption and monitoring.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
