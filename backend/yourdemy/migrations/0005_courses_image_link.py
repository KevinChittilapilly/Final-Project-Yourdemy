# Generated by Django 4.2.11 on 2024-04-21 02:40

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("yourdemy", "0004_user_special_offers"),
    ]

    operations = [
        migrations.AddField(
            model_name="courses",
            name="image_link",
            field=models.CharField(
                default="https://example.com/default-image.jpg", max_length=500
            ),
        ),
    ]
