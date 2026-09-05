"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const journeySteps = [
  { id: 1, title: "ACADEMICS", role: "Foundation", org: "University", impact: "Built strong analytical fundamentals." },
  { id: 2, title: "INDUSTRIAL INTERN", role: "Quality Assurance", org: "Scott Edil Labs", impact: "Mapped QC/QA systems & manufacturing compliance." },
  { id: 3, title: "PROCESS ASSOCIATE", role: "Quality Control", org: "IDS InfoTech Pvt. Ltd.", impact: "Governed high-volume data & SLA adherence (Apr 2023 - Apr 2025)." },
  { id: 4, title: "PATIENT COORDINATOR", role: "Operations", org: "Digimedicus Pvt. Ltd.", impact: "Reduced turnaround time by 30% & improved CSAT (Apr 2025 - May 2026)." },
  { id: 5, title: "MBA / PGDM", role: "Post Graduate", org: "Great Lakes Institute of Management", impact: "Specializing in Finance & Analytics." },
  { id: 6, title: "FINANCE SPECIALISATION", role: "Focus Area", org: "Academic Projects", impact: "Deep dive into financial modeling and valuation." },
  { id: 7, title: "CAPACITY OPTIMIZATION", role: "Analyst", org: "FitSync Project", impact: "Analyzed campus gym scheduling efficiency." },
  { id: 8, title: "BUSINESS INTELLIGENCE", role: "Strategist", org: "Walmart Operations", impact: "Statistical performance analysis across 45 stores." },
  { id: 9, title: "FUTURE LEADERSHIP", role: "Vision", org: "Industry", impact: "Operating at the intersection of Finance, Strategy & Tech." }
];

export function JourneyTimeline() {
  return (
    <section className="relative w-full bg-background py-24">
      <div className="px-8 md:px-24 mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
          Journey Timeline
        </h2>
        <p className="mt-4 text-muted-foreground uppercase tracking-widest text-sm">
          Past to Future
        </p>
      </div>

      <div className="w-full px-8 md:px-24 overflow-x-auto pb-16">
        {/* Timeline container */}
        <div className="flex min-w-max items-start pt-8 pb-4 relative">
          
          {/* Continuous Line */}
          <div className="absolute top-12 left-0 w-full h-[2px] bg-muted -z-10" />

          {journeySteps.map((step, index) => (
            <TimelineNode key={step.id} step={step} index={index} total={journeySteps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ step, index, total }: { step: any, index: number, total: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex flex-col items-center group w-64 shrink-0">
      {/* Node Button */}
      <button
        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 z-10 ${
          isExpanded 
            ? "bg-primary border-primary shadow-[0_0_15px_rgba(0,82,255,0.4)] scale-125" 
            : "bg-background border-primary hover:scale-110"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={`Expand details for ${step.title}`}
      />
      
      {/* Title (Always visible) */}
      <div className="mt-6 text-center px-4 h-14 flex items-start justify-center">
        <h3 className="font-heading font-bold text-foreground text-sm leading-tight">{step.title}</h3>
      </div>

      {/* Expandable Details */}
      <div 
        className={`mt-2 bg-white border border-muted p-4 rounded-lg shadow-md w-56 transition-all duration-300 overflow-hidden ${
          isExpanded ? "opacity-100 max-h-48" : "opacity-0 max-h-0 py-0 border-transparent shadow-none"
        }`}
      >
        <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{step.role}</p>
        <p className="text-sm font-semibold text-foreground mb-1">{step.org}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">{step.impact}</p>
      </div>
    </div>
  );
}
