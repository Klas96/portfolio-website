# GitHub Pages Setup Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## What's Been Created

Your Django portfolio website has been successfully converted to a static site with the following files:

### Main Pages
- `index.html` - Home page with introduction and navigation
- `code.html` - Code projects showcase
- `art.html` - Art gallery with filtering functionality
- `discussion.html` - Audio files and text documents

### Supporting Files
- `README.md` - Project documentation
- `deploy-github-pages.sh` - Deployment script
- `.gitignore` - Git ignore rules
- `static/` - All your assets (CSS, JS, images, audio, etc.)

## Quick Start

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio-website` or `klas-holmgren-portfolio`
3. Make it public (required for GitHub Pages)

### 2. Initialize Git and Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch
6. Click **Save**

### 4. Your Site is Live!

Your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Custom Domain (Optional)

If you want to use a custom domain:

1. In GitHub repository Settings > Pages
2. Enter your domain in the **Custom domain** field
3. Create a `CNAME` file in your repository root with your domain name
4. Update your DNS settings to point to GitHub Pages

## Local Development

To test your site locally:

```bash
# Start a local server
python -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Deployment

For future updates, use the deployment script:

```bash
./deploy-github-pages.sh
```

Or manually:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Customization

### Adding New Art Projects

1. Add your image to `static/images/art_projects/`
2. Edit `art.html` and add a new `<div>` element following the existing pattern
3. Set the appropriate `data-medium` attribute (DIGITAL, SKETCH, or PASTEL)

### Adding New Code Projects

1. Edit `code.html` and add a new project link in the portfolio section

### Adding New Audio Files

1. Add your audio file to `static/audio_files/`
2. Edit `discussion.html` and add a new `<li>` element in the audio section

### Adding New Text Files

1. Add your PDF/text file to `static/text_files/`
2. Edit `discussion.html` and add a new `<li>` element in the text section

## Features Preserved

✅ **Navigation** - All pages are properly linked
✅ **Art Gallery** - With filtering by medium (Digital, Sketch, Pastel)
✅ **Audio Player** - All audio files are accessible
✅ **File Downloads** - PDF and text files are downloadable
✅ **Responsive Design** - Works on mobile and desktop
✅ **Styling** - All CSS and Bootstrap styling preserved

## Troubleshooting

### Common Issues

1. **Images not loading**: Check that all image paths in `art.html` match your actual files
2. **Audio not playing**: Verify audio file paths in `discussion.html`
3. **Styling issues**: Ensure `static/css/` files are properly linked
4. **GitHub Pages not updating**: Wait 5-10 minutes for changes to propagate

### File Structure Check

Ensure your repository has this structure:
```
├── index.html
├── code.html
├── art.html
├── discussion.html
├── static/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── audio_files/
│   ├── text_files/
│   └── CV/
├── README.md
├── deploy-github-pages.sh
└── .gitignore
```

## Next Steps

1. **Test your site** - Visit your GitHub Pages URL and test all functionality
2. **Customize content** - Update text, add new projects, modify styling
3. **Add analytics** - Consider adding Google Analytics or similar
4. **SEO optimization** - Add meta tags, descriptions, and keywords
5. **Performance** - Optimize images and assets for faster loading

## Support

If you encounter issues:
- Check GitHub Pages documentation: https://pages.github.com/
- Verify all file paths are correct
- Ensure all assets are committed to the repository
- Check browser console for JavaScript errors

Your static portfolio website is now ready for GitHub Pages deployment! 🚀 