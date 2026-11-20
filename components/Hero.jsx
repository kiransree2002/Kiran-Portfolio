import { profile, heroSample } from "@/data/profile";

function MatchCard() {
  const d = (n) => ({ animationDelay: `${n * 120}ms` });
  return (
    <div className="panel p-5 text-sm" aria-label="Example of an explainable match breakdown">
      <p className="muted mb-4 text-xs">Sample output format from my resume screener</p>
      <ul className="mb-4 space-y-2">
        {heroSample.gates.map((g, i) => (
          <li key={g} className="settle flex items-center gap-2" style={d(i + 1)}>
            <span className="h-2 w-2 rounded-full bg-cobalt dark:bg-cobalt-light" />
            {g}
          </li>
        ))}
      </ul>
      <div className="settle mb-2" style={d(4)}>
        <p className="muted mb-1 text-xs">Matched skills</p>
        <div className="flex flex-wrap gap-1.5">
          {heroSample.matched.map((s) => (
            <span key={s} className="chip !border-cobalt !text-cobalt dark:!border-cobalt-light dark:!text-cobalt-light">{s}</span>
          ))}
        </div>
      </div>
      <div className="settle" style={d(5)}>
        <p className="muted mb-1 text-xs">Missing skills</p>
        <div className="flex flex-wrap gap-1.5">
          {heroSample.missing.map((s) => <span key={s} className="chip line-through">{s}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="wrap grid items-center gap-12 py-16 sm:py-24 md:grid-cols-[1.4fr_1fr]">
      <div>
        <p className="muted mb-3 text-sm">{profile.title}</p>
        <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>
        <p className="muted mt-3 max-w-xl text-sm">{profile.seeking}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">See projects</a>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost">Email me</a>
        </div>
      </div>
      <MatchCard />
    </section>
  );
}
