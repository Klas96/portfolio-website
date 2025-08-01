#!/bin/bash

# GitHub Pages Deployment Script
# This script generates static HTML files and deploys to GitHub Pages

echo "🚀 Deploying to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: This directory is not a git repository."
    echo "Please run 'git init' first."
    exit 1
fi

# Check if virtual environment exists
if [ ! -d ".venv" ]; then
    echo "❌ Error: Virtual environment not found."
    echo "Please create a virtual environment first:"
    echo "python3 -m venv .venv"
    echo "source .venv/bin/activate"
    echo "pip install -r requirements.txt"
    exit 1
fi

# Activate virtual environment and generate static files
echo "📄 Generating static HTML files..."
source .venv/bin/activate
python3 generate_static.py

# Fix navigation links for GitHub Pages
echo "🔧 Fixing navigation links..."
python3 fix_github_pages_links.py

# Check if we're on the main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    echo "⚠️  Warning: You're not on the main branch. Current branch: $CURRENT_BRANCH"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff-index --quiet HEAD --; then
    echo "ℹ️  No changes to commit."
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Update portfolio website - $(date)"
fi

# Push to remote
echo "📤 Pushing to GitHub..."
git push origin $CURRENT_BRANCH

echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site should be available at:"
echo "   https://[your-username].github.io/[repository-name]"
echo ""
echo "📝 To enable GitHub Pages:"
echo "   1. Go to your repository on GitHub"
echo "   2. Click Settings > Pages"
echo "   3. Select 'Deploy from a branch'"
echo "   4. Choose the main branch"
echo "   5. Save"
echo ""
echo "⏱️  It may take a few minutes for changes to appear."
echo ""
echo "📁 Generated files:"
echo "   - index.html (Home page)"
echo "   - code.html (Code projects)"
echo "   - art.html (Art gallery)"
echo "   - discussion.html (Audio and text files)" 