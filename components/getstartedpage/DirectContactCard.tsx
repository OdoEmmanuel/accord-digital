"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";

export default function DirectContactCard() {
    return (
        <div
            className="bg-white rounded-xl flex flex-col w-full"
            style={{
                height: "auto",
                minHeight: "350px",
                padding: "32px",
                gap: "18px",
            }}
        >
            <h2 className="text-[18px] font-semibold text-[#000000]">Direct Contact</h2>

            <div className="flex flex-col gap-4">
                <div
                    className="flex flex-col sm:flex-row items-start sm:items-center rounded-xl transition-colors w-full bg-[#F9F9FD]"
                    style={{
                        minHeight: '76px',
                        padding: '12px 18px',
                        gap: '10px'
                    }}
                >
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-[#1F1F2A] text-sm">Phone Support</h3>
                        <p className="text-[#1F1F2A] font-medium break-all text-sm">+234 1 234 5678</p>
                        <p className="text-[#636372] text-xs">Response within 2 hours</p>
                    </div>
                </div>

                {/* Email Support */}
                <div
                    className="flex flex-col sm:flex-row items-start sm:items-center rounded-xl transition-colors w-full bg-[#F9F9FD]"
                    style={{
                        minHeight: '76px',
                        padding: '12px 18px',
                        gap: '10px'
                    }}
                >
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-[#1F1F2A] text-sm">Email Support</h3>
                        <p className="text-[#1F1F2A] font-medium break-all text-sm">contact@accorddigitals.ng</p>
                        <p className="text-[#636372] text-xs">Response within 24 hours</p>
                    </div>
                </div>

                {/* WhatsApp Business */}
                <div
                    className="flex flex-col sm:flex-row items-start sm:items-center rounded-xl transition-colors w-full bg-[#F9F9FD]"
                    style={{
                        minHeight: '76px',
                        padding: '12px 18px',
                        gap: '10px'
                    }}
                >
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-[#1F1F2A] text-sm">WhatsApp Business</h3>
                        <p className="text-[#1F1F2A] font-medium break-all text-sm">+234 1 234 5678</p>
                        <p className="text-[#636372] text-xs">Instant messaging support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
