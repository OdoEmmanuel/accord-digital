"use client";

import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function OfficeLocationCard() {
    return (
        <div
            className="bg-white rounded-xl flex flex-col justify-between w-full"
            style={{
                maxWidth: "100%", // Changed from fixed 648px
                height: "auto",
                minHeight: "450px",
                padding: "32px",
            }}
        >
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-8">
                    Visit Our Lagos Office
                </h2>

                <div className="space-y-8">
                    {/* Address */}
                    <div className="flex gap-4">
                        <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                            <p className="text-gray-600 leading-relaxed">
                                15 Kofo Abayomi Street
                                <br />
                                Victoria Island, Lagos 101241
                                <br />
                                Nigeria
                            </p>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex gap-4">
                        <Clock className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Business Hours
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Monday - Friday: 8:00 AM - 6:00 PM WAT
                                <br />
                                Saturday: 9:00 AM - 2:00 PM WAT
                                <br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mt-8">
                <Link
                    href="#"
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                >
                    Get Directions
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
        </div>
    );
}
