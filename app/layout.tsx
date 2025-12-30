import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-display',
  display: 'swap' 
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: '--font-body',
  display: 'swap' 
});

export const metadata: Metadata = {
  title: "NILA | School of Happiness",
  description: "Kindling smiles across the globe. A sanctuary for emotional flourishing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-nila-50 antialiased selection:bg-nila-300 selection:text-nila-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}