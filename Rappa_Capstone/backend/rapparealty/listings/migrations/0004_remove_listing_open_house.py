# Generated by Django 3.1.7 on 2021-06-06 17:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0003_auto_20210606_1723'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='open_house',
        ),
    ]