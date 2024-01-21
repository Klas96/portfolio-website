from jinja2 import Template
from data import skills, certificates, projects, testamonials, time_line, personal_description, book_reviews, art_projects
from jinja2 import Environment, FileSystemLoader


data_dict = {
    'testimonials': testamonials,
    'projects': projects,
    'art_projects': art_projects,
    'certificates': certificates,
    'skills': skills,
    "time_line": time_line,
    "personal_description": personal_description,
    "book_reviews": book_reviews
}

def render_portfolio():
    
    file_loader = FileSystemLoader('templates')
    env = Environment(loader=file_loader)

    #TODO make to for loop
    templets = ['index.html','portfolio.html', 'contact.html', "timeline.html", 'about_me.html', 'book_reviews.html', 'art_portfolio.html']

    for templ in templets:
        template = env.get_template(templ)
        rendered = template.render(**data_dict, current_page=templ)

        with open(templ, 'w') as file:
            file.write(rendered)
    

if __name__ == '__main__':
    print("Happy Voilance...🦄🐉")
    render_portfolio()

