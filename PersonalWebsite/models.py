from django.db import models
from django.db.models import TextChoices
class CodeProject(models.Model):
    title = models.CharField(max_length=255)
    readme_url = models.URLField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    href = models.URLField()

    def __str__(self):
        return self.title


class ArtMedium(TextChoices):
    DIGITAL = 'DIGITAL', 'Digital'
    SKETCH = 'SKETCH', 'Sketch'
    PASTEL = 'PASTEL', 'Pastel'


class ArtProject(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='static/images/art_projects/')
    medium = models.CharField(max_length=255, choices=ArtMedium.choices, null=True, blank=True)

    def __str__(self):
        return self.title


class TextFiled(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    href = models.URLField(null=True, blank=True)
    file = models.FileField(upload_to='static/text_files/', null=True, blank=True)

    def __str__(self):
        return self.title


class AudioFile(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    file = models.FileField(upload_to='static/audio_files/')
    duration = models.DurationField(null=True, blank=True)

    def __str__(self):
        return self.title
