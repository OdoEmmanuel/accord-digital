import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Accord - Digital Financial Services",
    template: "%s | Accord",
  },
  description:
    "Empowering individuals, businesses, and institutions across Africa with comprehensive digital financial solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
