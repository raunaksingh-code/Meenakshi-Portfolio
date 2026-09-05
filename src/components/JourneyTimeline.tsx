"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const journeySteps = [
  { id: 1, title: "ACADEMICS", role: "Foundation", org: "University", impact: "Built strong analytical fundamentals." },
  { id: 2, title: "INDUSTRIAL INTERN", role: "Quality Assurance", org: "Scott Edil Labs", impact: "Mapped QC/QA systems & manufacturing compliance." },
  { id: 3, title: "PROCESS ASSOCIATE", role: "Quality Control", org: "IDS InfoTech Pvt. Ltd.", impact: "Governed high-volume data & SLA adherence (Apr 2023 – Apr 2025)." },
  { id: 4, title: "PATIENT COORDINATOR", role: "Operations", org: "Digimedicus Pvt. Ltd.", impact: "Reduced turnaround time by 30% & improved CSAT (Apr 2025 – May 2026)." },
  { id: 5, title: "PGPM", role: "Post Graduate", org: "Great Lakes Institute of Management", impact: "Specializing in Operations & Analytics." },
  { id: 6, title: "CAPACITY OPTIMIZATION", role: "Analyst", org: "FitSync Project", impact: "Analyzed campus gym scheduling efficiency." },
  { id: 7, title: "BUSINESS INTELLIGENCE", role: "Strategist", org: "Walmart Operations", impact: "Statistical performance analysis across 45 stores." },
  { id: 8, title: "FUTURE LEADERSHIP", role: "Vision", org: "Industry", impact: "Operating at the intersection of Consulting, Strategy & Tech." },
];

export function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-background py-24">
      {/* Section header */}
      <div className="px-8 md:px-16 mb-16">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D0A0A3]">Career Path</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-2">
          Journey Timeline
        </h2>
        <div className="w-12 h-1 bg-[#D0A0A3] rounded" />
      </div>

      {/* Scrollable timeline */}
      <div className="w-full px-8 md:px-16 overflow-x-auto pb-8 scrollbar-thin">
        <div className="flex min-w-max items-center relative pt-4 pb-32">

          {/* Connecting Line */}
          <div className="absolute top-[2.25rem] left-0 w-full h-[2px] bg-[#ECCBC9] z-0" />

          {journeySteps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center w-48 shrink-0 group cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {/* Step Number above dot */}
              <span className="text-[10px] font-bold text-[#D0A0A3] tracking-widest mb-2 uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Node Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className={`w-5 h-5 rounded-full border-2 z-10 transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#D0A0A3] border-[#D0A0A3] shadow-[0_0_12px_rgba(208,160,163,0.5)] scale-125"
                    : "bg-white border-[#D0A0A3]"
                }`}
              />

              {/* Title */}
              <div className="mt-4 text-center px-2">
                <h3
                  className={`font-heading font-bold text-xs leading-tight transition-colors duration-200 ${
                    activeIndex === index ? "text-[#D0A0A3]" : "text-slate-700"
                  }`}
                >
                  {step.title}
                </h3>
              </div>

              {/* Expandable Card — drops down */}
              <motion.div
                initial={false}
                animate={activeIndex === index ? { opacity: 1, y: 0, height: "auto" } : { opacity: 0, y: -8, height: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 overflow-hidden w-44"
              >
                <div className="bg-white border border-[#ECCBC9] rounded-xl p-4 shadow-md">
                  <p className="text-[10px] text-[#D0A0A3] font-bold uppercase tracking-wider mb-1">{step.role}</p>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{step.org}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.impact}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
