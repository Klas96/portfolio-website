#!/bin/bash

echo "🔍 GitHub Pages Status Check"
echo "==========================="

# Change to project root directory
cd "$(dirname "$0")/.."

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if we're on the right branch
if [ "$CURRENT_BRANCH" = "main" ]; then
    echo "✅ On GitHub Pages branch (main)"
else
    echo "⚠️  Not on GitHub Pages branch (should be main)"
fi

# Check for required HTML files
echo ""
echo "📁 Checking required files:"
REQUIRED_FILES=("index.html" "code.html" "art.html" "discussion.html" "keymatch.html" "ai-agent.html" "cell-tracker.html" "fractal-explorer.html" "processing-games.html")

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (missing)"
    fi
done

# Check for favicon
echo ""
echo "🎨 Checking favicon:"
if [ -f "static/favicon.svg" ] && [ -f "static/favicon.png" ]; then
    echo "✅ Favicon files exist"
else
    echo "❌ Favicon files missing"
fi

# Check git status
echo ""
echo "📝 Git status:"
git status --porcelain

echo ""
echo "🌐 Live site: https://klasholmgren.se/"
echo "⏱️  Updates take 2-5 minutes to appear"
