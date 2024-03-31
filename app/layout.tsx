import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Favicon from "@/components/atoms/Favicon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vilebloom Portfolio",
  description: "This is Arif's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Favicon type="light" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
