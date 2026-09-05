"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Globe, Code, FileText } from "lucide-react";

export function Contact() {
  return (
    <footer className="relative w-full py-32 bg-[#0A0A0A] text-white flex flex-col items-center overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          backgroundSize: "4rem 4rem"
        }}
      />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 text-center flex flex-col items-center">
        <motion.h2 
          className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          LET'S BUILD<br/><span className="text-primary">WHAT'S NEXT.</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-white/70 max-w-2xl font-light mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Interested in finance, strategy, analytics, technology, and the future of business.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <ContactLink href="mailto:contact@example.com" icon={<Mail />} label="Email" primary />
          <ContactLink href="https://linkedin.com" icon={<Globe />} label="LinkedIn" />
          <ContactLink href="https://github.com" icon={<Code />} label="GitHub" />
          <ContactLink href="/Resume.pdf" icon={<FileText />} label="Resume" />
        </div>
      </div>
      
      <div className="absolute bottom-8 text-white/30 text-xs font-mono tracking-widest uppercase">
        © {new Date().getFullYear()} Meenakshi. All rights reserved.
      </div>
    </footer>
  );
}

function ContactLink({ href, icon, label, primary = false }: { href: string, icon: React.ReactNode, label: string, primary?: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center gap-3 px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 overflow-hidden ${
        primary 
          ? "bg-primary text-white hover:shadow-[0_0_30px_rgba(0,82,255,0.6)]" 
          : "bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative z-10 flex items-center gap-3">
        {icon}
        <span>{label}</span>
        {primary && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </div>
      {primary && (
        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
      )}
    </motion.a>
  );
}
