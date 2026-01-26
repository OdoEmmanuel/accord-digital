import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    target: string;
    extraInfo: string;
    buttonText: string;
    iconName: string;
}

export default function ServiceCard({
    title,
    description,
    target,
    extraInfo,
    buttonText,
    iconName,
}: ServiceCardProps) {
    return (
        <div className="flex flex-col h-full bg-white rounded-[10px] p-6 sm:p-8 md:p-10 lg:px-[44px] lg:py-10 gap-6 w-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex-shrink-0">
                <div className="w-12 h-12 relative">
                    <Image
                        src={`/svgs/services/${iconName}`}
                        alt={`${title} icon`}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6 flex-grow">
                <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-inter">
                        {title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-inter">
                        {description}
                    </p>
                </div>

                <div className="mt-auto space-y-6">
                    <div className="inline-block bg-[#C6D6E6] rounded px-3 py-1">
                        <p className="text-sm font-medium text-[#001F3F] font-inter">
                            Target: {target}
                        </p>
                    </div>

                    <p className="text-xs text-gray-500 font-inter">
                        {extraInfo}
                    </p>
                </div>
            </div>

            <Link href="/get-started" className="w-full mt-2">
                <button className="flex items-center justify-between w-full h-14 bg-[#001F3F] text-white rounded-[12px] px-6 py-4 hover:bg-opacity-90 transition-all group">
                    <span className="font-medium text-base font-inter whitespace-nowrap overflow-hidden text-ellipsis mr-2">{buttonText}</span>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
        </div>
    );
}
