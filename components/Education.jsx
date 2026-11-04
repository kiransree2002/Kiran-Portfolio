import Section from "./Section";
import { education, certifications } from "@/data/profile";

function Item({ i }) {
  return (
    <div className="panel p-5">
      <h3 className="font-semibold">{i.title}</h3>
      <p className="muted text-sm">{i.org} · {i.period}</p>
      <p className="mt-2 text-sm leading-relaxed">{i.note}</p>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education" title="Education and certification">
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((c) => <Item key={c.title} i={c} />)}
        {education.map((e) => <Item key={e.title} i={e} />)}
      </div>
    </Section>
  );
}
