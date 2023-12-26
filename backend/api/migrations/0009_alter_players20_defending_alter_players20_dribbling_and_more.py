# Generated by Django 4.1 on 2023-12-19 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_players20_age_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='players20',
            name='defending',
            field=models.FloatField(blank=True, null=True, verbose_name='Defending'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='dribbling',
            field=models.FloatField(blank=True, null=True, verbose_name='Dribbling'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='gk_diving',
            field=models.FloatField(blank=True, null=True, verbose_name='GK Diving'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='gk_handling',
            field=models.FloatField(blank=True, null=True, verbose_name='GK Handling'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='gk_kicking',
            field=models.FloatField(blank=True, null=True, verbose_name='GK Kicking'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='gk_positioning',
            field=models.FloatField(blank=True, null=True, verbose_name='GK Positioning'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='gk_reflexes',
            field=models.FloatField(blank=True, null=True, verbose_name='GK Reflexes'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='gk_speed',
            field=models.FloatField(blank=True, null=True, verbose_name='GK Speed'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='nation_jersey_number',
            field=models.FloatField(blank=True, null=True, verbose_name='Nation Jersey Number'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='pace',
            field=models.FloatField(blank=True, null=True, verbose_name='Pace'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='passing',
            field=models.FloatField(blank=True, null=True, verbose_name='Passing'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='physic',
            field=models.FloatField(blank=True, null=True, verbose_name='Physic'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='release_clause_eur',
            field=models.FloatField(blank=True, null=True, verbose_name='Release Clause (EUR)'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='shooting',
            field=models.FloatField(blank=True, null=True, verbose_name='Shooting'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='team_jersey_number',
            field=models.FloatField(blank=True, null=True, verbose_name='Team Jersey Number'),
        ),
    ]