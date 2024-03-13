from data_depricate import certificates, testamonials, personal_description
from jinja2 import Environment, FileSystemLoader
from data.art import art_projects
from data.book_reviews import book_reviews
from data.time_line_enteries import time_line
from data.programing import code_projects, skills 


header_links = [
    {"name": "Home",
     "url": "index.html"},
    {"name": "Code",
     "url": "code_portfolio.html"},
    {"name": "Art",
     "url": "art_portfolio.html"},
    {"name": "Timeline",
     "url": "timeline.html"},
    #{"name": "Contact",
    # "url": "contact.html"}
    #'book_reviews.html',
    #'About_me.html',
     ]

data_dict = {
    'header_links': header_links,
    'testimonials': testamonials,
    'code_projects': code_projects,
    'art_projects': art_projects,
    'certificates': certificates,
    'skills': skills,
    "time_line": time_line,
    "personal_description": personal_description,
    "book_reviews": book_reviews
}

def render_portfolio(language):
    """
    Render the template in template with data from data.

    param:
        - language
    """
    file_loader = FileSystemLoader('templates')
    env = Environment(loader=file_loader)
    if language == "en":
        for head_link in header_links:
            templ = head_link["url"]
            template = env.get_template(templ)
            rendered = template.render(**data_dict, current_page=templ)

            with open(templ, 'w') as file:
                file.write(rendered)
            print(f"Rendered {templ}")

    if language == "sv":
        #TODO replace all texts to swedish
        print("TODO: Svenska är inte implementerat")
        fodler = "sve/"
        for head_link in header_links:
            templ = head_link["url"]
            template = env.get_template(templ)
            for data_key, data in data_dict.items():
                for data_item in data:
                    if 'title' in data_item and 'title_sv' in data_item:
                        data_item['title'] = data_item['title_sv']
                    if 'description' in data_item and 'description_sv' in data_item:
                        data_item['description'] = data_item['description_sv']
        
            rendered = template.render(**data_dict, current_page=templ)

            with open(fodler+templ, 'w') as file:
                file.write(rendered)

            print(f"Rendered {templ}")





if __name__ == '__main__':
    print("Rendering Web Pages...")
    render_portfolio("en")
    render_portfolio("sv")

