from django.shortcuts import render
from pathlib import Path
from PersonalWebsite.models import CodeProject, ArtProject, TextFiled, AudioFile
import markdown
import requests
from django.http import JsonResponse, HttpResponse
from django.template.loader import render_to_string

header_links = [
    {"name": "Home",
     "url": "/"},
    {"name": "Code",
     "url": "/code"},
    {"name": "Art",
     "url": "/art"},
    {"name": "Discussion",
     "url": "/discussion"}
]

data_dict = {
    'header_links': header_links,
    'code_projects': CodeProject.objects.all(),
    'art_projects': ArtProject.objects.all(),
    'text_files': TextFiled.objects.all(),
    'audio_files': AudioFile.objects.all(),
}

def render_portfolio(language):
    """
    Render the template in template with data from data.

    param:
        - language
    """
    
    #file_loader = FileSystemLoader('templates')
    #env = Environment(loader=file_loader)


    #if language == "en":
    #    for head_link in header_links:
    #        templ = head_link["url"]
    #        template = env.get_template(templ)
    #        rendered = template.render(**data_dict, current_page=templ)
#
    #        with open(templ, 'w') as file:
    #            file.write(rendered)
    #        print(f"Rendered {templ}")
#
    #if language == "sv":
    #    #TODO replace all texts to swedish
    #    print("TODO: Svenska är inte implementerat")
    #    fodler = "sve/"
    #    for head_link in header_links:
    #        templ = head_link["url"]
    #        template = env.get_template(templ)
    #        for data_key, data in data_dict.items():
    #            for data_item in data:
    #                if 'title' in data_item and 'title_sv' in data_item:
    #                    data_item['title'] = data_item['title_sv']
    #                if 'description' in data_item and 'description_sv' in data_item:
    #                    data_item['description'] = data_item['description_sv']
    #    
    #        rendered = template.render(lang = 'sve', **data_dict, current_page=templ)
#
    #        with open(fodler+templ, 'w') as file:
    #            file.write(rendered)
#
    #        print(f"Rendered {templ}")


if __name__ == '__main__':
    print("Rendering Web Pages...")
    render_portfolio("en")
    render_portfolio("sv")

def index(request):
    data_dict["current_page"] = "/"
    return render(request, 'index.html', data_dict)

def code_page(request):
    data_dict["current_page"] = "/code"
    # TOODO
    for project in data_dict["code_projects"]:
        if project.readme_url:
            markdown_content = requests.get(project.readme_url).text
            project.description = markdown.markdown(markdown_content)

    return render(request, 'code_page.html', data_dict)

def art_page(request):
    data_dict["current_page"] = "/art"
    selected_filters = request.GET.getlist('filters')
    
    if selected_filters:
        data_dict["art_projects"] = ArtProject.objects.filter(medium__in=selected_filters)
    elif request.META.get('HTTP_HX_REQUEST'):
        data_dict["art_projects"] = []
    
    if request.META.get('HTTP_HX_REQUEST'):
        html = render_to_string('partials/art_gallery.html', data_dict)
        return HttpResponse(html)
    
    return render(request, 'art_page.html', data_dict)

def discussion_page(request):
    import os
    data_dict["current_page"] = "/discussion"
    data_dict["text_files"] = TextFiled.objects.all()
    data_dict["audio_files"] = AudioFile.objects.all()
    for file in data_dict["text_files"]:
        if file.file:
            file.basename = os.path.basename(file.file.name)
        else:
            file.basename = None

    return render(request, 'discussion_page.html', data_dict)
