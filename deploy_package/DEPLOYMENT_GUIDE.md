# Deployment Guide for klasholmgren.se

## Files to Upload

Upload these files to your web server:

### HTML Files (Root Directory)
- index.html (Home page - this should be your starting page)
- code.html (Code projects - updated with project showcase)
- art.html (Art gallery)
- discussion.html (Audio and text files)
- keymatch.html (KeyMatch project details)

### Static Assets (static/ directory)
- static/css/ (Stylesheets)
- static/js/ (JavaScript files)
- static/images/ (Images and artwork)
- static/audio_files/ (Audio files)
- static/text_files/ (PDF and text documents)
- static/CV/ (Resume and CV)

## Important Notes

1. **index.html should be your default page** - Make sure your web server is configured to serve index.html as the default page
2. **Remove any old keymatch.html** - The old KeyMatch file was causing the wrong page to show as the starting page
3. **Update file permissions** - Ensure all files are readable by the web server
4. **Test all links** - Verify that navigation between pages works correctly

## Navigation Structure

- **Home** (`index.html`) - Starting page with introduction
- **Code** (`code.html`) - Project showcase with links to individual projects
- **KeyMatch** (`keymatch.html`) - Detailed KeyMatch project page (accessible from Code page)
- **Art** (`art.html`) - Art gallery with filtering
- **Discussion** (`discussion.html`) - Audio and text files

## Server Configuration

Make sure your web server (nginx) is configured to:
- Serve index.html as the default page
- Handle static file requests properly
- Have proper file permissions

## Testing

After deployment, test:
- Home page loads correctly at http://klasholmgren.se/
- Navigation between pages works
- Code page shows project showcase
- KeyMatch page loads from the Code page
- All images and assets load properly
- Audio files play correctly
- File downloads work

