// import Image from "next/image";
// import {clsx} from "clsx";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-grain hover:animate-noisy-bg transition">
      {/* <h1 className="text-4xl font-bold text-red-600">Hello to the course</h1>
      <h1 className={cn("text-4xl", "text-yellow-400", false && "underline" )}>
          Default font apply</h1>
      <h1 className={cn("text-4xl", "text-yellow-400", false && "underline", "font-Oswald" )}>
          Hello my friend</h1>
      <h1 className={cn("text-4xl", "text-yellow-400", false && "underline", "font-pixel" )}>
          Hello my friend</h1> */}
    </div>
  );
}
