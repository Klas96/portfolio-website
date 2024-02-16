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

###########
# Programing projects
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
    'titel': 'Google Cloud API',
    'year': 2022,
    'description': "Using Google Cloud and API Sevices to record and translate voice to text and hosting with virtual machines.",
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
