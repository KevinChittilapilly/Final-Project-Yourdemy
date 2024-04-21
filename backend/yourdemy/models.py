from django.db import models

# Create your models here.

class User(models.Model):
    user_id = models.AutoField(primary_key=True,)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    interactive_mode = models.BooleanField(default=False)
    special_offers = models.BooleanField(default=False)


class Courses(models.Model):
    course_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=500)
    instructor = models.CharField(max_length=100)
    price = models.IntegerField()
    rating = models.IntegerField()
    duration = models.IntegerField()
    quizlocation = models.CharField(max_length=500)
    about = models.TextField(default="")
    description = models.TextField(default="")
    instrs_des = models.TextField(default="")
    image_link = models.CharField(max_length=500, default="https://example.com/default-image.jpg")

class Section(models.Model):
    course = models.ForeignKey(Courses, on_delete=models.CASCADE, related_name='sections')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    order = models.IntegerField(help_text="The order in which sections are displayed")

    class Meta:
        ordering = ['order']  # Ensures sections are ordered by 'order' by default

    def __str__(self):
        return self.title

class VideoLecture(models.Model):
    section = models.ForeignKey(Section, on_delete=models.CASCADE, related_name='video_lectures')
    title = models.CharField(max_length=200)
    video_url = models.URLField()  # Assuming you store a URL to the video content
    duration = models.DurationField()  # Could also be a CharField if you want to store as "5min"
    order = models.IntegerField(help_text="The order in which video lectures are displayed")

    class Meta:
        ordering = ['order']  # Ensures video lectures are ordered by 'order' by default

    def __str__(self):
        return self.title
    