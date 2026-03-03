export const specializations = [
  "Finance",
  "Marketing",
  "HR",
  "Operations",
  "Systems",
] as const;

export const sectors = [
  "Management Consulting",
  "BFSI",
  "FMCG & FMCD",
  "Technology & SaaS",
  "E-commerce",
  "Fintech",
  "HealthTech & Pharma",
  "Automotive & EV",
  "Energy",
  "Real Estate",
  "Logistics & Supply Chain",
] as const;

export type Specialization = (typeof specializations)[number];
export type Sector = (typeof sectors)[number];

export interface RoleProfile {
  roleName: string;
  specialization: Specialization;
  sector: Sector;
  roleLevel: "Entry";
  shortDescription: string;
  whatThisRoleDoes: string;
  whyCompaniesHire: string;
  responsibilities: string[];
  kpis: string[];
  technicalSkills: string[];
  toolsUsed: string[];
  certifications: string[];
  softSkills: Record<string, number>;
  personalityTraits: Record<string, number>;
  careerProgression: {
    years0to2: { title: string; salaryLpa: string };
    years3to5: { title: string; salaryLpa: string };
    years6to10: { title: string; salaryLpa: string };
    years10plus: { title: string; salaryLpa: string };
  };
  compensationSummary: {
    tier1EntryLpa: string;
    tier2EntryLpa: string;
    growthSpeed: "Slow" | "Stable" | "Fast";
  };
  workLifeStructure: {
    avgHoursPerWeek: string;
    travelFrequency: "Low" | "Medium" | "High";
    weekendWorkLikelihood: "Low" | "Medium" | "High";
    stressLevel: "Low" | "Medium" | "High";
  };
  industryOutlook: {
    growthTrend: "High" | "Moderate" | "Declining";
    automationRisk: "Low" | "Medium" | "High";
    futureRelevanceScore: number;
  };
  topCompanies: string[];
  suitability: {
    suitsIf: string[];
    avoidIf: string[];
  };
  strategicScores: {
    switchability: number;
    brandValue: number;
    learningCurveDifficulty: number;
    entryBarrier: number;
  };
}

const roleBank: Record<Specialization, string[]> = {
  Finance: [
    "Financial Analyst",
    "Corporate Finance Associate",
    "FP&A Analyst",
    "Risk Analyst",
    "Credit Analyst",
    "Treasury Analyst",
    "Investor Relations Associate",
    "M&A Research Associate",
    "Business Valuation Analyst",
    "Commercial Finance Executive",
    "Revenue Assurance Analyst",
    "Portfolio Operations Analyst",
  ],
  Marketing: [
    "Brand Management Trainee",
    "Performance Marketing Analyst",
    "Growth Marketing Associate",
    "Category Marketing Executive",
    "Product Marketing Associate",
    "CRM Campaign Analyst",
    "Digital Marketing Specialist",
    "Go-to-Market Analyst",
    "Market Research Analyst",
    "Channel Marketing Executive",
    "Trade Marketing Associate",
    "Content & Communications Executive",
  ],
  HR: [
    "Talent Acquisition Specialist",
    "HR Business Partner Associate",
    "Learning & Development Analyst",
    "Compensation & Benefits Analyst",
    "Employee Engagement Executive",
    "HR Operations Analyst",
    "Organization Development Associate",
    "HR Analytics Executive",
    "Campus Hiring Lead",
    "Performance Management Analyst",
    "Policy & Compliance Executive",
    "Employer Branding Associate",
  ],
  Operations: [
    "Operations Analyst",
    "Process Excellence Associate",
    "Supply Planning Executive",
    "Demand Planning Analyst",
    "Procurement Analyst",
    "Quality Operations Executive",
    "Service Delivery Associate",
    "Plant Operations Trainee",
    "Inventory Optimization Analyst",
    "Project Operations Coordinator",
    "Last-Mile Operations Manager",
    "Vendor Management Executive",
  ],
  Systems: [
    "Business Analyst",
    "Product Analyst",
    "Data Analyst",
    "Business Intelligence Associate",
    "ERP Functional Consultant",
    "CRM Systems Analyst",
    "Digital Transformation Associate",
    "IT Project Coordinator",
    "Cyber Risk Associate",
    "Automation Analyst",
    "Solutions Consultant",
    "Implementation Specialist",
  ],
};

const sectorCompanies: Record<Sector, string[]> = {
  "Management Consulting": ["McKinsey", "BCG", "Bain", "Accenture", "EY-Parthenon"],
  BFSI: ["HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak", "SBI"],
  "FMCG & FMCD": ["HUL", "ITC", "Nestlé", "Dabur", "Marico"],
  "Technology & SaaS": ["Google", "Microsoft", "Freshworks", "Salesforce", "Zoho"],
  "E-commerce": ["Amazon", "Flipkart", "Meesho", "Myntra", "Reliance Retail"],
  Fintech: ["Razorpay", "PhonePe", "Paytm", "Pine Labs", "BharatPe"],
  "HealthTech & Pharma": ["Dr. Reddy's", "Cipla", "Apollo", "Practo", "PharmEasy"],
  "Automotive & EV": ["Tata Motors", "Mahindra", "Ather", "Ola Electric", "Hero MotoCorp"],
  Energy: ["Reliance", "Adani", "NTPC", "Tata Power", "Shell"],
  "Real Estate": ["DLF", "Godrej Properties", "Lodha", "Brigade", "Prestige"],
  "Logistics & Supply Chain": ["DHL", "Delhivery", "Maersk", "Blue Dart", "XpressBees"],
};

function pickScale(seed: number) {
  return 5 + (seed % 5);
}

export function getRolesForCombination(
  specialization: Specialization,
  sector: Sector,
  count = 10,
): RoleProfile[] {
  return roleBank[specialization].slice(0, count).map((roleName, idx) => {
    const seed = idx + sector.length + specialization.length;
    return {
      roleName,
      specialization,
      sector,
      roleLevel: "Entry",
      shortDescription: `${roleName} in ${sector} supports business decisions with structured analysis and execution ownership. It is a strong launch role for ${specialization} careers in Indian markets.`,
      whatThisRoleDoes: `Works with cross-functional teams to deliver measurable outcomes in ${sector}, combining MBA fundamentals with real business constraints.`,
      whyCompaniesHire: `Companies hire this role to scale execution quality, improve ROI visibility, and build a future manager pipeline in ${specialization}.`,
      responsibilities: [
        `Build weekly and monthly operating dashboards for ${sector} leadership.`,
        "Coordinate with sales, finance, and operations for data-backed decisions.",
        "Track project milestones and report blockers with mitigation actions.",
        "Prepare management-ready summaries and actionable insights.",
        "Drive process standardization and documentation discipline.",
        "Support stakeholder reviews and cross-team alignment.",
        "Contribute to pilots, experiments, and execution sprints.",
      ],
      kpis: ["Revenue or cost impact", "SLA/TAT adherence", "Process quality score", "Stakeholder NPS"],
      technicalSkills: [
        "Advanced Excel / Sheets",
        "SQL or BI querying",
        `${specialization} domain fundamentals`,
      ],
      toolsUsed: ["Excel", "Power BI / Tableau", "Jira / Asana / Notion"],
      certifications: [
        specialization === "Finance" ? "NISM/NCFM/CFA L1 (optional)" : "Google / Meta / HubSpot (role-dependent)",
        "Lean Six Sigma (optional)",
      ],
      softSkills: {
        Communication: pickScale(seed + 1),
        "Analytical Ability": pickScale(seed + 2),
        Leadership: pickScale(seed + 3),
        Negotiation: pickScale(seed + 4),
        "Stakeholder Management": pickScale(seed + 1),
        "Attention to Detail": pickScale(seed + 2),
      },
      personalityTraits: {
        Analytical: pickScale(seed + 2),
        Creative: pickScale(seed + 3),
        Structured: pickScale(seed + 1),
        "Risk Appetite": pickScale(seed + 4),
        "People Interaction": pickScale(seed + 1),
        "Field Work Intensity": 4 + (seed % 4),
        "Pressure Level": 6 + (seed % 4),
      },
      careerProgression: {
        years0to2: { title: roleName, salaryLpa: "6–12" },
        years3to5: { title: "Senior Associate / Assistant Manager", salaryLpa: "12–22" },
        years6to10: { title: "Manager / Lead", salaryLpa: "22–40" },
        years10plus: { title: "Director / VP / BU Head", salaryLpa: "40+" },
      },
      compensationSummary: {
        tier1EntryLpa: "10–16",
        tier2EntryLpa: "6–11",
        growthSpeed: seed % 2 === 0 ? "Fast" : "Stable",
      },
      workLifeStructure: {
        avgHoursPerWeek: `${48 + (seed % 12)} hrs`,
        travelFrequency: seed % 3 === 0 ? "High" : seed % 3 === 1 ? "Medium" : "Low",
        weekendWorkLikelihood: seed % 2 === 0 ? "Medium" : "Low",
        stressLevel: seed % 3 === 0 ? "High" : "Medium",
      },
      industryOutlook: {
        growthTrend: "High",
        automationRisk: "Medium",
        futureRelevanceScore: 7 + (seed % 3),
      },
      topCompanies: sectorCompanies[sector],
      suitability: {
        suitsIf: [
          "You enjoy solving ambiguous business problems with data.",
          "You can communicate clearly with multiple stakeholders.",
          `You want a scalable entry path in ${sector}.`,
        ],
        avoidIf: [
          "You dislike structured reporting and recurring review cycles.",
          "You want fully independent work with minimal collaboration.",
          "You are uncomfortable with deadline-driven execution.",
        ],
      },
      strategicScores: {
        switchability: 7 + (seed % 3),
        brandValue: 6 + (seed % 4),
        learningCurveDifficulty: 5 + (seed % 4),
        entryBarrier: 4 + (seed % 5),
      },
    };
  });
}
