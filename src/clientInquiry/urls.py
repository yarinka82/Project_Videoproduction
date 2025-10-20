# urls.py
from django.urls import path
from .views import create_inquiry

urlpatterns = [
    path('', create_inquiry, name='create_inquiry'),
]
