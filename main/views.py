from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.core.mail import send_mail

def send_email(request):

    return HttpResponse('Hello World')

