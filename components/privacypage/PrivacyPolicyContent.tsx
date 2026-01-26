"use client";

import { FileText, Shield, Eye, Lock, UserCheck, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "information-collect", label: "Information We Collect" },
    { id: "how-we-use", label: "How We Use Your Information" },
    { id: "data-security", label: "Data Security" },
    { id: "your-rights", label: "Your Rights" },
    { id: "information-sharing", label: "Information Sharing" },
    { id: "contact-us", label: "Contact Us" },
    { id: "changes", label: "Changes to This Policy" },
];

export default function PrivacyPolicyContent() {
    const [activeId, setActiveId] = useState("introduction");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -80% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row lg:gap-[178px] gap-12 relative">
                <nav
                    className="w-full lg:w-[281px] lg:sticky lg:top-24 self-start flex-shrink-0"
                    style={{
                        paddingTop: "20px",
                    }}
                >
                    <ul className="flex flex-col gap-[18px]">
                        {navItems.map((item, index) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(item.id)?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                        setActiveId(item.id);
                                    }}
                                    className={`text-sm transition-colors hover:text-[#001F3F] block py-1 ${activeId === item.id
                                        ? "text-[#001F3F] font-semibold"
                                        : "text-[#636372] font-normal"
                                        }`}
                                >
                                    {index + 1}. {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div
                    className="flex-1 w-full"
                    style={{
                        maxWidth: "898px",
                        padding: "20px 0",
                    }}
                >
                    <div className="flex flex-col gap-12">
                        <section id="introduction" className="scroll-mt-32">
                            <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                                Introduction
                            </h2>
                            <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                                At Accord Digitals, we are committed to protecting your privacy
                                and ensuring the security of your personal information. This
                                Privacy Policy explains how we collect, use, disclose, and
                                safeguard your information when you use our digital financial
                                services.
                            </p>
                            <p className="text-base text-[#001F3F] leading-relaxed">
                                By accessing or using our services, you agree to the terms of
                                this Privacy Policy. If you do not agree with our policies and
                                practices, please do not use our services.
                            </p>
                        </section>

                        <section id="information-collect" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="w-6 h-6 text-[#1F1F2A]" />
                                <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                    Information We Collect
                                </h2>
                            </div>

                            <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                                Personal Information
                            </h3>
                            <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                                We may collect the following personal information:
                            </p>
                            <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-6">
                                <li>Full name, date of birth, and contact information</li>
                                <li>Government-issued identification numbers</li>
                                <li>Financial information including bank account details</li>
                                <li>Employment and income information</li>
                                <li>Credit history and credit scores</li>
                                <li>Transaction history and payment records</li>
                            </ul>

                            <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                                Technical Information
                            </h3>
                            <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2">
                                <li>IP address and browser information</li>
                                <li>Device information and unique identifiers</li>
                                <li>Usage data and interaction with our services</li>
                                <li>Location data (with your consent)</li>
                            </ul>
                        </section>

                        <section id="how-we-use" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <Eye className="w-6 h-6 text-[#1F1F2A]" />
                                <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                    How We Use Your Information
                                </h2>
                            </div>
                            <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                                We use your information for the following purposes:
                            </p>
                            <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2">
                                <li>Processing loan applications and financial transactions</li>
                                <li>Verifying your identity and preventing fraud</li>
                                <li>Assessing creditworthiness and managing risk</li>
                                <li>Providing customer support and responding to inquiries</li>
                                <li>Improving our services and developing new products</li>
                                <li>Complying with legal and regulatory requirements</li>
                                <li>
                                    Sending you important updates and promotional materials (with
                                    your consent)
                                </li>
                            </ul>
                        </section>

                        <section id="data-security" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <Lock className="w-6 h-6 text-[#1F1F2A]" />
                                <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                    Data Security
                                </h2>
                            </div>
                            <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                                We implement industry-standard security measures to protect your
                                personal information, including:
                            </p>
                            <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2">
                                <li>
                                    Encryption of sensitive data during transmission and storage
                                </li>
                                <li>Regular security audits and vulnerability assessments</li>
                                <li>Strict access controls and authentication procedures</li>
                                <li>Secure data centers with physical and electronic safeguards</li>
                                <li>Employee training on data protection and privacy</li>
                            </ul>
                        </section>

                        <section id="your-rights" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <UserCheck className="w-6 h-6 text-[#1F1F2A]" />
                                <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                    Your Rights
                                </h2>
                            </div>
                            <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                                You have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2">
                                <li>
                                    <strong>Access:</strong> Request a copy of the personal
                                    information we hold about you
                                </li>
                                <li>
                                    <strong>Correction:</strong> Request correction of inaccurate or
                                    incomplete information
                                </li>
                                <li>
                                    <strong>Deletion:</strong> Request deletion of your personal
                                    information (subject to legal obligations)
                                </li>
                                <li>
                                    <strong>Objection:</strong> Object to the processing of your
                                    personal information
                                </li>
                                <li>
                                    <strong>Portability:</strong> Request transfer of your data to
                                    another service provider
                                </li>
                                <li>
                                    <strong>Withdraw Consent:</strong> Withdraw consent for marketing
                                    communications at any time
                                </li>
                            </ul>
                        </section>

                        <section id="information-sharing" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <Share2 className="w-6 h-6 text-[#1F1F2A]" />
                                <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                    Information Sharing
                                </h2>
                            </div>
                            <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                                We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-4">
                                <li>
                                    Credit bureaus and financial institutions for credit assessment
                                </li>
                                <li>Service providers who assist in our operations</li>
                                <li>Legal and regulatory authorities when required by law</li>
                                <li>Business partners with your explicit consent</li>
                            </ul>
                            <p className="text-base text-[#001F3F] leading-relaxed">
                                We do not sell your personal information to third parties for
                                marketing purposes.
                            </p>
                        </section>

                        <section id="contact-us" className="scroll-mt-32">
                            <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                                Contact Us
                            </h2>
                            <p className="text-base text-[#001F3F] leading-relaxed mb-6">
                                If you have questions or concerns about this Privacy Policy or
                                our data practices, please contact us:
                            </p>
                            <div className="bg-[#F5F9FD] rounded-lg p-6 space-y-3">
                                <p className="text-base text-[#001F3F]">
                                    <strong>Email:</strong> badruaa@yahoo.co.uk
                                </p>
                                <p className="text-base text-[#001F3F]">
                                    <strong>Phone:</strong> 08033842250, 07038868742
                                </p>
                                <p className="text-base text-[#001F3F]">
                                    <strong>Address:</strong> 24B, Alhaja Kofoworola Crescent,
                                    Balogun Bus/Stop, Ikeja, Lagos State
                                </p>
                            </div>
                        </section>

                        <section id="changes" className="scroll-mt-32">

                            <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                                Changes to This Policy
                            </h2>
                            <p className="text-base text-[#001F3F] leading-relaxed">
                                We may update this Privacy Policy from time to time. We will
                                notify you of any material changes by posting the new Privacy
                                Policy on our website and updating the "Last updated" date. Your
                                continued use of our services after such modifications
                                constitutes your acknowledgment and acceptance of the modified
                                Privacy Policy.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-gray-200">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-[#001F3F] font-medium hover:underline"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
