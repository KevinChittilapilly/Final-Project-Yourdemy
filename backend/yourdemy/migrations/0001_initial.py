# Generated by Django 4.2.11 on 2024-04-19 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Courses",
            fields=[
                ("course_id", models.AutoField(primary_key=True, serialize=False)),
                ("title", models.CharField(max_length=500)),
                ("instructor", models.CharField(max_length=100)),
                ("price", models.IntegerField()),
                ("rating", models.IntegerField()),
                ("duration", models.IntegerField()),
                ("quizlocation", models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                ("user_id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=100)),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("password", models.CharField(max_length=100)),
                ("interactive_mode", models.BooleanField(default=False)),
            ],
        ),
    ]
