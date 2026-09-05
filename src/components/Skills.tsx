"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  BarChart3,
  KanbanSquare,
  Handshake,
  FolderKanban,
  ShieldCheck,
  FileSpreadsheet,
  PieChart,
  Sparkles,
  Database,
} from "lucide-react";

const skills = [
  { label: "Business Process Optimisation", icon: Workflow, color: "#6366F1" },
  { label: "Data-Driven Decision Making", icon: BarChart3, color: "#0EA5E9" },
  { label: "Project Management", icon: KanbanSquare, color: "#7C3AED" },
  { label: "Stakeholder Coordination", icon: Handshake, color: "#D97706" },
  { label: "Workflow & Documentation Management", icon: FolderKanban, color: "#0D9488" },
  { label: "Quality & Compliance Management", icon: ShieldCheck, color: "#059669" },
  { label: "Excel", icon: FileSpreadsheet, color: "#16A34A" },
  { label: "Power BI", icon: PieChart, color: "#CA8A04" },
  { label: "GenAI", icon: Sparkles, color: "#DB2777" },
  { label: "ERP Fundamentals", icon: Database, color: "#2563EB" },
];

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center scroll-mt-24">
      <div className="w-full max-w-5xl px-8">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D0A0A3]">Toolkit</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
          Skills
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#D0A0A3] to-[#ECCBC9] rounded mb-12" />

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border font-semibold text-sm cursor-default"
                style={{
                  backgroundColor: `${skill.color}14`,
                  borderColor: `${skill.color}33`,
                  color: skill.color,
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
              >
                <Icon size={18} strokeWidth={2.25} />
                {skill.label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
