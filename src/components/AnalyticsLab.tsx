"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioPoints = [
  { id: 1, risk: 12, return: 15, sharpe: 1.25, alloc: "Equities 60% / Bonds 40%", x: 20, y: 30 },
  { id: 2, risk: 18, return: 22, sharpe: 1.22, alloc: "Equities 80% / Alts 20%", x: 50, y: 60 },
  { id: 3, risk: 25, return: 28, sharpe: 1.12, alloc: "Equities 100%", x: 80, y: 80 },
  { id: 4, risk: 8, return: 9, sharpe: 1.12, alloc: "Bonds 80% / Equities 20%", x: 10, y: 15 },
  { id: 5, risk: 15, return: 20, sharpe: 1.33, alloc: "Optimized Multi-Asset", x: 35, y: 55 },
];

export function AnalyticsLab() {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-background py-24 px-8 md:px-24 flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Finance & Analytics Lab</h2>
        <p className="mt-4 text-muted-foreground uppercase tracking-widest text-sm">Interactive methodology demonstration</p>
      </div>

      <div className="w-full max-w-5xl bg-card-bg border border-muted rounded-2xl shadow-sm p-8 md:p-12">
        <div className="flex justify-between items-center border-b border-muted pb-4 mb-8">
          <h3 className="font-heading font-bold text-2xl">The Analytics Playground</h3>
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">Efficient Frontier Model</span>
        </div>

        <div className="relative w-full aspect-video bg-[#FAFAFA] rounded-xl border border-muted overflow-hidden">
          {/* Axis */}
          <div className="absolute bottom-12 left-12 right-12 h-[2px] bg-muted-foreground/30" />
          <div className="absolute top-12 bottom-12 left-12 w-[2px] bg-muted-foreground/30" />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Risk (Standard Deviation %)</span>
          <span className="absolute top-1/2 left-4 -translate-y-1/2 -rotate-90 text-xs font-bold text-muted-foreground uppercase tracking-wider">Expected Return %</span>
          
          {/* Frontier Curve approximation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <path 
              d="M 10% 80% Q 30% 30% 90% 10%" 
              fill="none" 
              stroke="var(--color-primary)" 
              strokeWidth="2" 
              strokeDasharray="5,5" 
              opacity="0.3"
            />
          </svg>

          {/* Data Points */}
          {portfolioPoints.map((pt) => {
            const isActive = activePoint === pt.id;
            
            return (
              <motion.div
                key={pt.id}
                className="absolute z-10"
                style={{ 
                  left: `calc(10% + ${pt.x * 0.8}%)`, 
                  bottom: `calc(10% + ${pt.y * 0.8}%)` 
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActivePoint(pt.id)}
                onMouseLeave={() => setActivePoint(null)}
              >
                <div className={`w-4 h-4 -translate-x-1/2 translate-y-1/2 rounded-full cursor-pointer transition-all duration-300 ${isActive ? 'bg-secondary scale-150 shadow-[0_0_10px_rgba(139,92,246,0.8)]' : 'bg-primary hover:scale-125'}`} />
                
                {/* Tooltip */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-foreground text-background p-4 rounded shadow-2xl z-20 pointer-events-none"
                    >
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between border-b border-background/20 pb-1">
                          <span className="text-background/70">Return:</span>
                          <span className="font-bold">{pt.return}%</span>
                        </div>
                        <div className="flex justify-between border-b border-background/20 pb-1">
                          <span className="text-background/70">Risk:</span>
                          <span className="font-bold">{pt.risk}%</span>
                        </div>
                        <div className="flex justify-between border-b border-background/20 pb-1">
                          <span className="text-background/70">Sharpe:</span>
                          <span className="font-bold text-accent-cyan">{pt.sharpe}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-background/70 block mb-1">Allocation:</span>
                          <span className="font-semibold">{pt.alloc}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
