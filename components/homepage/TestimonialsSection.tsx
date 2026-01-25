"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        rating: 4,
        quote: "Accord Digital transformed our financial operations completely. Their digital banking platform is intuitive, secure, and has significantly improved our cash flow management.",
        name: "Sarah Ajayi",
        initials: "SA",
        title: "CFO, TechStart Inc.",
    },
    {
        rating: 5,
        quote: "The investment management team at Accord Digital helped us achieve a 23% portfolio growth in just 18 months. Their expertise is unmatched.",
        name: "Michael Umeh",
        initials: "MU",
        title: "Founder, GrowthVentures",
    },
    {
        rating: 4,
        quote: "Outstanding customer service and innovative solutions. Accord Digital's payment processing system has streamlined our entire business operation.",
        name: "Emma Thompson",
        initials: "ET",
        title: "CEO, RetailPro Solutions",
    },
    {
        rating: 5,
        quote: "We've seen a 40% reduction in transaction costs since switching to Accord Digital. Their fintech solutions are truly game-changing for SMEs.",
        name: "David Okonkwo",
        initials: "DO",
        title: "Managing Director, Lagos Exports",
    },
    {
        rating: 5,
        quote: "The level of security and transparency in their digital wallet services gives us complete peace of mind. Highly recommended!",
        name: "Amina Ibrahim",
        initials: "AI",
        title: "Finance Manager, HealthCare Plus",
    },
    {
        rating: 4,
        quote: "Accord Digital's asset management services have helped us grow our investment portfolio significantly. Professional and reliable.",
        name: "James Adeyemi",
        initials: "JA",
        title: "Director, Prime Investments",
    },
    {
        rating: 5,
        quote: "Their SME banking solutions are tailored perfectly for growing businesses. We got approved for credit in just 48 hours!",
        name: "Chinwe Eze",
        initials: "CE",
        title: "Owner, Eze Logistics",
    },
    {
        rating: 4,
        quote: "The financial advisory team provided invaluable guidance during our expansion. Their strategic insights were spot-on.",
        name: "Robert Mensah",
        initials: "RM",
        title: "CEO, Accra Tech Hub",
    },
    {
        rating: 5,
        quote: "Seamless integration with our existing systems and excellent customer support. Accord Digital exceeded our expectations.",
        name: "Fatima Suleiman",
        initials: "FS",
        title: "IT Director, National Bank",
    },
    {
        rating: 5,
        quote: "The public sector solutions from Accord Digital have modernized our entire financial reporting process. A true digital transformation partner.",
        name: "John Okoro",
        initials: "JO",
        title: "Controller, State Ministry of Finance",
    },
];

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Image
                    key={star}
                    src={star <= rating ? "/svgs/star.svg" : "/svgs/emptystar.svg"}
                    alt={star <= rating ? "Filled star" : "Empty star"}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                />
            ))}
        </div>
    );
};

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 3;
    const maxIndex = Math.max(0, testimonials.length - cardsPerView);

    const goToPrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    return (
        <section className="w-full py-16 md:py-20 bg-[#F2F9FF]">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-[1012px] mx-auto text-center mb-16">
                    <h2 className="font-inter font-bold text-[30px] leading-[48px] md:text-[56px] md:leading-[64px] text-[#111827] mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="font-normal text-base md:text-[18px] md:leading-[26px] text-[#636372] max-w-[800px] mx-auto">
                        Trusted by thousands of businesses and individuals worldwide for our innovative financial solutions and exceptional service.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Cards Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-8 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                            style={{ transform: `translateX(-${currentIndex * (402 + 32)}px)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full sm:w-[402px] min-h-[318px] bg-white rounded-[32px] p-8 flex flex-col"
                                >
                                    {/* Star Rating */}
                                    <div className="mb-6">
                                        <StarRating rating={testimonial.rating} />
                                    </div>

                                    {/* Quote */}
                                    <p className="text-[16px] leading-[24px] text-[#4B5563] flex-grow mb-6">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#009688] flex items-center justify-center text-white font-bold text-sm">
                                            {testimonial.initials}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#009688] text-sm">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-xs text-[#636372]">
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        {/* Previous Button */}
                        <button
                            onClick={goToPrevious}
                            disabled={currentIndex === 0}
                            className="w-10 h-10 rounded-full border border-[#009688] flex items-center justify-center text-[#009688] hover:bg-[#009688] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                                        ? "bg-[#009688]"
                                        : "bg-[#009688]/30 hover:bg-[#009688]/50"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={goToNext}
                            disabled={currentIndex === maxIndex}
                            className="w-10 h-10 rounded-full border border-[#009688] flex items-center justify-center text-[#009688] hover:bg-[#009688] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
