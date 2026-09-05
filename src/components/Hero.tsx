"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download, Mail } from "lucide-react";

const typingWords = ["Operations", "Quality Assurance", "Strategy", "Business Intelligence"];

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
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-rose-50 via-teal-50 to-violet-100 overflow-hidden pt-24 pb-32">
      
      {/* Decorative floating dots/stars in dark for light bg */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-slate-400/20 rounded-full blur-[1px]" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-slate-400/30 rounded-full blur-[1px]" />
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-slate-400/20 rounded-full blur-[2px]" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-slate-400/20 rounded-full blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 backdrop-blur-md mb-8">
            <span className="text-amber-500 text-sm">✦</span>
            <span className="text-slate-800 text-xs md:text-sm font-semibold tracking-widest uppercase">
              PGPM 2026-27 • GREAT LAKES GURGAON
            </span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Meenakshi
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6 font-sans h-12 flex items-center">
            {currentText}
            <span className="animate-pulse ml-1 inline-block w-1 h-8 bg-slate-700"></span>
          </h2>
          
          <p className="text-slate-600 max-w-xl text-base md:text-lg leading-relaxed mb-10 font-medium">
            Turning structured operations into consistent service delivery — bridging quality assurance with robust process re-engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="/Resume.pdf" 
              target="_blank"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white/50 border border-slate-200 text-slate-900 text-sm font-bold rounded-full hover:bg-white transition-all backdrop-blur-sm"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-sm lg:max-w-none">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-rose-300 via-transparent to-violet-300 animate-spin-slow rounded-full shadow-[0_0_50px_rgba(139,92,246,0.15)]">
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white bg-white animate-reverse-spin">
              <Image 
                src="/profile.png" 
                alt="Meenakshi Profile" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Subtle wave transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.85,132,201.33,115.2,243.68,105,283.47,81.4,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

    </section>
  );
}
