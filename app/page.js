import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="wrap muted py-10 text-sm">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
