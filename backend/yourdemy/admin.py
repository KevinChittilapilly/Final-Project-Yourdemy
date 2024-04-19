from django.contrib import admin

# Register your models here.

from .models import User,Courses

models_list = [User,Courses]
admin.site.register(models_list)
