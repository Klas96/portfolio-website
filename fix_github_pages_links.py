#!/usr/bin/env python3
"""
Fix navigation links in static HTML files for GitHub Pages deployment.
"""

import re
from pathlib import Path

def fix_links_in_file(filename):
    """Fix navigation links in a single HTML file."""
    print(f"🔧 Fixing links in {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix navigation links
    content = re.sub(r'href="/"', 'href="index.html"', content)
    content = re.sub(r'href="/code"', 'href="code.html"', content)
    content = re.sub(r'href="/art"', 'href="art.html"', content)
    content = re.sub(r'href="/discussion"', 'href="discussion.html"', content)
    
    # Fix internal links
    content = re.sub(r'href="/code/"', 'href="code.html"', content)
    content = re.sub(r'href="/art/"', 'href="art.html"', content)
    content = re.sub(r'href="/discussion/"', 'href="discussion.html"', content)
    
    # Fix static file paths (remove leading slash for relative paths)
    content = re.sub(r'src="/static/', 'src="static/', content)
    content = re.sub(r'href="/static/', 'href="static/', content)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Fixed links in {filename}")

def main():
    """Fix links in all HTML files."""
    print("🔧 Fixing navigation links for GitHub Pages...")
    
    html_files = ['index.html', 'code.html', 'art.html', 'discussion.html']
    
    for filename in html_files:
        if Path(filename).exists():
            fix_links_in_file(filename)
        else:
            print(f"⚠️  Warning: {filename} not found")
    
    print("✅ All navigation links fixed!")
    print("🌐 Files are now ready for GitHub Pages deployment!")

if __name__ == '__main__':
    main() 