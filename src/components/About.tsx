"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "PGPM 2026-27",
    subtitle: "Great Lakes Institute of Management, Gurgaon",
    color: "#D0A0A3",
  },
  {
    icon: Briefcase,
    title: "3+ Years of Experience",
    subtitle: "Operations · Quality Assurance · Process Management",
    color: "#D0A0A3",
  },
  {
    icon: MapPin,
    title: "Gurgaon, India",
    subtitle: "Open to consulting & strategy roles",
    color: "#D0A0A3",
  },
];

export function About() {
  return (
    <section id="about" className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D0A0A3]">
            Profile Summary
          </span>
        </div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-2"
        >
          About
        </motion.h2>
        <div className="w-12 h-1 bg-[#D0A0A3] rounded mb-12" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left — Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#F5E2E3] to-[#ECEBE8] rounded-2xl p-8 md:p-10"
          >
            <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-medium">
              An emerging{" "}
              <span className="font-bold text-slate-900">
                Consulting & Strategy professional
              </span>{" "}
              with a background in Pharmaceutical Sciences and 3+ years of
              experience in operations and quality assurance. Trained in
              optimizing processes, standardizing workflows, and driving
              execution with ownership — skilled at{" "}
              <span className="font-bold text-[#D0A0A3]">
                translating rigorous analysis into impactful outcomes.
              </span>
            </p>
          </motion.div>

          {/* Right — Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                className="flex items-center gap-5 bg-white rounded-xl px-6 py-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}25` }}
                >
                  <item.icon size={20} color={item.color} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm md:text-base">
                    {item.title}
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
