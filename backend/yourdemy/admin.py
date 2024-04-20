from django.contrib import admin

# Register your models here.

from .models import User,Courses,Section,VideoLecture

models_list = [User,Courses,Section,VideoLecture]
admin.site.register(models_list)
