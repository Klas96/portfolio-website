#!/bin/bash

echo "🚀 Simple GitHub Pages Deployment"
echo "================================"

# Check if we're on the right branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "v.2.0.2" ]; then
    echo "⚠️  Switching to GitHub Pages branch (v.2.0.2)..."
    git checkout v.2.0.2
fi

# Activate virtual environment
echo "📦 Activating virtual environment..."
source .venv/bin/activate

# Generate static files
echo "📄 Generating static HTML files..."
python3 generate_static.py

# Fix navigation links for GitHub Pages
echo "🔧 Fixing navigation links..."
python3 fix_github_pages_links.py

# Add favicon to all pages
echo "🎨 Adding favicons..."
python3 add-favicon.py

# Update favicon links for better compatibility
echo "🔗 Updating favicon links..."
python3 update-favicon-links.py

# Stage all changes
echo "📝 Staging changes..."
git add .

# Commit with timestamp
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
echo "💾 Committing changes..."
git commit -m "Auto-deploy: $TIMESTAMP - Updated static files for GitHub Pages"

# Push to GitHub Pages
echo "🚀 Pushing to GitHub Pages..."
git push origin v.2.0.2

echo ""
echo "✅ Deployment Complete!"
echo "🌐 Your site will be updated in 2-5 minutes at:"
echo "   https://klas96.github.io/Portfolio-Website/"
echo ""
echo "📋 What was updated:"
echo "   • Static HTML files generated"
echo "   • Navigation links fixed for GitHub Pages"
echo "   • Favicons added to all pages"
echo "   • Changes pushed to v.2.0.2 branch" 