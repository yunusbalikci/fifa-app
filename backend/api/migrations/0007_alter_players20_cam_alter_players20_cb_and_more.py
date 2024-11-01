# Generated by Django 4.1 on 2023-12-19 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_players20_cam_alter_players20_cb_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='players20',
            name='cam',
            field=models.IntegerField(verbose_name='CAM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='cb',
            field=models.IntegerField(verbose_name='CB'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='cdm',
            field=models.IntegerField(verbose_name='CDM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='cf',
            field=models.IntegerField(verbose_name='CF'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='cm',
            field=models.IntegerField(verbose_name='CM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='contract_valid_until',
            field=models.IntegerField(verbose_name='Contract Valid Until'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='lam',
            field=models.IntegerField(verbose_name='LAM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='lb',
            field=models.IntegerField(verbose_name='LB'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='lcb',
            field=models.IntegerField(verbose_name='LCB'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='lcm',
            field=models.IntegerField(verbose_name='LCM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='ldm',
            field=models.IntegerField(verbose_name='LDM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='lf',
            field=models.IntegerField(verbose_name='LF'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='lm',
            field=models.IntegerField(verbose_name='LM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='ls',
            field=models.IntegerField(verbose_name='LS'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='lw',
            field=models.IntegerField(verbose_name='LW'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='lwb',
            field=models.IntegerField(verbose_name='LWB'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='ram',
            field=models.IntegerField(verbose_name='RAM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rb',
            field=models.IntegerField(verbose_name='RB'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rcb',
            field=models.IntegerField(verbose_name='RCB'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rcm',
            field=models.IntegerField(verbose_name='RCM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rdm',
            field=models.IntegerField(verbose_name='RDM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rf',
            field=models.IntegerField(verbose_name='RF'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rm',
            field=models.IntegerField(verbose_name='RM'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rs',
            field=models.IntegerField(verbose_name='RS'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rw',
            field=models.IntegerField(verbose_name='RW'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='rwb',
            field=models.IntegerField(verbose_name='RWB'),
        ),
        migrations.AlterField(
            model_name='players20',
            name='st',
            field=models.IntegerField(verbose_name='ST'),
        ),
    ]
