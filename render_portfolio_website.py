from jinja2 import Template

python_skill = {
    'title': 'Python',
    'procentige': 95
}

git_skill = {
    'title': 'Git',
    'procentige': 85
}


cplus_skill = {
    'title': 'C++',
    'procentige': 75
}

linux_skill = {
    'title': 'Linux',
    'procentige': 70
}


web_skill = {
    'title': 'Linux',
    'procentige': 65
}

skills = [python_skill, git_skill, cplus_skill, linux_skill, web_skill]

engering_mathematics = {
    'titel': 'Engineering mathematics and computational science, MSc',
    'year': '2018 - 2020',
    'school': 'Chalmers University',
    'href': 'https://www.chalmers.se/en/education/programmes/masters-info/pages/engineering-mathematics-and-computational-science.aspx',
    'description':  'The Masters program oﬀers knowledge in optimization, statistics, data science and machine learning. As well as how these can be applied to diﬀerent domains.'
}

physics_mathematics = {
    'titel': 'Batchlors Engineering Physics',
    'year': '2015 - 2018',
    'school': 'Chalmers University',
    'href': 'https://www.chalmers.se/sv/utbildning/program-pa-grundniva/Sidor/Teknisk-fysik.aspx',
    'description':  'A advanced bachelors giving solid understanding in mathematics and ways it can be applied to understand the world.'
}

natural_science = {
    'titel': 'Natural Science',
    'year': '2012 - 2015',
    'school': 'Sigrid Rudebecks Gymnasium',
    'href': 'https://sigridrudebecks.se/',
    'description':  'Studied Natural Science at Sigrid Rudebecks Gymnasium. Taking extra courses such as English 7, Math 5 and Mathematics Specialisation.'
}

certificates =  [engering_mathematics, physics_mathematics, natural_science]

cell_tracker = {
    'titel': 'Cell Tracker',
    'year': 2020,
    'description': "Master thesis project at Chalmers analysing microscopy time-laps data of growing yeast cells. In this project I learned a lot about image analysis and available tools like OpenCV and Scikit-Learn. But also how to mange larger projects and report regularly ta an employer.",
    'image': 'CellTracker.png',
    'href': 'https://github.com/Klas96/YeastTrack',
    'skills': ['Python', 'Sklearn', 'Keras', 'TensorFlow', 'Tkinter']
}

processing_games = {
    'titel': 'Processing Games',
    'year': 2015,
    'description': "I have made both one and two player games using the processing libraries.",
    'image': 'MustashioImage.png',
    'href': 'http://klas96.github.io/Processing-Games',
    'skills': ['HTML', 'JavaScript', 'Processing']
}


video_to_text_generator = {
    'titel': 'Video To Text Generator',
    'year': 2019,
    'description': "This Program takes a movie and takes the audio and usese a speach to text module to generate subtitels for the movie.",
    'image': 'VideoToText.png',
    'href': 'https://github.com/Klas96/Flim-to-text',
    'skills': ['Python']
}

high_Preformace_computing = {
    'titel': 'High Preformace Computing with C',
    'year': 2019,
    'description': "High preformence computing with C using pthreds.",
    'image': 'High-Preformace-Computing.png',
    'href': 'https://github.com/Klas96/High-Preformance-Computing-With-C',
    'skills': ['C', 'Pthreds', 'OpenGL']
}

fractal_explorer = {
    'titel': 'Fractal Explorer',
    'year': 2020,
    'description': "Fractal Generators using C. Fractals generated included MandelBrot, Julia, Generalized Mandelbrot.",
    'image': 'fractal-explorer.png',
    'href': 'https://github.com/Klas96/Fractal-Explorer',
    'skills': ['C']
}

stocastic_optimization = {
    'titel': 'Stocastic Optimization',
    'year': 2019,
    'description': "Python librarie for running stocastic-optimization algorithms. Including GeneticAlgorithm, ParticleSwarm.",
    'image': 'stocastic-optimization.png',
    'href': 'https://github.com/Klas96/Stochastic-Optimization',
    'skills': ['Python']
}

google_api = {
    'titel': 'Google API',
    'year': 2022,
    'description': "Using Google Speach to Text API to record and translate voice to text. Also using Googles text to speach API to translate text to speach.",
    'image': 'APICloud.png',
    'href': 'https://github.com/Klas96/Google-Voice-Echo',
    'skills': ['API']
}

projects = [cell_tracker, processing_games, video_to_text_generator, high_Preformace_computing, fractal_explorer, stocastic_optimization, google_api]

projects = sorted(projects, key=lambda d: d['year'], reverse=True) 


# Order Projects after year

testamonialEricsson = {
    'author': 'Ericsson Manager',
    'quote': 'Klas Holmgren has preformed his work and tasks with considerable care and great intrest, to our satisfaction. He also works easily with other people.',
    'image': 'EricssonLogo.png'
}

testamonialHenrik = {
    'author': 'Henrik Albrechtsson',
    'quote': 'Klas has performed his duty with flexing his kite board while having a high speed efficiency and a lot of collaboration with his co-riders.',
    'image': 'HenrikLogo.jpg'
}

testamonials = [testamonialEricsson, testamonialHenrik]

data_dict = {
    'testimonials': testamonials,
    'projects': projects,
    'certificates': certificates,
    'skills': skills
}

def render_portfolio():

    from jinja2 import Environment, FileSystemLoader

    file_loader = FileSystemLoader('templets')
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


if __name__ == '__main__':
    print("Building Website...")
    render_index()

