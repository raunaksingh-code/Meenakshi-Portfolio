"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

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

      <div className="relative z-10 w-full max-w-3xl mx-auto px-8">
        <motion.span
          className="block text-xs font-bold tracking-[0.2em] uppercase text-[#D0A0A3]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.span>

        <motion.h2
          className="font-heading text-5xl md:text-6xl font-extrabold tracking-tight mt-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Contact
        </motion.h2>

        <div className="w-16 h-1 bg-gradient-to-r from-[#D0A0A3] to-[#ECCBC9] rounded mb-10" />

        <motion.p
          className="text-white/70 max-w-xl text-base md:text-lg leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Open to conversations around operations, strategy and consulting roles, as well as collaboration on applied projects.
        </motion.p>

        <div className="flex flex-col gap-6">
          <ContactRow icon={<Mail size={20} />} label="meenakshibansal1701@gmail.com" href="mailto:meenakshibansal1701@gmail.com" />
          <ContactRow icon={<Phone size={20} />} label="965****208" />
          <ContactRow
            icon={<LinkedInIcon />}
            label="www.linkedin.com/in/meenakshi-bansal-a5a05622a"
            href="https://www.linkedin.com/in/meenakshi-bansal-a5a05622a"
          />
        </div>
      </div>

      <div className="absolute bottom-8 text-white/30 text-xs font-mono tracking-widest uppercase">
        © {new Date().getFullYear()} Meenakshi. All rights reserved.
      </div>
    </footer>
  );
}

function ContactRow({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const content = (
    <motion.div
      className="flex items-center gap-4 group"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#D0A0A3]/15 border border-[#D0A0A3]/30 text-[#D0A0A3] shrink-0 transition-colors group-hover:bg-[#D0A0A3]/25">
        {icon}
      </div>
      <span className="text-white/90 font-medium break-all">{label}</span>
    </motion.div>
  );

  if (!href) return content;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-fit">
      {content}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}
