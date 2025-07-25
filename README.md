# Klas Holmgren Portfolio Website

A static portfolio website showcasing Klas Holmgren's work in programming, art, and discussions.

## Features

- **Home Page**: Introduction and overview of Klas's work
- **Code Page**: Showcase of programming projects and skills
- **Art Page**: Gallery of artwork with filtering by medium (Digital, Sketch, Pastel)
- **Discussion Page**: Audio files and text documents for thoughts and insights

## Structure

```
├── index.html          # Home page
├── code.html           # Code projects page
├── art.html            # Art gallery page
├── discussion.html     # Audio and text files page
├── static/             # Static assets
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   ├── images/        # Images and artwork
│   ├── audio_files/   # Audio files
│   ├── text_files/    # PDF and text documents
│   └── CV/           # Resume/CV files
└── README.md          # This file
```

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch"
5. Choose the main branch and save
6. Your site will be available at `https://yourusername.github.io/repository-name`

## Local Development

To run this site locally:

1. Clone the repository
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Customization

- Edit the HTML files to update content
- Modify `static/css/style.css` for styling changes
- Add new images to `static/images/art_projects/` for the art gallery
- Add new audio files to `static/audio_files/` for the discussion page
- Add new text files to `static/text_files/` for the discussion page

## Technologies Used

- HTML5
- CSS3 with Bootstrap
- JavaScript for interactivity
- Responsive design for mobile compatibility

## License

This project is open source and available under the MIT License.