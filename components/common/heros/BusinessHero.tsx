"use client";

export default function BusinessHero() {
    return (
        <section className="relative w-full h-[540px] overflow-hidden flex flex-col items-center justify-center text-center px-4">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero/businessHero.jpg')",
                }}
            />

            <div className="absolute inset-0 bg-[#000000B2] z-10" />

            <div className="relative z-20 max-w-[912px] mx-auto flex flex-col items-center text-white h-full justify-center">
                <h1 className="font-bold text-[30px] md:text-[64px] leading-[1.2] md:leading-[72px] tracking-normal font-inter mb-6">
                    Empowering African
                    <br className="hidden md:block" /> Businesses
                </h1>

                <p className="text-base md:text-[18px] leading-[26px] font-normal font-inter text-gray-200 max-w-[800px]">
                    Tailored financial solutions that help SMEs thrive, expand, and create
                    lasting impact in their communities
                </p>
            </div>
        </section>
    );
}
