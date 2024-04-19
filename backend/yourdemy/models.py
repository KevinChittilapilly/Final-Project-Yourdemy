from django.db import models

# Create your models here.

class User(models.Model):
    user_id = models.AutoField(primary_key=True,)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    interactive_mode = models.BooleanField(default=False)


class Courses(models.Model):
    course_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=500)
    instructor = models.CharField(max_length=100)
    price = models.IntegerField()
    rating = models.IntegerField()
    duration = models.IntegerField()
    quizlocation = models.CharField(max_length=500)