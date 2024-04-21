from django.contrib import admin

# Register your models here.

from .models import User,Courses,Section,VideoLecture, Feedback

models_list = [User,Courses,Section,VideoLecture, Feedback]
admin.site.register(models_list)
