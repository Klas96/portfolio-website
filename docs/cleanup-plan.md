# 🧹 Project Cleanup Plan

## 🗑️ Files to Remove
- `data_depricate.py` - Deprecated data file
- `high-performance-computing.html` - Empty file
- `deploy-now.sh` - Redundant deployment script
- `deploy.sh` - Old deployment script
- `deploy-github-pages.sh` - Replaced by deploy-simple.sh
- `deploy-live.sh` - Not needed for GitHub Pages
- `test-local.sh` - No longer needed
- `app.yaml` - Google App Engine config (not using)
- `Procfile` - Heroku config (not using)
- `db.sqlite3` - Database file (not needed for static site)
- `deploy_package/` - Temporary deployment directory
- `old/` - Old files directory
- `staticfiles/` - Django static files (not needed)
- `WebApp/` - Django app (not needed for static site)
- `PersonalWebsite/` - Django app (not needed for static site)
- `data/` - Data directory (not needed)

## 📁 Files to Keep
### Core HTML Files
- `index.html` - Home page
- `code.html` - Code projects
- `art.html` - Art gallery
- `discussion.html` - Discussion
- `keymatch.html` - KeyMatch details
- `ai-agent.html` - AI Agent details
- `cell-tracker.html` - YeastTrack details
- `fractal-explorer.html` - Fractal Explorer details
- `processing-games.html` - Processing Games details

### Essential Scripts
- `deploy-simple.sh` - Main deployment script
- `check-status.sh` - Status checker
- `generate_static.py` - Static file generator
- `fix_github_pages_links.py` - Link fixer
- `add-favicon.py` - Favicon adder
- `update-favicon-links.py` - Favicon updater

### Documentation
- `README.md` - Main documentation
- `DEPLOYMENT.md` - Deployment guide
- `GITHUB_PAGES_SETUP.md` - Setup guide
- `LIVE_DEPLOYMENT_GUIDE.md` - Live deployment guide

### Static Assets
- `static/` - CSS, JS, images, fonts

### Configuration
- `.gitignore` - Git ignore rules
- `requirements.txt` - Python dependencies
- `manage.py` - Django management (for static generation)

## 🎯 Result
Clean, focused repository with only essential files for GitHub Pages deployment. 