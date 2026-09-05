"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/skills";

export function SkillConstellation() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const coreSkills = skills.filter((s) => s.category === "core");
  
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center min-h-[80vh]">
      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Skill Ecosystem</h2>
        <p className="mt-4 text-muted-foreground uppercase tracking-widest text-sm">Interactive Skill Constellation</p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Core Skill Nodes */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {coreSkills.map((core) => {
            const isActive = activeGroup === core.group;
            return (
              <motion.button
                key={core.id}
                className={`relative px-6 py-3 rounded-full border-2 transition-all duration-300 font-bold tracking-wider text-sm ${
                  isActive 
                    ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(0,82,255,0.4)]" 
                    : "bg-background border-muted text-foreground hover:border-primary/50 hover:bg-card-bg"
                }`}
                onClick={() => setActiveGroup(isActive ? null : core.group)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {core.label}
              </motion.button>
            );
          })}
        </div>

        {/* Related Skills Display */}
        <div className="relative w-full h-[400px] flex items-center justify-center bg-card-bg rounded-2xl border border-muted shadow-inner overflow-hidden">
          <AnimatePresence mode="wait">
            {activeGroup ? (
              <motion.div
                key={activeGroup}
                className="absolute inset-0 flex flex-wrap content-center justify-center gap-4 p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                {skills
                  .filter((s) => s.category === "related" && s.group === activeGroup)
                  .map((related, i) => (
                    <motion.div
                      key={related.id}
                      className="px-5 py-2 bg-white border border-muted shadow-md rounded-lg text-foreground font-medium text-sm flex items-center cursor-default hover:border-secondary hover:shadow-lg transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary mr-3" />
                      {related.label}
                    </motion.div>
                  ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                className="text-muted-foreground font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Select a core skill to explore its ecosystem.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
