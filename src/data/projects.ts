export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  data: string[];
  methodology: string;
  analysis: string[];
  insights: string[];
  solution: string;
  impact: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "fitsync",
    title: "FitSync: Campus Gym Optimization",
    category: "Operations Management",
    summary: "A smart campus gym scheduling and capacity optimization dashboard designed to balance peak usage.",
    challenge: "Uneven demand across time bands resulting in peak-hour scarcity (60%) and underutilized capacity.",
    data: [
      "131 student records",
      "47 survey responses",
      "97 timetable entries",
      "168 published slots"
    ],
    methodology: "Data-driven demand forecasting, capacity allocation principles, and service operations modelling.",
    analysis: [
      "Diagnosed demand concentration by day and time band",
      "Integrated student availability with PGPM timetable constraints",
      "Measured capacity, utilization, and equipment pressure"
    ],
    insights: [
      "Identified a clear evening bottleneck.",
      "62% of users indicated flexibility to shift their usual timing.",
      "Found that shifting 25% of evening demand relocates 157.5 visits to the morning, optimizing efficiency."
    ],
    solution: "A browser-based operations dashboard (FitSync) for dynamic scheduling and capacity decision support.",
    impact: [
      "Eliminated the need for physical capacity expansion.",
      "Reduced waiting risk by balancing service utilization."
    ],
    tags: ["Operations", "Capacity Planning", "Demand Forecasting", "Scheduling"]
  },
  {
    id: "walmart-retail",
    title: "Walmart Retail Operations Analysis",
    category: "Statistical Decision Making",
    summary: "A comprehensive statistical performance analysis of Walmart's retail operations across 45 stores.",
    challenge: "Needed to benchmark store performance and identify the statistical impact of holidays and economic variables on sales.",
    data: [
      "6,435 weekly observations",
      "45 Walmart stores",
      "Sales, holiday flag, temperature, fuel price, CPI"
    ],
    methodology: "Descriptive statistics, box plot analysis, ANOVA, Chi-Square testing, and forecasting models.",
    analysis: [
      "Analyzed overall distribution of weekly sales",
      "Tested whether average weekly sales differed significantly across stores",
      "Examined association between holiday status and sales performance category"
    ],
    insights: [
      "High variation in sales (mean 1,046,964; SD 564,366).",
      "Holiday weeks recorded 7.84% higher average weekly sales.",
      "Economic variables (CPI, fuel price) had weak correlation with weekly sales."
    ],
    solution: "A data-driven operations strategy and statistical evaluation report.",
    impact: [
      "Proved store-wise performance differences are statistically significant.",
      "Recommended combining forecast-based inventory planning rather than relying solely on holiday status."
    ],
    tags: ["Statistics", "ANOVA", "Forecasting", "Data Analysis"]
  },
  {
    id: "product-positioning",
    title: "Product Positioning Economics",
    category: "Economics & Strategy",
    summary: "Application of economic concepts to optimize the positioning and pricing strategy for a new venture.",
    challenge: "Optimizing the pricing and market position for a Rs. 6000 venture to maximize profitability.",
    data: [
      "Market demand metrics",
      "Pricing elasticity models",
      "Consumer surplus data"
    ],
    methodology: "Price elasticity of demand and consumer surplus analysis.",
    analysis: [
      "Evaluated consumer willingness to pay",
      "Modeled different price points and their impact on demand volume",
      "Calculated potential consumer surplus and captured value"
    ],
    insights: [
      "Identified optimal price points that balance volume with margin.",
      "Determined that a slight price adjustment significantly impacted inventory turnover."
    ],
    solution: "A finalized optimal positioning and pricing strategy based on empirical economic models.",
    impact: [
      "Achieved 20% profitability.",
      "Secured 100% inventory sell-through."
    ],
    tags: ["Economics", "Strategy", "Pricing", "Market Analysis"]
  }
];
