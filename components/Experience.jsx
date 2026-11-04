import Section from "./Section";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 border-l border-slate-300 pl-6 dark:border-night-line">
        {experience.map((e) => (
          <li key={e.role + e.org} className="relative">
            <span className="absolute -left-[30px] top-2 h-2.5 w-2.5 rounded-full bg-cobalt dark:bg-cobalt-light" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-serif text-xl font-semibold">{e.role}, {e.org}</h3>
              <p className="muted text-sm">{e.period}</p>
            </div>
            {e.place && <p className="muted text-sm">{e.place}</p>}
            <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
