# Generated by Django 4.1 on 2023-12-17 19:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='players20',
            name='dob',
            field=models.CharField(max_length=255, verbose_name='Date of Birth'),
        ),
    ]
