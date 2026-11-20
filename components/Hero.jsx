import { profile } from "@/data/profile";

function HighlightsCard() {
  const d = (n) => ({ animationDelay: `${n * 120}ms` });
  return (
    <div className="panel p-5 text-sm" aria-label="AI/ML Project Highlights">
      <p className="font-semibold text-ink dark:text-slate-200">AI/ML Project Highlights</p>

      {/* AI Resume Screener */}
      <div className="mt-4 border-b border-slate-200/80 pb-4 dark:border-night-line">
        <p className="text-xs font-medium text-cobalt dark:text-cobalt-light">AI Resume Screener</p>
        <div className="settle mt-2.5" style={d(1)}>
          <p className="muted mb-1 text-xs">Matched Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {["Python", "NLP", "SQL"].map((s) => (
              <span key={s} className="chip !border-cobalt !text-cobalt dark:!border-cobalt-light dark:!text-cobalt-light">{s}</span>
            ))}
          </div>
        </div>
        <div className="settle mt-2" style={d(2)}>
          <p className="muted mb-1 text-xs">Missing Skills</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="chip line-through">Docker</span>
          </div>
        </div>
      </div>

      {/* Revio AI */}
      <div className="mt-4">
        <p className="text-xs font-medium text-cobalt dark:text-cobalt-light">Revio AI</p>
        <ul className="mt-2.5 space-y-1.5">
          {["Sentiment Analysis", "Topic Classification", "Priority Detection"].map((feat, i) => (
            <li key={feat} className="settle flex items-center gap-2" style={d(i + 3)}>
              <span className="h-1.5 w-1.5 rounded-full bg-cobalt dark:bg-cobalt-light" />
              <span className="text-xs text-ink-soft dark:text-slate-300">{feat}</span>
            </li>
          ))}
        </ul>
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
      <HighlightsCard />
    </section>
  );
}
