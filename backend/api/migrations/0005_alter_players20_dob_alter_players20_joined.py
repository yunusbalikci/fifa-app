# Generated by Django 4.1 on 2023-12-18 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_players20_dob'),
    ]

    operations = [
        migrations.AlterField(
            model_name='players20',
            name='dob',
            field=models.DateField(verbose_name='Date of Birth'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='joined',
            field=models.DateTimeField(verbose_name='Joined'),
        ),
    ]
