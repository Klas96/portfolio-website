#!/usr/bin/env python3
"""
Update favicon links to include both SVG and PNG versions for better browser compatibility.
"""

import os
import re

def update_favicon_in_file(filename):
    """Update favicon links in a single HTML file."""
    print(f"🔧 Updating favicon links in {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace existing favicon link with comprehensive favicon links
    old_favicon = r'<link rel="icon" type="image/svg\+xml" href="static/favicon\.svg">'
    new_favicons = '''    <link rel="icon" type="image/svg+xml" href="static/favicon.svg">
    <link rel="icon" type="image/png" href="static/favicon.png">
    <link rel="shortcut icon" href="static/favicon.png">'''
    
    content = re.sub(old_favicon, new_favicons, content)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Updated favicon links in {filename}")

def main():
    """Update favicon links in all HTML files."""
    print("🔧 Updating favicon links for better browser compatibility...")
    
    html_files = ['index.html', 'code.html', 'art.html', 'discussion.html', 'keymatch.html']
    
    for filename in html_files:
        if os.path.exists(filename):
            update_favicon_in_file(filename)
        else:
            print(f"⚠️  Warning: {filename} not found")
    
    print("✅ Favicon links updated in all HTML files!")
    print("🌐 Your website will now show a custom favicon in all browsers!")

if __name__ == '__main__':
    main() 