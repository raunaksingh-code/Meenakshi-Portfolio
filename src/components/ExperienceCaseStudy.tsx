"use client";

import { motion } from "framer-motion";

const flowSteps = [
  { id: "input", title: "INPUT", desc: "High-Volume Data & Documentation", delay: 0 },
  { id: "analysis", title: "VERIFICATION", desc: "Workflow Governance & Quality Control", delay: 0.2 },
  { id: "insights", title: "STANDARDIZATION", desc: "Process Guides & Mentorship", delay: 0.4 },
  { id: "tools", title: "EXECUTION", desc: "Enterprise Systems", delay: 0.6 },
  { id: "impact", title: "BUSINESS IMPACT", desc: ">95% Data Integrity & SLA Adherence", delay: 0.8 },
];

export function ExperienceCaseStudy() {
  return (
    <section className="relative w-full min-h-screen bg-white py-24 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Flagship Experience</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">IDS InfoTech Pvt. Ltd.</h2>
          <p className="mt-4 text-xl text-muted-foreground font-light">PROCESS EXCELLENCE × QUALITY ASSURANCE</p>
        </motion.div>

        {/* Animated Flow Diagram */}
        <div className="relative mt-24">
          {/* Main path line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10">
            {flowSteps.map((step, idx) => (
              <motion.div 
                key={step.id}
                className="relative flex flex-col items-center group w-full md:w-1/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.6 }}
              >
                {/* Connector for mobile */}
                {idx !== 0 && (
                  <div className="h-8 w-1 bg-muted block md:hidden mb-4" />
                )}
                
                <div className="w-16 h-16 bg-white border-2 border-primary rounded-xl rotate-45 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary">
                  <div className="-rotate-45 font-bold text-primary group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                </div>
                
                <div className="mt-8 text-center bg-background border border-muted p-4 rounded-lg shadow-sm w-full transition-shadow hover:shadow-md">
                  <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlighted Areas Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Workflow Governance",
            "Quality Control",
            "Knowledge Transfer",
            "Data Integrity",
            "SLA Adherence",
            "Process Standardization"
          ].map((area, i) => (
            <motion.div
              key={i}
              className="p-6 bg-card-bg border border-muted rounded-xl hover:border-primary/50 transition-colors cursor-default group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white" />
              </div>
              <h4 className="font-semibold text-foreground">{area}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
