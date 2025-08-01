#!/usr/bin/env python3
"""
Add favicon links to all HTML files.
"""

import os
import re

def add_favicon_to_file(filename):
    """Add favicon link to a single HTML file."""
    print(f"🔧 Adding favicon to {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if favicon link already exists
    if 'favicon' in content:
        print(f"⚠️  Favicon already exists in {filename}")
        return
    
    # Add favicon link after the title tag
    favicon_link = '    <link rel="icon" type="image/svg+xml" href="static/favicon.svg">\n'
    
    # Find the title tag and add favicon after it
    title_pattern = r'(<title>.*?</title>)'
    replacement = r'\1\n' + favicon_link
    
    content = re.sub(title_pattern, replacement, content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Added favicon to {filename}")

def main():
    """Add favicon to all HTML files."""
    print("🔧 Adding favicon to all HTML files...")
    
    html_files = ['index.html', 'code.html', 'art.html', 'discussion.html', 'keymatch.html']
    
    for filename in html_files:
        if os.path.exists(filename):
            add_favicon_to_file(filename)
        else:
            print(f"⚠️  Warning: {filename} not found")
    
    print("✅ Favicon added to all HTML files!")
    print("🌐 Your website will now show a custom favicon instead of the Loopia icon!")

if __name__ == '__main__':
    main() 