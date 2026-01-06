import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-body",
  weight: ['400', '500', '600', '700', '800']
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Professional Therapy Platform",
  description: "Find the right support for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow">
           {children}
        </div>
        <Footer /> {/* Added Footer Here */}
      </body>
    </html>
  );
}