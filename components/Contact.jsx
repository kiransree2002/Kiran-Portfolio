import Section from "./Section";
import { profile } from "@/data/profile";

export default function Contact() {
  const rows = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["LinkedIn", "kiran-sreehari", profile.linkedin],
    ["GitHub", "kiransree2002", profile.github],
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="mb-6 max-w-xl text-lg">{profile.seeking} Based in {profile.location}.</p>
      <dl className="panel divide-y divide-slate-300/70 dark:divide-night-line">
        {rows.map(([k, v, href]) => (
          <div key={k} className="flex flex-wrap justify-between gap-2 px-5 py-4">
            <dt className="muted">{k}</dt>
            <dd><a href={href} className="text-cobalt hover:underline dark:text-cobalt-light">{v}</a></dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
