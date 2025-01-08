from django.db import models


# Create your models here.
class Certificate(models.Model):
    title = models.CharField(max_length=255)
    year = models.CharField(max_length=255)
    school = models.CharField(max_length=255)
    href = models.URLField()
    description = models.TextField()

    def save(self, *args, **kwargs):
        print(f'Saving Certificate: {self.title}')
        super().save(*args, **kwargs)


class Testimonial(models.Model):
    author = models.CharField(max_length=255)
    quote = models.TextField()


class PersonalDescription(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()


class CodeProject(models.Model):
    title = models.CharField(max_length=255)
    readme_url = models.URLField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    href = models.URLField()


class ArtProject(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='static/images/art_projects/')


class TextFiled(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    #optional ulr
    href = models.URLField(null=True, blank=True)
    file = models.FileField(upload_to='static/text_files/', null=True, blank=True)

class AudioFile(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    file = models.FileField(upload_to='static/audio_files/')
    duration = models.DurationField(null=True, blank=True)