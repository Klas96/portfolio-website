#!/usr/bin/env python3
"""
Generate static HTML files from Django templates for GitHub Pages deployment.
"""

import os
import sys
import django
from pathlib import Path

# Add the project directory to Python path
project_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(project_dir))

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WebApp.settings')
django.setup()

from django.template.loader import render_to_string
from django.conf import settings
from PersonalWebsite.models import CodeProject, ArtProject, TextFiled, AudioFile

def generate_static_files():
    """Generate static HTML files from Django templates."""
    
    print("🚀 Generating static HTML files for GitHub Pages...")
    
    # Prepare context data
    header_links = [
        {"name": "Home", "url": "/"},
        {"name": "Code", "url": "/code"},
        {"name": "Art", "url": "/art"},
        {"name": "Discussion", "url": "/discussion"}
    ]
    
    context = {
        'header_links': header_links,
        'code_projects': CodeProject.objects.all(),
        'art_projects': ArtProject.objects.all(),
        'text_files': TextFiled.objects.all(),
        'audio_files': AudioFile.objects.all(),
    }
    
    # Generate index.html (Home page)
    print("📄 Generating index.html...")
    context['current_page'] = "/"
    index_html = render_to_string('index.html', context)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(index_html)
    
    # Generate code.html (Code page)
    print("📄 Generating code.html...")
    context['current_page'] = "/code"
    code_html = render_to_string('code_page.html', context)
    
    with open('code.html', 'w', encoding='utf-8') as f:
        f.write(code_html)
    
    # Generate art.html (Art page)
    print("📄 Generating art.html...")
    context['current_page'] = "/art"
    art_html = render_to_string('art_page.html', context)
    
    with open('art.html', 'w', encoding='utf-8') as f:
        f.write(art_html)
    
    # Generate discussion.html (Discussion page)
    print("📄 Generating discussion.html...")
    context['current_page'] = "/discussion"
    discussion_html = render_to_string('discussion_page.html', context)
    
    with open('discussion.html', 'w', encoding='utf-8') as f:
        f.write(discussion_html)
    
    print("✅ Static HTML files generated successfully!")
    print("📁 Files created:")
    print("   - index.html (Home page)")
    print("   - code.html (Code projects)")
    print("   - art.html (Art gallery)")
    print("   - discussion.html (Audio and text files)")
    print("")
    print("🌐 Ready for GitHub Pages deployment!")

if __name__ == '__main__':
    generate_static_files() 