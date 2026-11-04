# Kiran Sree Hari: AI/ML Portfolio

A responsive portfolio for an AI/ML engineer. It leads with the strongest projects (an AI resume screener and a YOLO + RAG vehicle damage assistant) and supports light and dark mode (dark by default).

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables.

## Run locally
Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build: `npm run build && npm start`.

## Project structure
```
app/            layout, global styles, page
components/     Navbar, Hero, About, Projects, ProjectCard, Experience, Skills, Education, Contact, Section, ThemeToggle
data/profile.js all site content
```

## Customize
- **Content:** edit `data/profile.js` (contact details, projects, experience, skills, education). No component changes needed.
- **Hero sample card:** `heroSample` in `data/profile.js` is an illustrative format example. Replace or remove it as you like.
- **Colors and fonts:** `tailwind.config.js` (`paper`, `ink`, `night`, `cobalt`, `serif`).
- **LinkedIn URL:** your resume and LinkedIn PDF show different URLs. Confirm the right one in `data/profile.js`.
- **Deploy:** push to GitHub and import the repo in Vercel; no configuration needed.
