# Generated by Django 4.1 on 2023-12-16 11:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Players',
        ),
        migrations.DeleteModel(
            name='TeamsAndLeagues',
        ),
    ]
