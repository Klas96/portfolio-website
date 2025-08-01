#!/bin/bash

# Quick Deployment Script for klasholmgren.se
# This script will upload the updated files to your web server

echo "🚀 Deploying to klasholmgren.se..."

# Check if deployment package exists
if [ ! -d "deploy_package" ]; then
    echo "❌ Error: deploy_package directory not found!"
    echo "Please run './deploy-live.sh' first to generate the deployment package."
    exit 1
fi

echo "📦 Deployment package found with the following files:"
ls -la deploy_package/*.html
echo ""

# Ask for deployment method
echo "Choose your deployment method:"
echo "1) Manual upload (recommended for most hosting providers)"
echo "2) rsync (if you have SSH access)"
echo "3) scp (if you have SSH access)"
echo "4) sftp (if you have SFTP access)"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "📋 Manual Upload Instructions:"
        echo ""
        echo "1. Access your web hosting control panel (cPanel, Plesk, etc.)"
        echo "2. Navigate to your website's root directory (usually public_html/ or www/)"
        echo "3. Upload these files from deploy_package/ to your root directory:"
        echo "   - index.html"
        echo "   - code.html" 
        echo "   - art.html"
        echo "   - discussion.html"
        echo "   - keymatch.html"
        echo "   - static/ (entire directory)"
        echo ""
        echo "4. Delete any old keymatch.html file that might be causing issues"
        echo "5. Test your website at http://klasholmgren.se/"
        echo ""
        echo "📁 Files ready for upload:"
        ls -la deploy_package/*.html
        echo ""
        echo "✅ Ready for manual upload!"
        ;;
    2)
        echo "🔧 rsync deployment"
        read -p "Enter your server username: " username
        read -p "Enter your server hostname: " hostname
        read -p "Enter your website path (e.g., /var/www/html/): " path
        
        echo "📤 Uploading files via rsync..."
        rsync -avz deploy_package/ $username@$hostname:$path
        
        echo "✅ rsync deployment completed!"
        ;;
    3)
        echo "🔧 scp deployment"
        read -p "Enter your server username: " username
        read -p "Enter your server hostname: " hostname
        read -p "Enter your website path (e.g., /var/www/html/): " path
        
        echo "📤 Uploading files via scp..."
        scp -r deploy_package/* $username@$hostname:$path
        
        echo "✅ scp deployment completed!"
        ;;
    4)
        echo "🔧 sftp deployment"
        read -p "Enter your server hostname: " hostname
        read -p "Enter your username: " username
        
        echo "📤 Uploading files via sftp..."
        echo "You'll be prompted for your password."
        echo ""
        echo "Once connected, run these commands:"
        echo "cd /path/to/your/website"
        echo "put -r deploy_package/*"
        echo "quit"
        echo ""
        sftp $username@$hostname
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎯 After deployment, test these URLs:"
echo "   - http://klasholmgren.se/ (should show home page)"
echo "   - http://klasholmgren.se/code.html (should show code projects)"
echo "   - http://klasholmgren.se/keymatch.html (should show KeyMatch details)"
echo "   - http://klasholmgren.se/art.html (should show art gallery)"
echo "   - http://klasholmgren.se/discussion.html (should show audio/text files)"
echo ""
echo "⏱️  It may take a few minutes for changes to appear." 