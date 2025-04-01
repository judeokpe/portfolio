import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

import Footer from "../components/Layout/footer";
import IsScrolled from "../components/isScrolled"
import Header from "@/components/Layout/Navbar";
import { ThemeProvider } from "./context/theme-context/theme-provider";
import ScrollAppear from "@/components/ScrollAppear";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const geistOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Tech",
  description: "Personalized company wesite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${playfair.variable} font-serif antialiased`}
      >
         <ThemeProvider>
 
<IsScrolled>

        <div className="relative isolate  dark:bg-gray-900 bg-white dark:text-white"> 
{/*         
          <Header /> */}
               {children}
               
        </div>
        </IsScrolled>
        
        <Footer />
      
        </ThemeProvider>
      </body>
    </html>
  );
}
