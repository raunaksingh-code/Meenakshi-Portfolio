"use client";

import { motion } from "framer-motion";
import { Users, UserCheck, Briefcase, Heart } from "lucide-react";

const leadership = [
  {
    icon: Users,
    color: "#6366F1",
    title: "Core Team Member, Life Skill Club",
    org: "Great Lakes Institute of Management, Gurgaon",
    period: "2026-27",
    description: null,
  },
  {
    icon: UserCheck,
    color: "#0EA5E9",
    title: "Class Representative",
    org: "ISF College of Pharmacy",
    period: "2019-23",
    description: "Liaison between the student body and administration.",
  },
  {
    icon: Briefcase,
    color: "#D97706",
    title: "Lead Organizer, Corporate Offsites",
    org: "Digimedicus Pvt. Ltd.",
    period: "2025-26",
    description: null,
  },
  {
    icon: Heart,
    color: "#DB2777",
    title: "Karma Yoga Volunteer",
    org: "Rural school, Gurgaon",
    period: null,
    description: "Volunteered with peers on foundational learning and mentoring sessions of primary school students.",
  },
];

export function Leadership() {
  return (
    <section className="relative w-full py-24 bg-[#F8F9FA] overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-5xl px-8">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D0A0A3]">Beyond Work</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
          Leadership &amp; Extra-Curriculars
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#D0A0A3] to-[#ECCBC9] rounded mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="bg-white border border-[#ECCBC9] rounded-2xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full shrink-0"
                    style={{ backgroundColor: `${item.color}1A`, color: item.color }}
                  >
                    <Icon size={22} strokeWidth={2.25} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 leading-snug">{item.title}</h3>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: item.color }}>
                      {item.org}
                      {item.period && <span className="text-slate-400 font-medium"> &middot; {item.period}</span>}
                    </p>
                    {item.description && (
                      <p className="text-sm text-slate-500 leading-relaxed mt-2">{item.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
