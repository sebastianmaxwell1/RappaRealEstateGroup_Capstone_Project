# Generated by Django 3.1.7 on 2021-06-06 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0005_listing_open_house'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='open_house',
            field=models.BooleanField(default=False),
        ),
    ]