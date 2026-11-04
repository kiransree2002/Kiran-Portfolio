import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/profile";

const links = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-300/60 bg-paper/85 backdrop-blur dark:border-night-line dark:bg-night/85">
      <nav className="wrap flex h-14 items-center justify-between" aria-label="Main">
        <a href="#top" className="font-serif text-lg font-semibold">{profile.name}</a>
        <ul className="hidden items-center gap-6 text-sm sm:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="muted hover:text-cobalt dark:hover:text-cobalt-light">{label}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
