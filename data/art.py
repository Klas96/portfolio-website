##############
# Art Projects
##############

wolf_drawing = {
    'titel': 'Wolf Drawing',
    'year': 2019,
    'description': "A wolf drawn with pencil.",
    'image': 'wolf_drawing.jpg',
    'url': 'wolf_drawing.jpg',
    'skills': ['Nature', 'gray', 'animal']
}

red_dear = {
    'titel': 'Red Dear',
    'year': 2017,
    'description': "A red deer painted with color pencils that was given to my by my grand parents. This drawing is tributed to them.",
    'image': 'red_dear.jpg',
    'url': 'red_dear.jpg',
    'skills': ['Iconic', 'Nature', 'Colors']
}


colorful_girl = {
    'titel': 'Colorful girl',
    'year': 2018,
    'description': "Colorful girl holding her phone. Illustrating the cooler full yet sometimes inauthentic nature of online communication.",
    'image': 'colorful_girl.jpg',
    'url': 'colorful_girl.jpg',
    'skills': ['Human',  'Colors', 'phone']
}


eart_water_colors = {
    'titel': 'Water Color Earth',
    'year': 2018,
    'description': "The earth painted with watercolors. The wonderful wet rock floating in space that we live on. <3",
    'image': 'earth_in_space_water_color.jpg',
    'url': 'earth_in_space_water_color.jpg',
    'skills': ['Water Colors', 'Space', 'Earth']
}


red_flower_triangel_base = {
    'titel': 'Red Flower',
    'year': 2024,
    'description': "In the center is a circel contained by a squere contained by a triangel contained by a circle contained by red flower pedals illustrated on a paper.",
    'image': 'blue_red_flower.jpg',
    'url': 'blue_red_flower.jpg',
    'skills': ['Color', 'Red', 'Green', 'Geometry', 'Pastell']
}

split_eyes = {
    'titel': 'Split Eyes',
    'year': 2018,
    'description': "Forgotten exactly what I was thinking when I drew this but now I think the message is pritty clear.",
    'image': 'split_eyes.jpg',
    'url': 'split_eyes.jpg',
    'skills': ['Color', 'Eyes', 'Trinity', 'Duality', 'Crayons']
}

walking_dragon = {
    'titel': 'Walking Dragon',
    'year': 2018,
    'description': "Trying to figure out colors. In this image yellow are used as highlights and blue as shadows.",
    'image': 'walking_dragon.jpg',
    'url': 'walking_dragon.jpg',
    'skills': ['Color', 'Dragon']
}

line_one_line = {
    'titel': 'Line One Line',
    'year': 2018,
    'description': "Line fractal filled with colors.",
    'image': 'line_one_line.jpg',
    'url': 'line_one_line.jpg',
    'skills': ['Color', 'Line', 'Fractal']
}


painted_heart = {
    'titel': 'Painted Heart',
    'year': 2017,
    'description': "Painted a heart by using water coolors.",
    'image': 'painted_heart.jpg',
    'url': 'painted_heart.jpg',
    'skills': ['Color', 'hearth']
}

dubbel_spiral = {
    'titel': 'Dubbel Spiral',
    'year': 2017,
    'description': "Dubbel Spiral",
    'image': 'dubbel_spiral.jpg',
    'url': 'dubbel_spiral.jpg',
    'skills': ['Color', 'spiral']
}

castle_in_the_sky = {
    'titel': 'Castel in the sky',
    'year': 2017,
    'description': "Castel in the sky",
    'image': 'castle_in_the_sky.jpg',
    'url': 'castle_in_the_sky.jpg',
    'skills': ['Color', 'sky']
}

in_giving_we_receive = {
    'titel': 'In giving we receive',
    'year': 2017,
    'description': "In giving we receive",
    'image': 'in_giving_we_receive.jpg',
    'url': 'in_giving_we_receive.jpg',
    'skills': ['Hands']
}


bird_back = {
    'titel': 'Bird Back',
    'year': 2017,
    'description': "Flying Away",
    'image': 'bird_back.jpg',
    'url': 'bird_back.jpg',
    'skills': ['Bird']
}

fruit_and_light = {
    'titel': 'Fruit of Light',
    'year': 2024,
    'description': "One Circle and six circles placed around it with common intersections.",
    'image': 'fruit_and_light.jpg',
    'url': 'fruit_and_light.jpg',
    'skills': ['Circels']
}

portal = {
    'titel': 'Portal',
    'year': 2024,
    'description': "A bit unfocused scribbling. Looks a bit like a framed portal",
    'description_sve': "Lite ofocuserat kladdande. Liknar lite en inramad portal.",
    'image': 'portal.jpg',
    'url': 'portal.jpg',
    'skills': ['Portal', 'painting']
}


butterfly = {
	'titel': 'butterfly',
	'year': 2018,
	'description': "A sketch of a butterfly",
	'url': 'butterfly_black_white.jpg',
	'skills': ['sketch']
}

another_abstract = {
	'titel': 'Another Abstract',
	'year': 2024,
	'description': "It's just another abstarct.",
	'url': 'Another_Abstract.jpg',
	'skills': ['oil pastel']
}


art_projects = [butterfly, another_abstract, portal, fruit_and_light ,red_flower_triangel_base, wolf_drawing, eart_water_colors, 
                line_one_line ,walking_dragon, split_eyes, colorful_girl,dubbel_spiral, 
                in_giving_we_receive, red_dear, castle_in_the_sky, painted_heart, bird_back]


art_projects = sorted(art_projects, key=lambda d: d['year'], reverse=True)

