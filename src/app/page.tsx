"use client";

import { useMemo, useState } from "react";
import { RoleCard } from "@/components/RoleCard";
import {
  getRolesForCombination,
  sectors,
  Sector,
  specializations,
  Specialization,
} from "@/lib/roles";

export default function HomePage() {
  const [specialization, setSpecialization] =
    useState<Specialization>("Finance");
  const [sector, setSector] = useState<Sector>("BFSI");
  const [count, setCount] = useState(10);

  const roles = useMemo(
    () => getRolesForCombination(specialization, sector, count),
    [specialization, sector, count],
  );

  return (
    <main>
      <h1>MBA Role Explorer</h1>
      <p className="small">
        Explore the most hired entry-level roles across specialization and sector
        combinations. Each role profile includes responsibilities, skills,
        salary trajectory, work-life signals, and suitability mapping.
      </p>

      <section className="panel section">
        <div className="grid cols-3">
          <label>
            Specialization
            <select
              value={specialization}
              onChange={(event) =>
                setSpecialization(event.target.value as Specialization)
              }
            >
              {specializations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Sector
            <select
              value={sector}
              onChange={(event) => setSector(event.target.value as Sector)}
            >
              {sectors.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Roles to Show (10–12)
            <select
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
            >
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
            </select>
          </label>
        </div>
      </section>

      <section className="section grid cols-3">
        {roles.map((role) => (
          <RoleCard key={`${role.sector}-${role.specialization}-${role.roleName}`} role={role} />
        ))}
      </section>
    </main>
  );
}
