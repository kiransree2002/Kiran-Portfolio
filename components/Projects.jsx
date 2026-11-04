import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/profile";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {featured.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
      {others.length > 0 && (
        <div className="mt-6 space-y-4">
          {others.map((p) => (
            <article key={p.name} className="panel p-5">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="muted mt-1 text-sm">{p.solution}</p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                     className="ml-2 text-sm text-cobalt underline dark:text-cobalt-light">{l.label}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
