"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch (e) {}
  };

  return (
    <button onClick={toggle} className="btn btn-ghost !px-3 !py-1.5" aria-label="Toggle dark mode">
      {dark ? "Light" : "Dark"}
    </button>
  );
}
