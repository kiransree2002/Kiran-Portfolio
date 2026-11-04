export default function ProjectCard({ project: p }) {
  return (
    <article className="panel p-6 sm:p-8">
      <h3 className="font-serif text-2xl font-semibold">{p.name}</h3>
      <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
        <div><dt className="font-semibold">Problem</dt><dd className="muted">{p.problem}</dd></div>
        <div><dt className="font-semibold">Solution</dt><dd className="muted">{p.solution}</dd></div>
        {p.contribution.length > 0 && (
          <div>
            <dt className="font-semibold">What I built</dt>
            <dd>
              <ul className="muted mt-1 list-disc space-y-1 pl-5">
                {p.contribution.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </dd>
          </div>
        )}
        {p.outcome && <div><dt className="font-semibold">Outcome</dt><dd className="muted">{p.outcome}</dd></div>}
      </dl>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {p.links.map((l, i) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
             className={`btn ${i === 0 ? "btn-primary" : "btn-ghost"}`}>{l.label}</a>
        ))}
      </div>
    </article>
  );
}
