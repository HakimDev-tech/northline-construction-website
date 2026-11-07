# Northline Construction

A considered digital presence for a fictional independent residential builder on British Columbia's North Shore.

## Direction

An editorial architecture journal rather than a conventional contractor template: warm mineral paper, charcoal typography, restrained olive, a high-contrast serif, generous negative space, asymmetrical project sequencing, and documentary residential photography. The art direction is intentionally quiet; material, proportion and photography do the work.

## Stack

- Next.js App Router / React / TypeScript
- Custom responsive CSS design system
- Semantic sections, metadata and Open Graph basics
- Real photographic imagery from Unsplash (not generated abstract backgrounds)

## Run locally

```bash
npm install
npm run dev
```

## Concept disclosure

Northline Construction and all project descriptions are fictional portfolio material. No client relationship, completed contract, or construction outcome is represented as real.

## Deploy on Netlify

1. In Netlify, choose **Add new project → Import an existing project** and select this GitHub repository.
2. Keep the production branch as `main`.
3. The repository includes `netlify.toml`; use Node.js 22 and the Next.js runtime plugin declared there.
4. Trigger the first production deploy, then use the generated `.netlify.app` URL as the canonical site URL before adding sitemap and canonical metadata.

Every push to `main` should trigger a production deploy after the repository is connected. The repository is prepared for Netlify; this README does not imply that a Netlify site has already been created or deployed.
