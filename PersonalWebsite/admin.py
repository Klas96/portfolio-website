from django.contrib import admin
from .models import CodeProject, ArtProject, TextFiled, AudioFile

print("Registering models...")  # Debugging statement

admin.site.register(CodeProject)
admin.site.register(ArtProject)
admin.site.register(TextFiled)
admin.site.register(AudioFile)

print("Models registered.")  # Debugging statement
