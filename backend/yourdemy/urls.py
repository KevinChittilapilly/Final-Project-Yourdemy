from django.urls import path
from .views import UserView,CourseView

urlpatterns = [
    path('user/', UserView.as_view()),
    path('course/',CourseView.as_view())
]