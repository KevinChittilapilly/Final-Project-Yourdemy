# Generated by Django 4.2.11 on 2024-04-20 04:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("yourdemy", "0002_section_videolecture"),
    ]

    operations = [
        migrations.AddField(
            model_name="courses", name="about", field=models.TextField(default=""),
        ),
        migrations.AddField(
            model_name="courses",
            name="description",
            field=models.TextField(default=""),
        ),
        migrations.AddField(
            model_name="courses", name="instrs_des", field=models.TextField(default=""),
        ),
    ]
