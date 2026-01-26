"use client";

import {
    FileText,
    Users,
    CreditCard,
    Ban,
    AlertCircle,
    Scale,
    ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function TermsOfServiceContent() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-[1328px] mx-auto px-4">
                <div className="flex flex-col gap-12">
                    <section id="introduction">
                        <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                            Agreement to Terms
                        </h2>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            Welcome to Accord Digitals. By accessing or using our digital
                            financial services, you agree to be bound by these Terms of Service
                            ("Terms"). Please read these Terms carefully before using our
                            services.
                        </p>
                        <p className="text-base text-[#001F3F] leading-relaxed">
                            If you do not agree to these Terms, you may not access or use our
                            services. These Terms apply to all users, including individuals,
                            businesses, and other entities accessing our platform.
                        </p>
                    </section>

                    <section id="our-services">
                        <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                            Our Services
                        </h2>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            Accord Digitals provides digital financial services including:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-6">
                            <li>Digital lending and loan services</li>
                            <li>SME financing and business solutions</li>
                            <li>Asset finance and equipment leasing</li>
                            <li>Investment advisory and wealth management</li>
                            <li>Financial planning and consultation</li>
                        </ul>
                        <p className="text-base text-[#001F3F] leading-relaxed">
                            We reserve the right to modify, suspend, or discontinue any aspect
                            of our services at any time without prior notice.
                        </p>
                    </section>

                    <section id="eligibility">
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="w-6 h-6 text-[#1F1F2A]" />
                            <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                Eligibility Requirements
                            </h2>
                        </div>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            To use our services, you must:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-4">
                            <li>
                                Be at least 18 years of age or the age of majority in your
                                jurisdiction
                            </li>
                            <li>
                                Have the legal capacity to enter into binding contracts
                            </li>
                            <li>
                                Provide accurate, current, and complete information during
                                registration
                            </li>
                            <li>Maintain a valid email address and phone number</li>
                            <li>
                                Be a resident of Nigeria or another jurisdiction where our
                                services are available
                            </li>
                            <li>
                                Not be prohibited from using our services under applicable laws
                            </li>
                        </ul>
                        <p className="text-base text-[#001F3F] leading-relaxed">
                            By using our services, you represent and warrant that you meet all
                            eligibility requirements.
                        </p>
                    </section>

                    <section id="loan-terms">
                        <div className="flex items-center gap-3 mb-6">
                            <CreditCard className="w-6 h-6 text-[#1F1F2A]" />
                            <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                Loan Terms and Conditions
                            </h2>
                        </div>

                        <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                            Application Process
                        </h3>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            When you apply for a loan through our platform:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-6">
                            <li>
                                You authorize us to verify your identity and creditworthiness
                            </li>
                            <li>You consent to credit checks and background verification</li>
                            <li>
                                You provide accurate financial and employment information
                            </li>
                            <li>
                                You understand that approval is subject to our credit
                                assessment.
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                            Repayment Obligations
                        </h3>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            If your loan application is approved:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-6">
                            <li>
                                You agree to repay the loan according to the agreed schedule
                            </li>
                            <li>
                                Interest rates and fees will be clearly disclosed before
                                acceptance
                            </li>
                            <li>
                                Late payments may incur additional fees and affect your credit
                                score
                            </li>
                            <li>
                                You may prepay your loan without penalty, unless otherwise
                                specified.
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                            Default and Collections
                        </h3>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            In the event of default:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2">
                            <li>We may report delinquencies to credit bureaus</li>
                            <li>We reserve the right to pursue legal remedies for collection</li>
                            <li>
                                Additional fees and interest may apply to overdue amounts
                            </li>
                            <li>We may engage third-party collection agencies</li>
                        </ul>
                    </section>

                    <section id="prohibited">
                        <div className="flex items-center gap-3 mb-6">
                            <Ban className="w-6 h-6 text-[#1F1F2A]" />
                            <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                Prohibited Activities
                            </h2>
                        </div>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            You agree not to:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2">
                            <li>Provide false, inaccurate, or misleading information</li>
                            <li>Use our services for illegal or fraudulent purposes</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Interfere with or disrupt our services or servers</li>
                            <li>
                                Use automated systems to access our platform without permission
                            </li>
                            <li>Impersonate another person or entity</li>
                            <li>Engage in money laundering or terrorist financing</li>
                            <li>Violate any applicable laws or regulations</li>
                        </ul>
                    </section>

                    <section id="disclaimers">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="w-6 h-6 text-[#1F1F2A]" />
                            <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                Disclaimers and Limitations
                            </h2>
                        </div>

                        <div className="bg-[#FFF9E6] rounded-lg p-6 mb-6 border border-[#FFD54F]">
                            <h3 className="text-lg font-bold text-[#B76E00] mb-2">
                                Important Notice
                            </h3>
                            <p className="text-base text-[#B76E00] leading-relaxed">
                                Our services are provided "as is" and "as available" without
                                warranties of any kind, either express or implied.
                            </p>
                        </div>

                        <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                            No Warranty
                        </h3>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            We do not guarantee that:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-6">
                            <li>
                                Our services will be uninterrupted, secure, or error-free
                            </li>
                            <li>
                                The results obtained from our services will be accurate or
                                reliable
                            </li>
                            <li>Any errors in the platform will be corrected</li>
                        </ul>

                        <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                            Limitation of Liability
                        </h3>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            To the maximum extent permitted by law, Accord Digitals shall not
                            be liable for:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2">
                            <li>Indirect, incidental, special, or consequential damages</li>
                            <li>Loss of profits, data, or business opportunities</li>
                            <li>
                                Damages arising from unauthorized access to your account
                            </li>
                            <li>Third-party actions or failures</li>
                        </ul>
                    </section>

                    <section id="governing-law">
                        <div className="flex items-center gap-3 mb-6">
                            <Scale className="w-6 h-6 text-[#1F1F2A]" />
                            <h2 className="text-[28px] font-bold text-[#1F1F2A]">
                                Governing Law and Dispute Resolution
                            </h2>
                        </div>

                        <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                            Jurisdiction
                        </h3>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-6">
                            These Terms shall be governed by and construed in accordance with
                            the laws of the Federal Republic of Nigeria, without regard to its
                            conflict of law provisions.
                        </p>

                        <h3 className="text-lg font-bold text-[#1F1F2A] mb-4">
                            Dispute Resolution
                        </h3>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            In the event of any dispute arising from these Terms:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2">
                            <li>
                                We encourage informal resolution through direct communication
                            </li>
                            <li>
                                If informal resolution fails, disputes may be submitted to
                                mediation
                            </li>
                            <li>
                                Legal proceedings shall be brought in the courts of Lagos State,
                                Nigeria
                            </li>
                            <li>
                                You agree to submit to the personal jurisdiction of these
                                courts.
                            </li>
                        </ul>
                    </section>

                    <section id="termination">
                        <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                            Account Termination
                        </h2>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            We reserve the right to suspend or terminate your account:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-6">
                            <li>If you violate these Terms</li>
                            <li>If we suspect fraudulent or illegal activity</li>
                            <li>If you provide false or misleading information</li>
                            <li>At our sole discretion, with or without notice</li>
                        </ul>
                        <p className="text-base text-[#001F3F] leading-relaxed">
                            Upon termination, your right to use our services will immediately
                            cease, but your repayment obligations will remain in effect.
                        </p>
                    </section>

                    <section id="changes">
                        <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                            Changes to Terms
                        </h2>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-4">
                            We reserve the right to modify these Terms at any time. We will
                            notify you of material changes by:
                        </p>
                        <ul className="list-disc list-inside text-base text-[#001F3F] space-y-2 mb-6">
                            <li>Posting the updated Terms on our website</li>
                            <li>Sending you an email notification</li>
                            <li>Displaying a notice on our platform.</li>
                        </ul>
                        <p className="text-base text-[#001F3F] leading-relaxed">
                            Your continued use of our services after such modifications
                            constitutes your acceptance of the updated Terms.
                        </p>
                    </section>

                    <section id="contact-us">
                        <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                            Contact Information
                        </h2>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-6">
                            For questions about these Terms or our services, please contact us:
                        </p>
                        <div className="bg-[#F5F9FD] rounded-lg p-6 space-y-3">
                            <p className="text-base text-[#001F3F]">
                                <strong>Company Name:</strong> Accord Digitals
                            </p>
                            <p className="text-base text-[#001F3F]">
                                <strong>Email:</strong> badruaa@yahoo.co.uk
                            </p>
                            <p className="text-base text-[#001F3F]">
                                <strong>Phone:</strong> 08033642250, 07038866742
                            </p>
                            <p className="text-base text-[#001F3F]">
                                <strong>Address:</strong> 24B, Alhaja Kofoworola Crescent,
                                Balogun Bus/Stop, Ikeja, Lagos State
                            </p>
                        </div>
                    </section>

                    <section id="severability">
                        <h2 className="text-[28px] font-bold text-[#1F1F2A] mb-6">
                            Severability
                        </h2>
                        <p className="text-base text-[#001F3F] leading-relaxed mb-8">
                            If any provision of these Terms is found to be unenforceable or
                            invalid, that provision will be limited or eliminated to the
                            minimum extent necessary so that these Terms will otherwise remain
                            in full force and effect.
                        </p>

                        <div className="bg-[#F8FCFF] rounded-lg p-6 mb-8 border border-l-4 border-l-[#001F3F]">
                            <p className="text-base font-bold text-[#001F3F] leading-relaxed">
                                By using Accord Digitals services, you acknowledge that you
                                have read, understood, and agree to be bound by these Terms of
                                Service.
                            </p>
                        </div>
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
        </section>
    );
}
