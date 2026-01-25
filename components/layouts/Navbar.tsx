"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it Works" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-md">
        <div className="section-container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[90px] py-4 lg:py-[20px]">
            <div className="flex items-center">
              <Image
                src="/svgs/Logo.svg"
                alt="Logo"
                width={60}
                height={60}
                className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-10 max-w-[820px]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-[18px] font-semibold transition-colors relative group ${isActive
                      ? "text-[#009688]"
                      : "text-muted-foreground hover:text-primary"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#009688] transition-all" />
                    )}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    )}
                  </a>
                );
              })}
              <Link href="/get-started">
                <Button className="bg-[#009688] flex gap-2.5 h-12 text-primary-foreground px-8 py-2 rounded-lg text-base font-semibold hover:bg-[#009688]/90 transition-all shadow-md hover:shadow-lg cursor-pointer">
                  Get Started
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[320px] bg-card shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">
                      ACCORD
                    </span>
                  </div>
                  <button
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    onClick={toggleMobileMenu}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-primary" />
                  </button>
                </div>

                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                  <ul className="space-y-1">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                          <a
                            href={link.href}
                            className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${isActive
                              ? "text-[#009688] bg-muted/50"
                              : "text-foreground hover:text-primary hover:bg-muted"
                              }`}
                            onClick={toggleMobileMenu}
                          >
                            {link.label}
                          </a>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                <Link
                  href="/get-started"
                  className="p-4 border-t border-border space-y-3"
                >
                  <Button
                    className="w-full bg-[#009688] hover:bg-[#009688]/90 text-primary-foreground py-3 rounded-lg font-bold"
                    onClick={toggleMobileMenu}
                  >
                    Get Started
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    badruaa@yahoo.co.uk
                  </p>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
