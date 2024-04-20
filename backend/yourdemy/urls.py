from django.urls import path
from .views import UserView,CourseView

urlpatterns = [
    path('user/', UserView.as_view()),
    path('courses/',CourseView.as_view()),
    path('courses/<int:id>/', CourseView.as_view(), name='course-detail')
]