# Live Website Deployment Guide

## 🚀 Fixing klasholmgren.se - Home Page Issue

**Problem**: When visiting [http://klasholmgren.se/](http://klasholmgren.se/), you get the KeyMatch page instead of the home page.

**Solution**: Upload the updated static HTML files to your web server. The KeyMatch page is now properly integrated as a sub-page under Code projects.

## 📦 Deployment Package Ready

The deployment package has been created in `deploy_package/` with all the necessary files:

### Files to Upload to Your Web Server

#### HTML Files (Root Directory)
- `index.html` - **Home page** (this should be your starting page)
- `code.html` - **Code projects page** (updated with project showcase)
- `art.html` - Art gallery page
- `discussion.html` - Audio and text files page
- `keymatch.html` - **KeyMatch project details** (accessible from Code page)

#### Static Assets
- `static/` - Complete directory with all assets:
  - `static/css/` - Stylesheets
  - `static/js/` - JavaScript files
  - `static/images/` - Images and artwork
  - `static/audio_files/` - Audio files
  - `static/text_files/` - PDF and text documents
  - `static/CV/` - Resume and CV

## 🔧 Deployment Steps

### Option 1: Manual Upload (Recommended)

1. **Access your web server** via FTP, SFTP, or web hosting control panel
2. **Navigate to your website's root directory** (usually `public_html/` or `www/`)
3. **Upload the files** from `deploy_package/`:
   - Upload `index.html`, `code.html`, `art.html`, `discussion.html`, `keymatch.html` to the root directory
   - Upload the entire `static/` directory to the root directory
4. **Remove old files**:
   - Delete any old `keymatch.html` file that was causing the starting page issue
   - Delete any other old HTML files that might conflict
5. **Set permissions**:
   - HTML files: 644
   - Directories: 755
   - Static files: 644

### Option 2: Using rsync (if you have SSH access)

```bash
# Replace with your actual server details
rsync -avz deploy_package/ username@your-server.com:/path/to/website/
```

### Option 3: Using scp (if you have SSH access)

```bash
# Replace with your actual server details
scp -r deploy_package/* username@your-server.com:/path/to/website/
```

## ⚠️ Critical Steps

### 1. Remove Old KeyMatch File
Make sure to **delete any old `keymatch.html` file** from your web server. This file was causing the wrong page to show as the starting page.

### 2. Set index.html as Default
Ensure your web server is configured to serve `index.html` as the default page when someone visits `http://klasholmgren.se/`.

### 3. Test Navigation
After deployment, test that:
- Home page loads at `http://klasholmgren.se/`
- Navigation between pages works correctly
- Code page shows project showcase
- KeyMatch page loads from the Code page
- All images and assets load properly
- Audio files play correctly

## 🔍 Verification

After deployment, test these URLs:

- ✅ `http://klasholmgren.se/` → Should show home page
- ✅ `http://klasholmgren.se/code.html` → Should show code projects
- ✅ `http://klasholmgren.se/keymatch.html` → Should show KeyMatch details
- ✅ `http://klasholmgren.se/art.html` → Should show art gallery
- ✅ `http://klasholmgren.se/discussion.html` → Should show audio and text files

## 🎯 Navigation Structure

- **Home** (`index.html`) - Starting page with introduction
- **Code** (`code.html`) - Project showcase with links to individual projects
- **KeyMatch** (`keymatch.html`) - Detailed KeyMatch project page (accessible from Code page)
- **Art** (`art.html`) - Art gallery with filtering
- **Discussion** (`discussion.html`) - Audio and text files

## 🛠️ Server Configuration

### Nginx Configuration (if applicable)
Make sure your nginx configuration includes:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Apache Configuration (if applicable)
Make sure your `.htaccess` file includes:

```apache
DirectoryIndex index.html
```

## 📞 Troubleshooting

### If the home page still doesn't load:
1. Check that `index.html` is in the root directory
2. Verify file permissions (644 for HTML files)
3. Clear browser cache and try again
4. Check web server error logs

### If assets don't load:
1. Verify the `static/` directory is uploaded correctly
2. Check file permissions for static files
3. Verify file paths in the HTML files

### If navigation doesn't work:
1. Check that all HTML files are uploaded
2. Verify the navigation links in the HTML files
3. Test each page individually

## 🎯 Expected Result

After successful deployment:
- ✅ Visiting `http://klasholmgren.se/` shows the home page
- ✅ Navigation tabs work correctly with proper active highlighting
- ✅ Code page shows project showcase with KeyMatch link
- ✅ KeyMatch page loads properly from the Code page
- ✅ All assets (images, CSS, JS) load properly
- ✅ Audio files play correctly
- ✅ File downloads work

## 📞 Support

If you encounter issues:
1. Check your web hosting control panel for file management
2. Contact your web hosting provider for assistance
3. Verify all files are uploaded correctly
4. Test with a different browser or incognito mode

---

**Your website will be fixed once you upload these files to your web server!** 🚀 