################
# Skills
################

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
    'title': 'web',
    'procentige': 65
}

skills = [python_skill, git_skill, cplus_skill, linux_skill, web_skill]

################
# certificates
################

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

###########
# projects
###########

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
    'skills': ['API', 'Google Cloud']
}

sklern_open_source = {
    'titel': 'scikit-learn',
    'year': 2022,
    'description': "Contributer to the open source project scikit-learn by adding new metrics for error estimation.",
    'image': 'scikit-learn-logo.svg',
    'href': 'https://github.com/Klas96/scikit-learn',
    'skills': ['Open Source', 'sklearn', 'GitHub', 'Code Review', 'Formating', 'Testing', 'Documentation']
}

kaggle_competitions = {
    'titel': 'kaggle-competitions',
    'year': 2023,
    'description': "Follower of Kaggle competitions",
    'image': 'Kaggle-logo.png',
    'href': 'https://www.kaggle.com/klasholmgren',
    'skills': ['Open Source', 'sklearn', 'TensorFlow', 'Kaggle']
}


projects = [cell_tracker, processing_games, video_to_text_generator, high_Preformace_computing, fractal_explorer, stocastic_optimization, google_api]

projects = sorted(projects, key=lambda d: d['year'], reverse=True) 

#############
# Testamonial
#############

testamonialEricsson = {
    'author': 'Ericsson Manager',
    'quote': 'Klas Holmgren has preformed his work and tasks with considerable care and great intrest, to our satisfaction. He also works easily with other people.',
    'image': 'EricssonLogo.png'
}

testamonial_felix = {
    'author': "Felix Matsson",
    'quote': "My good friend and previous classmate Klas helped my through my high paced studies at Chalmers by inspiring me to see the fun in learning and with his actions always reminding me that any obstacles in life can be handled with the right mindset.",
    'image': "FelixMatsson.jpg"
}

testamonialHenrik = {
    'author': 'Henrik Albrechtsson',
    'quote': 'Klas has performed his duty with flexing his kite board while having a high speed efficiency and a lot of collaboration with his co-riders.',
    'image': 'HenrikLogo.jpg'
}

testamonials = [testamonialEricsson, testamonial_felix, testamonialHenrik]

promo_soft = {
    'title': 'Data Scientist',
    'company': 'PromoSoft',
    'location': 'Gothenburg',
    'time_span': [2021, 'now'],
    'description_points': ['This role include developing a demand forecasting model for inventory planning using python and the Sklearn library.']
}

ericsson = {
    'title': 'Developer',
    'company': 'Ericsson',
    'location': 'Gothenburg',
    'time_span': [2020, 2021],
    'description_points': ['Working as developer at Ericsson 5G core.',
                           'This role included working in an agile environment using Scrum.',
                           'The mission was to develop and test the new 5G core. This mainly involved programming in C++.']
    }

image_analysis = {
    'title': 'Image analysis of yeast cell lineages',
    'company': 'Chalmers: Cvijovic Lab',
    'location': 'Gothenburg',
    'time_span': [2020, 2020],
    'description_points': ['Master thesis project at Chalmers analysing microscopy time-laps data of growing yeast cells.',
                            'In this project I learned a lot about image analysis and available tools like OpenCV and Scikit-Learn. But also how to mange larger projects and report regularly ta an employer.'
                        ]
    }

teaching_assistant = {
    'title': 'Teaching Assistant',
    'company': 'Chalmers University of Technology',
    'location': 'Gothenburg',
    'time_span': [2020, 2020],
    'description_points': ['The role of the teaching assistant is to help with a course by holding certain lectures as well as correcting assignments etc.',
                            'I have been an assistant for courses in probability, statistics, Matlab and mathematical analysis.']
    }


private_teacher = {
    'title': 'Private Teacher',
    'company': 'Chalmers University of Technology',
    'location': 'Gothenburg',
    'time_span': [2015, 2020],
    'description_points': ['I have worked as a private teacher for younger students needing help with mathematics and natural science.',
                            'This has been through diﬀerent organization such as Intize and Study Buddy but Also privately.']
    }

time_line = [promo_soft, ericsson, image_analysis, teaching_assistant, private_teacher]