import type { Metadata } from "next";
import { cn } from "@/lib/utils"; // Ensure this utility function is correctly defined/imported
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import GrainEffect from "@/components/visualEffects/grain-effect";

// Font Imports
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf", // Corrected extension
  variable: "--font-pixel",
});

// Metadata Type Definition
export const metadata: Metadata = {
  title: "Mrinmoy Roy | Portfolio",
  description: "Mrinmoy Roy official portfolio",
};

// Main Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PixelFont.variable
        )}
      >
        <GrainEffect />
        {children}
      </body>
    </html>
  );
}
