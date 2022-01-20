from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def send_email(request):
    return HttpResponse('Hello World')