#!/bin/bash

echo "🚀 Simple GitHub Pages Deployment"
echo "================================"

# Change to project root directory
cd "$(dirname "$0")/.."

# GitHub Pages deploys from main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Switching to GitHub Pages branch (main)..."
    git checkout main
fi

# Activate virtual environment
echo "📦 Activating virtual environment..."
source .venv/bin/activate

# Generate static files (using simple generator)
echo "📄 Generating static HTML files..."
python3 scripts/generate_static_simple.py

# Fix navigation links for GitHub Pages
echo "🔧 Fixing navigation links..."
python3 scripts/fix_github_pages_links.py

# Add favicon to all pages
echo "🎨 Adding favicons..."
python3 scripts/add-favicon.py

# Update favicon links for better compatibility
echo "🔗 Updating favicon links..."
python3 scripts/update-favicon-links.py

# Stage all changes
echo "📝 Staging changes..."
git add .

# Commit with timestamp
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
echo "💾 Committing changes..."
git commit -m "Auto-deploy: $TIMESTAMP - Updated static files for GitHub Pages"

# Push to GitHub Pages (main)
echo "🚀 Pushing to GitHub Pages..."
git push origin main

echo ""
echo "✅ Deployment Complete!"
echo "🌐 Your site will be updated in 2-5 minutes at:"
echo "   https://klasholmgren.se/"
echo ""
echo "📋 What was updated:"
echo "   • Static HTML files generated"
echo "   • Navigation links fixed for GitHub Pages"
echo "   • Favicons added to all pages"
echo "   • Changes pushed to main branch"
