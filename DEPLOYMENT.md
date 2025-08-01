# 🚀 Simple GitHub Pages Deployment

## Quick Deploy
```bash
./deploy-simple.sh
```

That's it! This single command will:
- ✅ Generate all static HTML files
- ✅ Fix navigation links for GitHub Pages
- ✅ Add favicons to all pages
- ✅ Commit and push to GitHub Pages branch
- ✅ Deploy your site automatically

## 📋 What Gets Deployed
- **Home page** (`index.html`)
- **Code projects** (`code.html`) 
- **Art gallery** (`art.html`)
- **Discussion** (`discussion.html`)
- **Project details**:
  - KeyMatch (`keymatch.html`)
  - AI Agent (`ai-agent.html`)
  - YeastTrack (`cell-tracker.html`)
  - Fractal Explorer (`fractal-explorer.html`)
  - Processing Games (`processing-games.html`)

## 🌐 Live Site
Your site will be available at: **https://klas96.github.io/Portfolio-Website/**

## ⏱️ Update Time
GitHub Pages typically updates within **2-5 minutes** after pushing.

## 🔧 Manual Steps (if needed)
If you need to make manual changes:

1. **Edit files** in your preferred editor
2. **Run deployment**: `./deploy-simple.sh`
3. **Wait 2-5 minutes** for updates

## 📁 File Structure
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
└── deploy-simple.sh     # One-click deploy script
```

## 🎯 GitHub Pages Branch
- **Branch**: `v.2.0.2`
- **Source**: GitHub Pages reads from this branch
- **Auto-deploy**: Every push triggers a new deployment 