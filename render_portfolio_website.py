from operator import index
from jinja2 import Template

testamonial = {
    'author': 'Ericsson Manager',
    'quote': 'Klas Holmgren has preformed his work and tasks with considerable care and great intrest, to our satisfaction. He also works easily with other people.'
}

data_dict = {
    'testimonial': testamonial
    
}

def render_index():

    with open('templets/index.html', 'r') as file:
        template = Template(file.read())

    rendered = template.render(**data_dict)

    with open('index.html', 'w') as file:
        file.write(rendered)


if __name__ == '__main__':
    print("Building Website...")
    render_index()

