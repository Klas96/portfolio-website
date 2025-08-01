#!/bin/bash

# Test Local Website Files
# This script tests the local HTML files before deployment

echo "🧪 Testing local website files..."

# Check if all required files exist
echo "📁 Checking required files..."

REQUIRED_FILES=("index.html" "code.html" "art.html" "discussion.html")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

# Check if static directory exists
if [ -d "static" ]; then
    echo "✅ static/ directory exists"
else
    echo "❌ static/ directory missing"
    exit 1
fi

# Check if static subdirectories exist
STATIC_DIRS=("css" "js" "images" "audio_files" "text_files" "CV")
for dir in "${STATIC_DIRS[@]}"; do
    if [ -d "static/$dir" ]; then
        echo "✅ static/$dir/ exists"
    else
        echo "❌ static/$dir/ missing"
        exit 1
    fi
done

# Test HTML files for basic structure
echo "🔍 Testing HTML structure..."

for file in "${REQUIRED_FILES[@]}"; do
    echo "Testing $file..."
    
    # Check if file contains basic HTML structure
    if grep -q "<!doctype html>" "$file"; then
        echo "✅ $file has proper DOCTYPE"
    else
        echo "❌ $file missing DOCTYPE"
    fi
    
    # Check if file has navigation
    if grep -q "nav-link" "$file"; then
        echo "✅ $file has navigation"
    else
        echo "❌ $file missing navigation"
    fi
    
    # Check if file has proper title
    if grep -q "<title>" "$file"; then
        echo "✅ $file has title"
    else
        echo "❌ $file missing title"
    fi
done

# Check for active tab in each file
echo "🎯 Checking active tab highlighting..."

if grep -q 'active.*href="index.html"' index.html; then
    echo "✅ index.html has Home tab active"
else
    echo "❌ index.html missing active Home tab"
fi

if grep -q 'active.*href="code.html"' code.html; then
    echo "✅ code.html has Code tab active"
else
    echo "❌ code.html missing active Code tab"
fi

if grep -q 'active.*href="art.html"' art.html; then
    echo "✅ art.html has Art tab active"
else
    echo "❌ art.html missing active Art tab"
fi

if grep -q 'active.*href="discussion.html"' discussion.html; then
    echo "✅ discussion.html has Discussion tab active"
else
    echo "❌ discussion.html missing active Discussion tab"
fi

echo ""
echo "🎉 Local testing complete!"
echo ""
echo "📋 Next steps:"
echo "1. Upload files to your web server"
echo "2. Remove old keymatch.html from server"
echo "3. Test at http://klasholmgren.se/"
echo ""
echo "📁 Files ready for upload:"
echo "   - index.html (Home page)"
echo "   - code.html (Code projects)"
echo "   - art.html (Art gallery)"
echo "   - discussion.html (Audio and text files)"
echo "   - static/ (All assets)" 