export interface SkillNode {
  id: string;
  label: string;
  category: "core" | "related";
  group: string;
}

export const skills: SkillNode[] = [
  // Core Skills
  { id: "finance", label: "FINANCE", category: "core", group: "finance" },
  { id: "analytics", label: "ANALYTICS", category: "core", group: "analytics" },
  { id: "strategy", label: "STRATEGY", category: "core", group: "strategy" },
  { id: "technology", label: "TECHNOLOGY", category: "core", group: "technology" },
  { id: "ai", label: "AI", category: "core", group: "ai" },
  { id: "business", label: "BUSINESS", category: "core", group: "business" },

  // Finance Related
  { id: "f-model", label: "Financial Modelling", category: "related", group: "finance" },
  { id: "f-dcf", label: "DCF", category: "related", group: "finance" },
  { id: "f-val", label: "Valuation", category: "related", group: "finance" },
  { id: "f-stmt", label: "Financial Statement Analysis", category: "related", group: "finance" },
  { id: "f-ratio", label: "Ratio Analysis", category: "related", group: "finance" },
  { id: "f-port", label: "Portfolio Management", category: "related", group: "finance" },
  { id: "f-risk", label: "Risk Analysis", category: "related", group: "finance" },

  // Analytics Related
  { id: "a-excel", label: "Excel", category: "related", group: "analytics" },
  { id: "a-data", label: "Data Analysis", category: "related", group: "analytics" },
  { id: "a-dash", label: "Dashboards", category: "related", group: "analytics" },
  { id: "a-bi", label: "Business Intelligence", category: "related", group: "analytics" },
  { id: "a-vis", label: "Data Visualization", category: "related", group: "analytics" },

  // Strategy Related
  { id: "s-market", label: "Market Analysis", category: "related", group: "strategy" },
  { id: "s-decision", label: "Decision Support", category: "related", group: "strategy" },
  { id: "s-port", label: "Portfolio Strategy", category: "related", group: "strategy" },

  // Technology Related
  { id: "t-py", label: "Python", category: "related", group: "technology" },
  { id: "t-html", label: "HTML", category: "related", group: "technology" },
  { id: "t-css", label: "CSS", category: "related", group: "technology" },
  { id: "t-js", label: "JavaScript", category: "related", group: "technology" },
  { id: "t-flask", label: "Flask", category: "related", group: "technology" },
  { id: "t-git", label: "GitHub", category: "related", group: "technology" },
  { id: "t-vercel", label: "Vercel", category: "related", group: "technology" },

  // AI Related
  { id: "ai-llm", label: "LLM Integration", category: "related", group: "ai" },
  { id: "ai-rag", label: "RAG", category: "related", group: "ai" },
  { id: "ai-auto", label: "Process Automation", category: "related", group: "ai" }
];
