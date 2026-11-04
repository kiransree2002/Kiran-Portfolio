import Section from "./Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="panel p-5">
            <h3 className="mb-3 font-semibold">{g.group}</h3>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
