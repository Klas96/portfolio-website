#!/bin/bash

echo "🔍 GitHub Pages Status Check"
echo "==========================="

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if we're on the right branch
if [ "$CURRENT_BRANCH" = "v.2.0.2" ]; then
    echo "✅ On GitHub Pages branch"
else
    echo "⚠️  Not on GitHub Pages branch (should be v.2.0.2)"
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
echo "🌐 Live site: https://klas96.github.io/Portfolio-Website/"
echo "⏱️  Updates take 2-5 minutes to appear" 