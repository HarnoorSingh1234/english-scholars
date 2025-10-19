import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsappButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "English Scholars - Best IELTS Coaching | Founded by Mr. Gurdit Singh Grover",
  description: "Join English Scholars for personalized IELTS coaching with small batch sizes. 15+ years excellence, 95% success rate. Book your free demo class today!",
  keywords: "IELTS coaching, English coaching, spoken English, grammar classes, business English, IELTS preparation, English Scholars",
  openGraph: {
    title: "English Scholars - Best IELTS Coaching",
    description: "Inspiring minds ~ Transforming lives",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <WhatsAppButton />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
