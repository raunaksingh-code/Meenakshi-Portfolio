"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download, Mail } from "lucide-react";

const typingWords = ["Consulting Professional", "Strategy Enthusiast", "Pharma Graduate"];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#E0C5C4] via-[#D0A0A3] to-[#ECCBC9] overflow-hidden pt-24 pb-32">
      
      {/* Decorative floating dots/stars in dark for light bg */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#D0A0A3]/30 rounded-full blur-[1px]" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#D0A0A3]/40 rounded-full blur-[1px]" />
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#D0A0A3]/30 rounded-full blur-[2px]" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#D0A0A3]/30 rounded-full blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-md mb-8">
            <span className="text-[#D0A0A3] text-sm">✦</span>
            <span className="text-slate-800 text-xs md:text-sm font-semibold tracking-widest uppercase">
              PGPM 2026-27 • GREAT LAKES GURGAON
            </span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Meenakshi
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-sans h-12 flex items-center">
            {currentText}
            <span className="animate-pulse ml-1 inline-block w-1 h-8 bg-slate-800"></span>
          </h2>
          
          <p className="text-slate-700 max-w-xl text-base md:text-lg leading-relaxed mb-10 font-medium">
            Curious about the problem, rigorous with the analysis, and focused on turning ideas into outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="/Meenakshi_CV.docx" 
              download="Meenakshi_CV.docx"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-sm lg:max-w-none">
          <div className="relative w-72 md:w-96 animate-float drop-shadow-2xl">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-white ring-8 ring-white shadow-2xl" />
            <Image
              src="/profile.png"
              alt="Meenakshi Profile"
              width={400}
              height={500}
              className="relative z-10 object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>

      {/* Subtle wave transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-background opacity-0"></path>
          <path d="M0,120 C200,80 400,0 600,0 C800,0 1000,80 1200,120 Z" className="fill-background"></path>
        </svg>
      </div>

    </section>
  );
}
