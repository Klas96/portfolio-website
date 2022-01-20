from django.urls import path
from .import views

# URLConf
urlpatterns = [
    path('email/', views.send_email)
]