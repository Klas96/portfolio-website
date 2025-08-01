# Portfolio Website - GitHub Pages Ready

A personal portfolio website showcasing code projects, artwork, and discussions. This project is optimized for GitHub Pages deployment.

## 🌐 Live Demo

Your site will be available at: `https://[your-username].github.io/[repository-name]`

## 🚀 Quick Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio-website` or `klas-holmgren-portfolio`
3. Make it **public** (required for GitHub Pages)

### 2. Deploy to GitHub Pages

```bash
# Clone this repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Set up virtual environment
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Deploy to GitHub Pages
./deploy-github-pages.sh
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch
6. Click **Save**

## 📁 Project Structure

```
Portfolio-Website/
├── index.html              # Home page
├── code.html              # Code projects
├── art.html               # Art gallery
├── discussion.html        # Audio and text files
├── static/                # Assets
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   ├── images/           # Images and artwork
│   ├── audio_files/      # Audio files
│   ├── text_files/       # PDF and text documents
│   └── CV/               # Resume and CV
├── PersonalWebsite/       # Django app (for content management)
├── WebApp/               # Django settings
├── generate_static.py    # Static file generator
├── fix_github_pages_links.py  # Link fixer
├── deploy-github-pages.sh     # Deployment script
└── README.md             # This file
```

## 🛠️ Development

### Local Development

```bash
# Set up environment
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Generate static files
python3 generate_static.py
python3 fix_github_pages_links.py

# Test locally
python3 -m http.server 8080
# Open http://localhost:8080
```

### Adding New Content

#### Adding Art Projects

1. Add your image to `static/images/art_projects/`
2. Run the static generation script:
   ```bash
   python3 generate_static.py
   python3 fix_github_pages_links.py
   ```
3. Deploy: `./deploy-github-pages.sh`

#### Adding Code Projects

1. Edit `PersonalWebsite/models.py` to add new projects
2. Run the static generation script
3. Deploy

#### Adding Audio Files

1. Add your audio file to `static/audio_files/`
2. Run the static generation script
3. Deploy

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Art Gallery** - Filterable by medium (Digital, Sketch, Pastel)
- **Code Projects** - Showcase your programming work
- **Audio Player** - Play your audio files
- **File Downloads** - Download PDFs and documents
- **Modern UI** - Clean, professional design

## 🔧 Technical Details

### Static File Generation

The project uses Django for content management but generates static HTML files for GitHub Pages deployment:

- `generate_static.py` - Converts Django templates to static HTML
- `fix_github_pages_links.py` - Fixes navigation links for GitHub Pages
- `deploy-github-pages.sh` - Automated deployment script

### Content Management

- **Django Admin** - Manage content through Django admin interface
- **Database** - SQLite database for content storage
- **Static Generation** - Automatic conversion to static files

## 📝 Customization

### Styling

Edit `static/css/style.css` to customize the appearance.

### Content

- **Home Page**: Edit `PersonalWebsite/templates/index.html`
- **Code Page**: Edit `PersonalWebsite/templates/code_page.html`
- **Art Page**: Edit `PersonalWebsite/templates/art_page.html`
- **Discussion Page**: Edit `PersonalWebsite/templates/discussion_page.html`

### Adding Pages

1. Create a new Django template in `PersonalWebsite/templates/`
2. Add a view in `PersonalWebsite/views.py`
3. Add URL pattern in `WebApp/urls.py`
4. Update `generate_static.py` to include the new page
5. Update `fix_github_pages_links.py` to fix links

## 🚀 Deployment

### Automated Deployment

```bash
./deploy-github-pages.sh
```

This script will:
1. Generate static HTML files from Django templates
2. Fix navigation links for GitHub Pages
3. Commit and push changes to GitHub
4. Trigger GitHub Pages deployment

### Manual Deployment

```bash
# Generate static files
python3 generate_static.py
python3 fix_github_pages_links.py

# Deploy to GitHub
git add .
git commit -m "Update portfolio"
git push
```

## 🔍 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths in `static/images/`
2. **Audio not playing**: Verify audio file paths
3. **Links broken**: Run `python3 fix_github_pages_links.py`
4. **GitHub Pages not updating**: Wait 5-10 minutes for changes

### File Paths

All static assets should be in the `static/` directory:
- CSS: `static/css/`
- JavaScript: `static/js/`
- Images: `static/images/`
- Audio: `static/audio_files/`
- Documents: `static/text_files/`

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure all assets are committed to the repository
4. Check GitHub Pages documentation: https://pages.github.com/

## 📄 License

This project is open source and available under the MIT License.

---

**Your portfolio website is now ready for GitHub Pages deployment!** 🎉