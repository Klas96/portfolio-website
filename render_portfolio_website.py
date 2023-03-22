from jinja2 import Template
from data import skills, certificates, projects, testamonials, time_line, personal_description


data_dict = {
    'testimonials': testamonials,
    'projects': projects,
    'certificates': certificates,
    'skills': skills,
    "time_line": time_line,
    "personal_description": personal_description
}

def render_portfolio():

    from jinja2 import Environment, FileSystemLoader

    file_loader = FileSystemLoader('templates')
    env = Environment(loader=file_loader)
    template = env.get_template('index.html')
    rendered = template.render(**data_dict)

    with open('index.html', 'w') as file:
        file.write(rendered)

    template = env.get_template('portfolio.html')
    rendered = template.render(**data_dict)

    with open('portfolio.html', 'w') as file:
        file.write(rendered)
    
    template = env.get_template('contact.html')
    rendered = template.render(**data_dict)

    with open('contact.html', 'w') as file:
        file.write(rendered)
    
    template = env.get_template("timeline.html")
    rendered = template.render(**data_dict)

    with open("timeline.html", 'w') as file:
        file.write(rendered)

    template = env.get_template("personal_letter.html")
    rendered = template.render(**data_dict)

    with open("personal_letter.html", 'w') as file:
        file.write(rendered)


if __name__ == '__main__':
    print("Happy Voilance...🦄🐉")
    render_portfolio()

