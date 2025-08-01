#!/usr/bin/env python3
"""
Simple static HTML generator for GitHub Pages
No Django dependency required
"""

import os
import re
from datetime import datetime

def copy_original_index_html():
    """Copy the original index.html from main branch"""
    import subprocess
    try:
        # Get the original index.html from main branch
        result = subprocess.run(['git', 'show', 'main:index.html'], 
                              capture_output=True, text=True, check=True)
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(result.stdout)
        
        print("✅ Copied original index.html from main branch")
    except subprocess.CalledProcessError:
        print("⚠️  Could not get original index.html from main, using fallback")
        create_fallback_index_html()

def create_fallback_index_html():
    """Create a fallback index.html if main branch is not available"""
    content = '''<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Klas Holmgren</title>
    <link rel="icon" type="image/svg+xml" href="static/favicon.svg">
    <link rel="icon" type="image/png" href="static/favicon.png">
    <link rel="shortcut icon" href="static/favicon.png">
    <meta name="Klas Holmgren" content="Klas Holmgren">
    <link rel="home" href="index.html"/>
    <meta name="description" content="Portfolio page for Klas Holmgren.">
    <meta name="keywords" content="Klas, Holmgren, Code, art">

    <link rel="stylesheet" href="static/css/bootstrap.min.css">
    <link rel="stylesheet" href="static/css/style.css">

  </head>
  <body>
    <header>
      <div class="headerCol">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col">
              <div class="d-md-none">
                <button class="navToggle">
                  <span class="navToggle__text">Menu</span>
                </button>
              </div>
              <div class="navCollapseCol">
                <div class="navCol">
                  <ul>
                    
                    <li><a class="nav-link
                       active "
                      href="index.html">Home</a></li>
                    
                    <li><a class="nav-link
                      "
                      href="code.html">Code</a></li>
                    
                    <li><a class="nav-link
                      "
                      href="art.html">Art</a></li>
                    
                    <li><a class="nav-link
                      "
                      href="discussion.html">Discussion</a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    
<body class="home">
<section>
  <div class="bannerSection">
    <div class="container">
      <div class="row g-2 g-md-1 align-items-center">
        <div class="col-md-auto order-md-last">
          <div class="bannerUserImg">
            <img src="static/images/user-img.jpg" alt="Profile-Img">
          </div>
        </div>
        <div class="col-md">
          <div class="bannerContent">
            <h1 class="pb-2 xlTitle">Klas Holmgren</h1>
            <p>Under dagarna så dansar, målar och filosoferar samt kodar jag. Dansar Lindyhop och West-coast-swing. Jag jobbar som Ingenjör.</p>
            <div class="bannerBtnCol">
              <div class="row">
                <div class="col-auto">
                  <a download href="static/CV/KlasHolmgrenCV.pdf" class="btn btnPrimary">Download Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="sectionSpace">
  <div class="container">
    <div class="portfolioCol">
      <div class="row pb-2">
        <div class="col">
          <h4 class="lgTitle regular"><a href="code.html">About Code</a></h4>
        </div>
        <p class="pb-2">
          Writing instructions that can be run on computers is a creative and productive way to solve problems. I mostly program in high level languages (Python and JavaScript) but are also intrested in C++. The project range from smale games to AI aplications and imagea-analysis. My favorite web extention is <a href='https://darkreader.org/' style="color: yellow;">Dark Reader</a> and the best site is ofcourse <a href="sökmotorn.se" style="color: yellow;">sökmotorn.se</a>. :) As editors I use <a href="https://cursor.com/" style="color: yellow;">Cursor</a> and Vim. As OS I use Ubuntu and here is my <a href="https://github.com/Klas96?tab=repositories" style="color: yellow;">Github</a>.
        </p>
      </div>
    </div>

    <div class="portfolioCol">
      <div class="row pb-2">
        <div class="col">
          <h4 class="lgTitle regular"><a href="art.html">About Artworks</a></h4>
        </div>
        <p>
          The art is made to relax and to explore and form my fealings and thoughts. The medium for the art differ from simple sketches, oil-paintings and digital art. I like coloutful dynamic art aiming for a sense of movement and life.
        </p>
      </div>
    </div>

    <div class="portfolioCol">
      <div class="row pb-2">
        <div class="col">
          <h4 class="lgTitle regular"><a href="discussion.html">About Discussions</a></h4>
        </div>
        <p>
          The discussions category is for thoughts and insights. Also for exploration of varius topics and discussions with others.
        </p>
      </div>
    </div>

    <div class="portfolioCol">
      <div class="row pb-2">
        <div class="col">
          <h4 class="lgTitle regular">Contact</h4>
        </div>
        <p>
          Feel free to contact me at <a href="mailto:klas0holmgren@gmail.com" style="color: yellow;">klas0holmgren@gmail.com</a> or <a href="https://www.facebook.com/klas.holmgren.7/" style="color: yellow;">socailmedia</a>. I don't use snapchat tho. I value all resonable communication. :D
        </p>
        <p>
          bc1q88na538qmsac5tp6hdn7pc53eegwy758usez99
        </p>
        <p style="word-break: break-all;">
          49WsBWHdQ9y5ZGA25ZF1WtP3Cfze4aXQbNnzjdmVdVBtXxpegfdN3m1K8dUCdM3fGqG68kRDZEStJfo6GPKxcFM1PeroqRy
        </p>
        <!--
      -->
      </div>
    </div>
  </div>
</div>
</body>


    <script src="static/js/app.js"></script>
    <script src="static/js/lib/stats.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="static/js/bootstrap.bundle.min.js"></script>
    <script src="static/js/script.js"></script>
  </body>
</html>'''
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ Generated fallback index.html")

def create_code_html():
    """Create code.html (Code projects page)"""
    content = '''<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Klas Holmgren - Code</title>
    <link rel="icon" type="image/svg+xml" href="static/favicon.svg">
    <link rel="icon" type="image/png" href="static/favicon.png">
    <link rel="shortcut icon" href="static/favicon.png">
    <meta name="Klas Holmgren" content="Klas Holmgren">
    <link rel="home" href="/"/>
    <meta name="description" content="Klas Holmgren - Code Projects">
    <meta name="keywords" content="Klas, Holmgren, Code, Programming, Projects">

    <link rel="stylesheet" href="static/css/bootstrap.min.css">
    <link rel="stylesheet" href="static/css/style.css">

  </head>
  <body>
    <header>
      <div class="headerCol">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col">
              <div class="d-md-none">
                <button class="navToggle">
                  <span class="navToggle__text">Menu</span>
                </button>
              </div>
              <div class="navCollapseCol">
                <div class="navCol">
                  <ul>
                    
                    <li><a class="nav-link
                      "
                      href="index.html">Home</a></li>
                    
                    <li><a class="nav-link
                       active "
                      href="code.html">Code</a></li>
                    
                    <li><a class="nav-link
                      "
                      href="art.html">Art</a></li>
                    
                    <li><a class="nav-link
                      "
                      href="discussion.html">Discussion</a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    
<body class="code-page">
<section>
  <div class="innerPageBannerCol">
    <div class="container">
      <div class="row g-4 g-md-3 align-items-center">
        <div class="col-md-6">
          <div class="bannerContent">
            <h1 class="pb-md-3 xlTitle">Code Projects</h1>
            <p>Here are some of my programming projects and contributions to the open-source community.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="lightBg">
    <div class="container">
      <div class="portfolioContentMain">
        <div class="row g-4 g-md-4 g-lg-5 portfolioRow">
          
          <!-- AI Agent Project (FIRST) -->
          <div class="col-md-6 pColMain">
            <div class="pCol" style="background-color: rgba(32, 32, 32, 0.5); padding: 20px; border-radius: 10px; border: 1px solid rgba(128, 128, 128, 0.7);">
              <h3 style="color: white; margin-bottom: 15px;">AI Agent</h3>
              <p style="color: #ccc; margin-bottom: 15px;">An intelligent AI agent system designed to automate complex tasks, make data-driven decisions, and provide intelligent assistance.</p>
              <div class="project-links">
                <a href="ai-agent.html" class="btn btn-warning btn-sm">View Details</a>
                <a href="https://github.com/Klas96/ai-agent" class="btn btn-primary btn-sm">GitHub</a>
              </div>
            </div>
          </div>
          
          <!-- KeyMatch Project -->
          <div class="col-md-6 pColMain">
            <div class="pCol" style="background-color: rgba(32, 32, 32, 0.5); padding: 20px; border-radius: 10px; border: 1px solid rgba(128, 128, 128, 0.7);">
              <h3 style="color: white; margin-bottom: 15px;">KeyMatch</h3>
              <p style="color: #ccc; margin-bottom: 15px;">A comprehensive matchmaking app with intelligent matching algorithms, real-time messaging, and AI-powered chat assistance.</p>
              <div class="project-links">
                <a href="keymatch.html" class="btn btn-warning btn-sm">View Details</a>
                <a href="https://github.com/Klas96/key-match" class="btn btn-primary btn-sm">GitHub</a>
              </div>
            </div>
          </div>
          
          <!-- Fractal Explorer Project -->
          <div class="col-md-6 pColMain">
            <div class="pCol" style="background-color: rgba(32, 32, 32, 0.5); padding: 20px; border-radius: 10px; border: 1px solid rgba(128, 128, 128, 0.7);">
              <h3 style="color: white; margin-bottom: 15px;">Fractal Explorer</h3>
              <p style="color: #ccc; margin-bottom: 15px;">Interactive fractal visualization and exploration tool.</p>
              <div class="project-links">
                <a href="fractal-explorer.html" class="btn btn-warning btn-sm">View Details</a>
                <a href="https://github.com/Klas96/Fractal-Explorer" class="btn btn-primary btn-sm">GitHub</a>
              </div>
            </div>
          </div>
          
          <!-- Processing Games Project -->
          <div class="col-md-6 pColMain">
            <div class="pCol" style="background-color: rgba(32, 32, 32, 0.5); padding: 20px; border-radius: 10px; border: 1px solid rgba(128, 128, 128, 0.7);">
              <h3 style="color: white; margin-bottom: 15px;">Processing Games</h3>
              <p style="color: #ccc; margin-bottom: 15px;">Interactive games and visualizations created with Processing.</p>
              <div class="project-links">
                <a href="processing-games.html" class="btn btn-warning btn-sm">View Details</a>
                <a href="http://klas96.github.io/Processing-Games/" class="btn btn-primary btn-sm">Live Demo</a>
              </div>
            </div>
          </div>
          
          <!-- YeastTrack Project -->
          <div class="col-md-6 pColMain">
            <div class="pCol" style="background-color: rgba(32, 32, 32, 0.5); padding: 20px; border-radius: 10px; border: 1px solid rgba(128, 128, 128, 0.7);">
              <h3 style="color: white; margin-bottom: 15px;">YeastTrack</h3>
              <p style="color: #ccc; margin-bottom: 15px;">Cell tracking and analysis software for biological research.</p>
              <div class="project-links">
                <a href="cell-tracker.html" class="btn btn-warning btn-sm">View Details</a>
                <a href="https://github.com/Klas96/YeastTrack" class="btn btn-primary btn-sm">GitHub</a>
              </div>
            </div>
          </div>
          
          <!-- SiteMonitor Project -->
          <div class="col-md-6 pColMain">
            <div class="pCol" style="background-color: rgba(32, 32, 32, 0.5); padding: 20px; border-radius: 10px; border: 1px solid rgba(128, 128, 128, 0.7);">
              <h3 style="color: white; margin-bottom: 15px;">SiteMonitor</h3>
              <p style="color: #ccc; margin-bottom: 15px;">Website monitoring and uptime tracking system.</p>
              <div class="project-links">
                <a href="sitemonitor.html" class="btn btn-warning btn-sm">View Details</a>
                <a href="https://github.com/Klas96/SiteMonitor" class="btn btn-primary btn-sm">GitHub</a>
              </div>
            </div>
          </div>
          
          <!-- High Performance Computing Project -->
          <div class="col-md-6 pColMain">
            <div class="pCol" style="background-color: rgba(32, 32, 32, 0.5); padding: 20px; border-radius: 10px; border: 1px solid rgba(128, 128, 128, 0.7);">
              <h3 style="color: white; margin-bottom: 15px;">High Performance Computing with C</h3>
              <p style="color: #ccc; margin-bottom: 15px;">Optimized computing algorithms and parallel processing implementations.</p>
              <div class="project-links">
                <a href="https://github.com/Klas96/High-Preformance-Computing-With-C" class="btn btn-primary btn-sm">GitHub</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
</body>


    <script src="static/js/app.js"></script>
    <script src="lib/stats.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="static/js/bootstrap.bundle.min.js"></script>
    <script src="static/js/script.js"></script>
  </body>
</html>'''
    
    with open('code.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ Generated code.html")

def main():
    """Main function to generate static files"""
    print("🚀 Generating static HTML files for GitHub Pages...")
    
    # Copy original index.html from main branch
    copy_original_index_html()
    
    # Generate code.html
    create_code_html()
    
    print("✅ Static HTML files generated successfully!")
    print("📁 Files created:")
    print("   - index.html (Original from main branch)")
    print("   - code.html (Code projects)")
    print("")
    print("🌐 Ready for GitHub Pages deployment!")

if __name__ == "__main__":
    main() 