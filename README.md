# Rekha SJ — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

## Edit content

All text — about, skills, experience, projects, education — lives in `src/data/profile.ts`.
The resume served by the "Resume" buttons is `public/Rekha_SJ_Resume.pdf`.

## Deploy to Netlify

The site is a static export (`npm run build` → `out/`), configured in `netlify.toml`.

- **From GitHub:** push this folder to a repo, then in Netlify choose *Add new project → Import from Git*. Build settings are read from `netlify.toml`.
- **Drag & drop:** run `npm run build` and drop the `out` folder onto Netlify's *Deploy manually* area.
