# Generated by Django 4.1 on 2022-08-10 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Member",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=70)),
                ("field", models.CharField(max_length=70)),
                ("tech_stack", models.CharField(max_length=70)),
                ("career_period", models.IntegerField(default=0)),
                ("pr_text", models.CharField(max_length=500)),
            ],
        ),
    ]
