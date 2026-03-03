import { RoleProfile } from "@/lib/roles";

export function RoleCard({ role }: { role: RoleProfile }) {
  return (
    <article className="role-card">
      <div>
        <span className="badge">{role.roleLevel}</span>
        <h3>{role.roleName}</h3>
        <p className="small">{role.shortDescription}</p>
      </div>

      <div className="metrics">
        <div>
          <strong>{role.compensationSummary.tier2EntryLpa} LPA</strong>
          <div className="small">Tier-2 Entry</div>
        </div>
        <div>
          <strong>{role.workLifeStructure.avgHoursPerWeek}</strong>
          <div className="small">Avg Hours</div>
        </div>
        <div>
          <strong>{role.industryOutlook.futureRelevanceScore}/10</strong>
          <div className="small">Future Relevance</div>
        </div>
      </div>

      <section>
        <h4>Key Responsibilities</h4>
        <ul>
          {role.responsibilities.slice(0, 5).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Top Hiring Companies</h4>
        <p className="small">{role.topCompanies.join(" • ")}</p>
      </section>
    </article>
  );
}
