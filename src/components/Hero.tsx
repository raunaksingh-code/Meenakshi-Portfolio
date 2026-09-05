import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center bg-white">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column - Text Content */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          
          <div className="text-[var(--color-accent-gold)] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
            PGDM 2025-27 • GREAT LAKES INSTITUTE OF MANAGEMENT, GURGAON
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#0F172A] mb-4">
            Meenakshi
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-slate-700 mb-6 font-sans">
            Operations & Quality Assurance
          </h2>
          
          <p className="text-slate-500 max-w-xl text-base md:text-lg leading-relaxed mb-10">
            Intellectually curious management professional specializing in operational workflows, quality assurance, and compliance. Focused on process re-engineering, standardizing procedures, and data verification — turning structured operations into consistent service delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3 bg-[#0F172A] text-white text-sm font-semibold rounded hover:bg-[#1E293B] transition-colors text-center"
            >
              View Projects
            </Link>
            <a 
              href="/Resume.pdf" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-3 bg-white text-[#0F172A] border border-[#E2E8F0] text-sm font-semibold rounded hover:bg-slate-50 transition-colors text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-sm lg:max-w-none">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[8px] border-slate-50 shadow-2xl">
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
    </section>
  );
}
