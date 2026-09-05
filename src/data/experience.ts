export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "digimedicus",
    role: "Patient Coordinator",
    company: "Digimedicus Pvt. Ltd.",
    period: "Apr 2025 – May 2026",
    description: [
      "Identified process gaps and analyzed reference data, re-engineering operating workflows to reduce turnaround time by 30% and improve data verification accuracy.",
      "Managed 30–50 daily client interactions, coordinating with 15+ cross-functional stakeholders to resolve issues promptly and ensure consistent service delivery.",
      "Executed root cause analysis on feedback trends to deploy targeted process fixes, elevating CSAT scores from 4.1 to 4.8 and improving retention."
    ],
    skills: ["Process Re-engineering", "Data Verification", "Stakeholder Management", "Root Cause Analysis"]
  },
  {
    id: "ids-infotech",
    role: "Process Associate",
    company: "IDS InfoTech Pvt. Ltd.",
    period: "Apr 2023 – Apr 2025",
    description: [
      "Governed high-volume data and documentation workflows for 50+ global clients using enterprise systems, maintaining >95% data integrity and ensuring SLA adherence.",
      "Partnered with 10+ auditors to standardize workflows, strengthen quality controls, and mentor junior associates, ensuring consistent and high-quality delivery.",
      "Designed 5+ standardized workflow guides to enable knowledge transfer, strengthen business continuity, and reduce process dependency."
    ],
    skills: ["Workflow Governance", "Quality Control", "Documentation", "Data Integrity"]
  },
  {
    id: "scott-edil",
    role: "Industrial Intern",
    company: "Scott Edil Advanced Research Laboratories & Education Ltd.",
    period: "Internship",
    description: [
      "Studied tablet and capsule manufacturing, covering key production stages, manufacturing practices, and adherence to defined procedures.",
      "Assessed in-process quality checks through QC activities, gaining familiarity with sampling, testing parameters, and product-quality evaluation.",
      "Reviewed QA systems and documentation, including SOPs, batch records, and compliance requirements governing pharmaceutical manufacturing.",
      "Mapped the linkage between Production, QC, and QA, identifying how controls at different stages contribute to consistency, compliance, and prevention of deviations."
    ],
    skills: ["Quality Control (QC)", "Quality Assurance (QA)", "Process Mapping", "Compliance", "Manufacturing Practices"]
  }
];
