#!/bin/bash

# Live Website Deployment Script
# This script deploys the static HTML files to klasholmgren.se

echo "🚀 Deploying to klasholmgren.se..."

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

# Fix navigation links for live website
echo "🔧 Fixing navigation links..."
python3 fix_github_pages_links.py

# Create a deployment package
echo "📦 Creating deployment package..."
DEPLOY_DIR="deploy_package"
mkdir -p $DEPLOY_DIR

# Copy HTML files
cp *.html $DEPLOY_DIR/

# Copy static assets
cp -r static $DEPLOY_DIR/

# Create a simple deployment guide
cat > $DEPLOY_DIR/DEPLOYMENT_GUIDE.md << 'EOF'
# Deployment Guide for klasholmgren.se

## Files to Upload

Upload these files to your web server:

### HTML Files (Root Directory)
- index.html (Home page - this should be your starting page)
- code.html (Code projects)
- art.html (Art gallery)
- discussion.html (Audio and text files)

### Static Assets (static/ directory)
- static/css/ (Stylesheets)
- static/js/ (JavaScript files)
- static/images/ (Images and artwork)
- static/audio_files/ (Audio files)
- static/text_files/ (PDF and text documents)
- static/CV/ (Resume and CV)

## Important Notes

1. **index.html should be your default page** - Make sure your web server is configured to serve index.html as the default page
2. **Remove any old keymatch.html** - This was causing the wrong page to show as the starting page
3. **Update file permissions** - Ensure all files are readable by the web server
4. **Test all links** - Verify that navigation between pages works correctly

## Server Configuration

Make sure your web server (nginx) is configured to:
- Serve index.html as the default page
- Handle static file requests properly
- Have proper file permissions

## Testing

After deployment, test:
- Home page loads correctly at http://klasholmgren.se/
- Navigation between pages works
- All images and assets load properly
- Audio files play correctly
- File downloads work

EOF

echo "✅ Deployment package created in '$DEPLOY_DIR/'"
echo ""
echo "📋 Next steps:"
echo "1. Upload the contents of '$DEPLOY_DIR/' to your web server"
echo "2. Make sure index.html is set as the default page"
echo "3. Remove any old keymatch.html file from your server"
echo "4. Test the website at http://klasholmgren.se/"
echo ""
echo "📁 Files ready for upload:"
echo "   - index.html (Home page)"
echo "   - code.html (Code projects)"
echo "   - art.html (Art gallery)"
echo "   - discussion.html (Audio and text files)"
echo "   - static/ (All assets)" 