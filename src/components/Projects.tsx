"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, FileSpreadsheet, TrendingUp, Tag, ShieldCheck, UtensilsCrossed } from "lucide-react";

const projects = [
  {
    badge: "APP",
    year: "2026",
    title: "FitSync — Smart Campus Gym Scheduling",
    description:
      "Data-driven operations dashboard for a capacity-constrained campus gym — diagnosed a 60% evening demand concentration across 131 students and modelled a 25% demand-shift to resolve equipment bottlenecks.",
    image: "/projects/fitsync.png",
    graphic: null,
    link: "https://optimize-fit-hub.lovable.app/",
    linkLabel: "Visit live app",
    linkIcon: ExternalLink,
    download: false,
  },
  {
    badge: "LIVE PROJECT",
    year: "2026",
    title: "Nestlé — Serve Safe Food",
    description:
      "Assessing food safety and hygiene practices among street-food vendors, identifying process gaps and improvement opportunities, and developing structured recommendations to strengthen standardization, compliance, and sustainable adoption.",
    image: null,
    graphic: "compliance",
    link: null,
    linkLabel: null,
    linkIcon: null,
    download: false,
  },
  {
    badge: "ANALYTICS",
    year: "2026",
    title: "Walmart Retail Operations Performance Analysis",
    description:
      "Statistical analysis of 6,435 weekly sales records across 45 stores — applied ANOVA, Chi-Square testing, forecasting and correlation analysis to benchmark store performance and quantify holiday sales impact.",
    image: null,
    graphic: "chart",
    link: "/projects/SMDM_Walmart_Analysis.xlsx",
    linkLabel: "View report (Excel)",
    linkIcon: FileSpreadsheet,
    download: true,
  },
  {
    badge: "STRATEGY",
    year: "2026",
    title: "Economic Concepts in Product Positioning",
    description:
      "Applied price elasticity of demand and consumer surplus analysis to optimize pricing for a ₹6,000 venture — achieved 20% profitability and 100% inventory sell-through.",
    image: null,
    graphic: "pricing",
    link: null,
    linkLabel: null,
    linkIcon: null,
    download: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center scroll-mt-24">
      <div className="w-full max-w-6xl px-8">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D0A0A3]">Work</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
          Academic &amp; Applied Projects
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#D0A0A3] to-[#ECCBC9] rounded mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-white border border-[#ECCBC9] rounded-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {/* Preview */}
              <div className="relative w-full h-40 bg-gradient-to-br from-[#F5E2E3] to-[#ECEBE8] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <ProjectGraphic variant={project.graphic as "chart" | "pricing" | "compliance"} />
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A4B52] bg-[#D0A0A3]/15 px-3 py-1 rounded-full">
                    {project.badge}
                  </span>
                  <span className="text-sm font-semibold text-slate-400">{project.year}</span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-900 leading-snug mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{project.description}</p>

                {project.link && project.linkIcon && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={project.download || undefined}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8A4B52] hover:text-[#D0A0A3] transition-colors w-fit"
                  >
                    {project.linkLabel}
                    <project.linkIcon size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGraphic({ variant }: { variant: "chart" | "pricing" | "compliance" }) {
  if (variant === "chart") {
    const bars = [30, 45, 38, 60, 52, 72, 65];
    return (
      <div className="w-full h-full flex items-end justify-center gap-2 px-8 pb-6 pt-8">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-6 rounded-t-sm bg-gradient-to-t from-[#D0A0A3] to-[#ECCBC9]"
            style={{ height: `${h}%` }}
          />
        ))}
        <TrendingUp className="absolute top-4 right-4 text-[#8A4B52]" size={20} />
      </div>
    );
  }

  if (variant === "compliance") {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <ShieldCheck className="text-[#D0A0A3]" size={64} strokeWidth={1.5} />
        <UtensilsCrossed className="absolute top-4 right-4 text-[#8A4B52]" size={20} />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <svg width="65%" height="65%" viewBox="0 0 200 120" fill="none">
        <path d="M10 10 L10 110 L190 110" stroke="#D0A0A3" strokeWidth="2" />
        <path d="M15 30 Q80 60 190 100" stroke="#8A4B52" strokeWidth="2.5" fill="none" />
        <path d="M15 100 Q80 60 190 20" stroke="#D0A0A3" strokeWidth="2.5" fill="none" />
      </svg>
      <Tag className="absolute top-4 right-4 text-[#8A4B52]" size={20} />
    </div>
  );
}
