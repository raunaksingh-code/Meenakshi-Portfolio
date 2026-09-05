"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
  {
    id: "finance",
    label: "FINANCE",
    desc: "Financial modelling, valuation, performance analysis, portfolio analysis.",
    angle: 0
  },
  {
    id: "strategy",
    label: "STRATEGY",
    desc: "Business intelligence, market analysis, decision support.",
    angle: 60
  },
  {
    id: "data",
    label: "DATA",
    desc: "Excel, analytics, dashboards, structured data analysis.",
    angle: 120
  },
  {
    id: "technology",
    label: "TECHNOLOGY",
    desc: "Web applications, automation, digital tools.",
    angle: 180
  },
  {
    id: "ai",
    label: "AI",
    desc: "AI-enabled knowledge systems and intelligent business tools.",
    angle: 240
  },
  {
    id: "business",
    label: "BUSINESS",
    desc: "Cross-functional collaboration and management decision support.",
    angle: 300
  }
];

export function ProfessionalDNA() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-card-bg py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional DNA
        </motion.h2>
        <p className="mt-4 text-muted-foreground tracking-wide uppercase text-sm">
          Interactive Intelligence Map
        </p>
      </div>

      <div className="relative w-full max-w-4xl aspect-square md:aspect-[2/1] flex items-center justify-center">
        {/* Central Hub */}
        <motion.div 
          className="absolute z-20 w-32 h-32 md:w-40 md:h-40 bg-background border border-muted shadow-xl rounded-full flex items-center justify-center text-center cursor-default"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-primary font-heading font-bold text-lg md:text-xl leading-tight">
            MEENAKSHI
          </div>
        </motion.div>

        {/* Nodes */}
        {nodes.map((node) => {
          // Calculate position based on angle
          const rad = (node.angle * Math.PI) / 180;
          const radiusX = typeof window !== "undefined" && window.innerWidth < 768 ? 120 : 250;
          const radiusY = typeof window !== "undefined" && window.innerWidth < 768 ? 120 : 150;
          
          const x = Math.cos(rad) * radiusX;
          const y = Math.sin(rad) * radiusY;

          const isActive = activeNode === node.id;
          const isFaded = activeNode !== null && !isActive;

          return (
            <motion.div
              key={node.id}
              className={`absolute z-30 transition-opacity duration-300 ${isFaded ? 'opacity-30' : 'opacity-100'}`}
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.angle / 360 }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-muted shadow-lg flex items-center justify-center cursor-pointer transition-colors duration-300 hover:border-primary">
                  <span className="text-xs md:text-sm font-semibold text-foreground tracking-wider">{node.label}</span>
                </div>
                
                {/* Tooltip text */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-4 w-48 p-3 bg-foreground text-background text-xs rounded shadow-2xl z-40 text-center"
                    >
                      {node.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          <g className="origin-center translate-x-1/2 translate-y-1/2">
            {nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const radiusX = typeof window !== "undefined" && window.innerWidth < 768 ? 120 : 250;
              const radiusY = typeof window !== "undefined" && window.innerWidth < 768 ? 120 : 150;
              
              const x2 = Math.cos(rad) * radiusX;
              const y2 = Math.sin(rad) * radiusY;
              
              const isActive = activeNode === node.id;
              
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1="0"
                  y1="0"
                  x2={x2}
                  y2={y2}
                  stroke={isActive ? "var(--primary)" : "var(--muted)"}
                  strokeWidth={isActive ? 2 : 1}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: node.angle / 360 }}
                  className="transition-colors duration-300"
                />
              );
            })}
          </g>
        </svg>
      </div>
    </section>
  );
}
