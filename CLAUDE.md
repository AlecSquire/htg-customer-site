# HTG Man & Van Ltd - Website

This is the live customer site for **HTG Man & Van Ltd**, a removals and man and van company in South Devon.

- **Live site:** https://htgmanandvan.com
- **Repo:** https://github.com/AlecSquire/htg-customer-site
- **Hosting:** Netlify (project name `htg-van-and-man`)

## How deployment works

Netlify is connected to this GitHub repo. **Anything merged into the `main` branch builds automatically and goes live on htgmanandvan.com within about a minute.** There is no separate deploy step and no FTP. Git is the deploy button.

Because `main` is live, work on a branch and open a pull request. Netlify builds a **Deploy Preview** for every PR and posts a temporary URL on it, so the change can be checked on a real URL before it reaches customers.

## Getting set up (first time only)

You need [Node.js](https://nodejs.org) version 20 or newer and [Git](https://git-scm.com/downloads).

```bash
git clone https://github.com/AlecSquire/htg-customer-site.git
cd htg-customer-site
npm install
npm run dev
```

Then open http://localhost:3000 in a browser. Edits to files show up in the browser straight away without a refresh.

To check a change will actually build before pushing it:

```bash
npm run build
```

If that command fails, the Netlify deploy would fail too, so fix it before pushing.

## Making a change

```bash
git checkout main
git pull
git checkout -b short-description-of-change
```

Make the edits, check them at http://localhost:3000, then:

```bash
git add .
git commit -m "describe what changed"
git push -u origin short-description-of-change
```

Then open a pull request on GitHub. Netlify comments a preview link on the PR. Once it looks right, merge it and the live site updates.

## Tech stack

- **Next.js 16** using the App Router
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** components (these live in `components/ui` and are generated library code, so avoid editing them directly)
- **Framer Motion** for animation
- Deployed via `@netlify/plugin-nextjs`

## Where things live

```
app/
  page.tsx              # Homepage
  layout.tsx            # Shared shell, page title, meta description, favicons
  globals.css           # Global styles and Tailwind theme tokens
  about/page.tsx        # /about
  clearance/page.tsx    # /clearance
  man-and-van/page.tsx  # /man-and-van
  removals/page.tsx     # /removals
  why-choose-us/page.tsx

components/
  navigation.tsx           # Header and nav links
  hero.tsx                 # Big top section of the homepage
  services.tsx             # Services cards
  features.tsx             # "Why us" style feature blocks
  contact-form.tsx         # Quote and contact form
  customer-testimonials.tsx
  google-reviews.tsx
  checkatrade-reviews.tsx
  footer.tsx               # Footer, phone number, contact details
  ui/                      # shadcn/ui primitives, do not hand edit

public/
  images/                  # Photos and the hero van image
  icon.svg, apple-icon.png # Favicons

netlify.toml               # Build config, do not change without a reason
```

Quick guide to common jobs:

| Job | File |
|-----|------|
| Change phone number or contact details | `components/footer.tsx`, `components/contact-form.tsx`, `components/navigation.tsx` |
| Change the headline on the homepage | `components/hero.tsx` |
| Add or edit a service | `components/services.tsx` |
| Add a new page | Create `app/<page-name>/page.tsx`, then add a link in `components/navigation.tsx` |
| Change the browser tab title or Google description | `app/layout.tsx` |
| Swap a photo | Add the file to `public/images/`, then reference it as `/images/filename.webp` |
| Change colours or fonts | `app/globals.css` |

## Conventions

- Pages and components are React function components in TypeScript. Keep the existing style rather than introducing a new one.
- Styling is Tailwind utility classes in the JSX. There is no separate stylesheet per component.
- Use the existing shadcn/ui components from `components/ui` instead of adding a new UI library.
- Images go in `public/` and are referenced with a leading slash, for example `/images/hero-van.webp`. Prefer `.webp` and keep files small, this is a site people load on mobile signal.
- Use `npm`, not pnpm or yarn. There is a leftover `pnpm-lock.yaml` in the repo but the Netlify build runs `npm run build`, so `package-lock.json` is the one that matters.
- Do not commit `.next/`. It is build output and Netlify regenerates it.

## Working with Claude Code on this project

Claude Code reads this file automatically when it starts in this folder, so it already knows the above.

Useful things to ask it:

- "Start the dev server and show me the homepage"
- "Change the phone number in the footer to X and show me the preview"
- "Add a new page at /packing-service that matches the style of the removals page"
- "Run npm run build and tell me if anything is broken"
- "Create a branch, commit these changes, and push it"

Two habits worth keeping:

1. Ask it to run `npm run build` before you push. That is the same command Netlify runs.
2. Ask it to work on a branch, not directly on `main`, since `main` is the live site.

## Who to ask

Alec owns the GitHub repo and the Netlify account. Ask him for:

- Write access to the repo, if you cannot push
- Anything to do with the domain, DNS, SSL, or Netlify settings
- Merging to `main` if branch protection is on
