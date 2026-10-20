# Simple GitHub Pages Deployment

## Quick Deploy
```bash
./scripts/deploy-simple.sh
```

That single command will:
- Generate all static HTML files
- Fix navigation links for GitHub Pages
- Add favicons to all pages
- Commit and push to `main`
- Deploy via GitHub Pages automatically

## Branches

- **`dev`** — default branch for PRs and day-to-day work.
- **`main`** — production. GitHub Pages publishes from here (root `/`).

Merge PRs into `dev`, then promote to `main` when you want the live site updated.

## Push to deploy

GitHub Pages is configured to publish from **`main`** (root `/`).

Any push to `main` updates the live site (usually within 2–5 minutes).

## Live Site
**https://klasholmgren.se/**

## Manual Steps (if needed)
1. Edit files in your preferred editor
2. Commit and push to `main`, or run `./scripts/deploy-simple.sh`
3. Wait 2–5 minutes for updates

## File Structure
```
Portfolio-Website/
├── index.html              # Home page
├── code.html              # Code projects
├── art.html               # Art gallery
├── discussion.html        # Discussion
├── keymatch.html         # KeyMatch details
├── ai-agent.html         # AI Agent details
├── cell-tracker.html     # YeastTrack details
├── fractal-explorer.html # Fractal Explorer details
├── processing-games.html # Processing Games details
├── static/               # CSS, JS, images
└── scripts/deploy-simple.sh
```

## GitHub Pages Source
- **Branch**: `main`
- **Path**: `/` (repository root)
- **Custom domain**: `klasholmgren.se`
