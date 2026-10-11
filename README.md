# Qazi Waqas Khan, Academic Portfolio

Personal academic website for Dr. Qazi Waqas Khan, postdoctoral researcher in decentralised federated learning at Jeju National University.

## Tech stack
- Next.js 16 (App Router) and React 19
- TypeScript
- Plain CSS in `app/globals.css`
- Framer Motion and Lucide icons
- Lora (serif) and Inter (sans) fonts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment
Push to GitHub, then import the repository in the Vercel dashboard. No environment variables are needed.

## Editing content
Everything lives in **`lib/data.ts`**:
- `profile`: name, bio, mission, Scholar stats, citations per year, links, `photo`, `cv`
- `experience`: career timeline
- `latestWork`, `fundedProjects`, `flagshipProjects`, `projects`: research projects
- `publications`: all papers (titles, venues, years and citations from Google Scholar; authors and DOIs from OpenAlex)
- `researchAreas`, `education`, `awards`, `skills`

Paper counts per research area and per journal are calculated from `publications`, so adding a paper updates them automatically.

## Adding a photo or CV
1. Put the file in `public/`, for example `public/qazi.jpg` or `public/cv.pdf`.
2. Set `photo: "/qazi.jpg"` or `cv: "/cv.pdf"` in `profile` inside `lib/data.ts`.

The hero shows the photo instead of the initials, and the "Get in touch" button becomes "Download CV".

## Sections
1. Hero: name, rotating research focus, stats, latest paper
2. About: mission, bio, at a glance, research areas
3. Experience: timeline
4. Research projects: latest work, funded research, flagship projects, more projects
5. Publications: searchable and filterable list with a citations chart
6. Education and awards
7. Skills and venues
8. Footer with collaboration call to action
