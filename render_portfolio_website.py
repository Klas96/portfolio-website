from jinja2 import Template
from data_depricate import certificates, testamonials, personal_description
from jinja2 import Environment, FileSystemLoader
from data.art import art_projects
from data.book_reviews import book_reviews
from data.time_line_enteries import time_line
from data.programing import projects, skills 


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

def render_portfolio(language):
    
    if language == "en":
        file_loader = FileSystemLoader('templates')
        env = Environment(loader=file_loader)

        #TODO make to for loop
        templets = ['index.html','portfolio.html', 'contact.html', "timeline.html", 'about_me.html', 'book_reviews.html', 'art_portfolio.html']

        for templ in templets:
            template = env.get_template(templ)
            rendered = template.render(**data_dict, current_page=templ)

            with open(templ, 'w') as file:
                file.write(rendered)
    if language == "sv":
        print("TODO: Svenska är inte implementerat")



if __name__ == '__main__':
    print("Happy Voilance...🦄🐉")
    render_portfolio("en")

