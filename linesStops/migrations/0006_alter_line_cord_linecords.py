# Generated by Django 3.2.9 on 2021-12-21 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('linesStops', '0005_line_cord'),
    ]

    operations = [
        migrations.AlterField(
            model_name='line_cord',
            name='LineCords',
            field=models.TextField(),
        ),
    ]
