# MBA Role Explorer (Next.js + TypeScript)

This app helps MBA students explore **10–12 commonly hired entry-level roles** for each **Specialization × Sector** combination.

## Features
- 5 specializations: Finance, Marketing, HR, Operations, Systems
- 11 sectors: including BFSI, Consulting, SaaS, E-commerce, Fintech, etc.
- Structured role profile model matching your requested schema:
  - Role identity and overview
  - Responsibilities and KPIs
  - Skills, tools, certifications
  - Soft-skill and personality ratings
  - Career progression and salary ranges
  - Work-life pattern, industry outlook, strategic scores
  - Top hiring companies and suitability guidance

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes
- Data is generated from a curated role bank and sector baselines to provide broad coverage across all combinations.
- You can plug in primary salary surveys or placement reports to replace generated ranges with institute-specific data.
