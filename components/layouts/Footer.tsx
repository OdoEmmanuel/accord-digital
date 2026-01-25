"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact Us", href: "/contact" },
  { label: "Business Solutions", href: "/business-solutions" },
];

const ourServices = [
  { label: "Digital Lending", href: "/services#lending" },
  { label: "SME Financing", href: "/services#sme" },
  { label: "Asset Finance", href: "/services#asset" },
  { label: "Investment Solutions", href: "/services#investment" },
  { label: "Financial Advisory", href: "/services#advisory" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A2C28] text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
          <div className="w-full lg:w-[388px] flex-shrink-0">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/svgs/Logo2.svg"
                alt="Accord Digital Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="md:text-[28px] text-[24px] font-semibold text-white">Accord Digital</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading digital financial services provider, empowering businesses and individuals with innovative solutions for the modern economy.
            </p>
            <div className="flex gap-4 max-w-[160px]">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-sm text-white flex items-center justify-center text-gray-400 hover:text-[#009688] hover:border-[#009688] transition-colors"
                >
                  <social.icon className="w-[21px] h-[21px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:max-w-[626px] flex flex-col sm:flex-row gap-8 lg:gap-2">
            <div className="flex-1">
              <h4 className="text-[#009688] font-semibold text-base mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-[#009688] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-[#009688] font-semibold text-base mb-5">Our Services</h4>
              <ul className="space-y-3">
                {ourServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-[#009688] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-[#009688] font-semibold text-base mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    24B, Alhaja Kofoworola Crescent, Balogun Bus/Stop, Ikeja, Lagos State
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a
                    href="mailto:badruaa@yahoo.co.uk"
                    className="text-gray-300 text-sm hover:text-[#009688] transition-colors"
                  >
                    badruaa@yahoo.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-300 text-sm">
                    <p>08033642250,</p>
                    <p>07038866742</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Accord Digitals. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-300 text-sm hover:text-[#009688] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-300 text-sm hover:text-[#009688] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
