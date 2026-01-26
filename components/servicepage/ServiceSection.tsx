import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Public Sector Finance",
        description:
            "Specialized lending solutions for government employees with payroll integration benefits and streamlined approval processes. Quick disbursement with competitive rates.",
        target: "Civil servants, government contractors",
        extraInfo: "Interest rates from 12% per annum • Up to 36 months repayment",
        buttonText: "Apply for Public Sector Loan",
        iconName: "finance.svg",
    },
    {
        title: "Asset Finance",
        description:
            "Equipment and asset financing solutions for business equipment, vehicles, and machinery. Flexible payment terms matched to your cash flow with competitive rates.",
        target: "SMEs and established businesses",
        extraInfo: "Flexible terms • Asset-backed security • Quick processing",
        buttonText: "Get Asset Financing Quote",
        iconName: "car.svg",
    },
    {
        title: "Private Lending",
        description:
            "Personal loans for private sector employees with income-based lending and simplified documentation. Quick approval and same-day disbursement available.",
        target: "Salaried professionals and entrepreneurs",
        extraInfo: "Minimal documentation • Same-day disbursement • Competitive rates",
        buttonText: "Apply for Personal Loan",
        iconName: "private.svg",
    },
    {
        title: "Transportation Business",
        description:
            "Specialized financing for transport operators including vehicle purchase and working capital solutions. Industry expertise in transportation sector requirements.",
        target: "Taxi operators, logistics companies, fleet owners",
        extraInfo: "Vehicle financing • Working capital • Fleet expansion loans",
        buttonText: "Finance Your Transport Business",
        iconName: "transport.svg",
    },
    {
        title: "SME Lending",
        description:
            "Working capital and growth financing for small businesses with flexible terms matching business cash flow cycles. Includes business development support and advisory services.",
        target: "Small and medium enterprises",
        extraInfo: "Working capital • Growth financing • Business advisory",
        buttonText: "Get Business Funding",
        iconName: "sme.svg",
    },
    {
        title: "Digital Lending",
        description:
            "Fast online loan application and approval system with mobile-first lending platform providing instant decisions. Competitive rates with transparent fee structure.",
        target: "Tech-savvy professionals and young entrepreneurs",
        extraInfo: "Instant decisions • Mobile platform • Transparent fees",
        buttonText: "Apply Online Now",
        iconName: "digital.svg",
    },
    {
        title: "POS Business",
        description:
            "Point-of-sale business setup and financing including equipment financing and working capital support. Complete business training and ongoing support services.",
        target: "Retail entrepreneurs and small merchants",
        extraInfo: "Equipment financing • Business training • Ongoing support",
        buttonText: "Start Your POS Business",
        iconName: "pos.svg",
    },
    {
        title: "Investment Business",
        description:
            "Investment opportunities and wealth building products including savings plans and portfolio management services. Financial planning and retirement preparation guidance.",
        target: "Professionals seeking wealth growth",
        extraInfo: "Portfolio management • Retirement planning • Wealth building",
        buttonText: "Explore Investment Options",
        iconName: "invest.svg",
    },
    {
        title: "Travel Aid",
        description:
            "Travel financing and foreign exchange services including business travel support and remittance services. Educational travel and family visit financing options available.",
        target: "International travelers and diaspora families",
        extraInfo: "Travel financing • Foreign exchange • Remittance services",
        buttonText: "Get Travel Financing",
        iconName: "travel.svg",
    },
    {
        title: "Financial Consulting",
        description:
            "Expert financial advisory and consulting services including business setup, recruitment, and training services. Institutional financial system development and optimization.",
        target: "Businesses and organizations needing expertise",
        extraInfo: "Business setup • Financial advisory • System development",
        buttonText: "Book Consultation",
        iconName: "consult.svg",
    },
];

export default function ServiceSection() {
    return (
        <section className="w-full bg-[#f2f7fb] py-12 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1312px]">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                target={service.target}
                                extraInfo={service.extraInfo}
                                buttonText={service.buttonText}
                                iconName={service.iconName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
