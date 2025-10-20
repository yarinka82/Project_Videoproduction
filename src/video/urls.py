from django.urls import path
from . import views
from .views import video_list, category_list

urlpatterns = [
    path('videos/', views.video_list, name='video_list'),
    path('categories/', views.category_list, name='category-list'),
]
