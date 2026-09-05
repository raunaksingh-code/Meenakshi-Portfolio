"use client";

import { motion } from "framer-motion";

const achievements = [
  { id: 1, title: "[Placeholder: Competition / Award]", org: "[Organization]", year: "2026", type: "competition" },
  { id: 2, title: "[Placeholder: Certification]", org: "[Institution]", year: "2025", type: "certification" },
  { id: 3, title: "Process Excellence", org: "IDS InfoTech", year: "2024", type: "professional" },
  { id: 4, title: "High CSAT Score (4.8)", org: "Digimedicus", year: "2026", type: "professional" },
];

export function AchievementGallery() {
  return (
    <section className="relative w-full py-32 bg-[#F8F9FA] overflow-hidden flex flex-col items-center">
      <div className="text-center mb-20 z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Achievement Gallery</h2>
        <p className="mt-4 text-muted-foreground uppercase tracking-widest text-sm">Milestones & Recognition</p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-8 perspective-1000">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              className="group relative h-80 w-full transform-style-3d cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
            >
              {/* Glass-like floating card */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl p-6 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_15px_35px_0_rgba(0,82,255,0.15)]">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {ach.type}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">{ach.year}</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">{ach.org}</p>
                </div>
                
                <div className="w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
