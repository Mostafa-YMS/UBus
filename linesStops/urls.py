from django.urls import path
from .views import *



urlpatterns = [
    path('lines/',Linesview.as_view()),
    path('getstations/',stationsview.as_view()),
    path('cords/',Cordsview.as_view()),
]