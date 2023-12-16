# Generated by Django 4.1 on 2023-12-16 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Players',
            fields=[
                ('sofifa_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('player_url', models.CharField(max_length=255)),
                ('short_name', models.CharField(max_length=255)),
                ('long_name', models.CharField(max_length=255)),
                ('age', models.IntegerField()),
                ('dob', models.DateField()),
                ('height_cm', models.IntegerField()),
                ('weight_kg', models.IntegerField()),
                ('nationality', models.CharField(max_length=255)),
                ('club', models.CharField(max_length=255)),
                ('overall', models.IntegerField()),
                ('potential', models.IntegerField()),
                ('value_eur', models.IntegerField()),
                ('wage_eur', models.IntegerField()),
                ('player_positions', models.CharField(max_length=255)),
                ('preferred_foot', models.CharField(max_length=255)),
                ('international_reputation', models.IntegerField()),
                ('weak_foot', models.IntegerField()),
                ('skill_moves', models.IntegerField()),
                ('work_rate', models.CharField(max_length=255)),
                ('body_type', models.CharField(max_length=255)),
                ('real_face', models.CharField(max_length=255)),
                ('release_clause_eur', models.FloatField()),
                ('player_tags', models.CharField(max_length=255)),
                ('team_position', models.CharField(max_length=255)),
                ('team_jersey_number', models.FloatField()),
                ('loaned_from', models.CharField(max_length=255)),
                ('joined', models.CharField(max_length=255)),
                ('contract_valid_until', models.FloatField()),
                ('nation_position', models.CharField(max_length=255)),
                ('nation_jersey_number', models.FloatField()),
                ('pace', models.FloatField()),
                ('shooting', models.FloatField()),
                ('passing', models.FloatField()),
                ('dribbling', models.FloatField()),
                ('defending', models.FloatField()),
                ('physic', models.FloatField()),
                ('gk_diving', models.FloatField()),
                ('gk_handling', models.FloatField()),
                ('gk_kicking', models.FloatField()),
                ('gk_reflexes', models.FloatField()),
                ('gk_speed', models.FloatField()),
                ('gk_positioning', models.FloatField()),
                ('player_traits', models.CharField(max_length=255)),
                ('attacking_crossing', models.IntegerField()),
                ('attacking_finishing', models.IntegerField()),
                ('attacking_heading_accuracy', models.IntegerField()),
                ('attacking_short_passing', models.IntegerField()),
                ('attacking_volleys', models.IntegerField()),
                ('skill_dribbling', models.IntegerField()),
                ('skill_curve', models.IntegerField()),
                ('skill_fk_accuracy', models.IntegerField()),
                ('skill_long_passing', models.IntegerField()),
                ('skill_ball_control', models.IntegerField()),
                ('movement_acceleration', models.IntegerField()),
                ('movement_sprint_speed', models.IntegerField()),
                ('movement_agility', models.IntegerField()),
                ('movement_reactions', models.IntegerField()),
                ('movement_balance', models.IntegerField()),
                ('power_shot_power', models.IntegerField()),
                ('power_jumping', models.IntegerField()),
                ('power_stamina', models.IntegerField()),
                ('power_strength', models.IntegerField()),
                ('power_long_shots', models.IntegerField()),
                ('mentality_aggression', models.IntegerField()),
                ('mentality_interceptions', models.IntegerField()),
                ('mentality_positioning', models.IntegerField()),
                ('mentality_vision', models.IntegerField()),
                ('mentality_penalties', models.IntegerField()),
                ('mentality_composure', models.IntegerField()),
                ('defending_marking', models.IntegerField()),
                ('defending_standing_tackle', models.IntegerField()),
                ('defending_sliding_tackle', models.IntegerField()),
                ('goalkeeping_diving', models.IntegerField()),
                ('goalkeeping_handling', models.IntegerField()),
                ('goalkeeping_kicking', models.IntegerField()),
                ('goalkeeping_positioning', models.IntegerField()),
                ('goalkeeping_reflexes', models.IntegerField()),
                ('ls', models.CharField(max_length=255)),
                ('st', models.CharField(max_length=255)),
                ('rs', models.CharField(max_length=255)),
                ('lw', models.CharField(max_length=255)),
                ('lf', models.CharField(max_length=255)),
                ('cf', models.CharField(max_length=255)),
                ('rf', models.CharField(max_length=255)),
                ('rw', models.CharField(max_length=255)),
                ('lam', models.CharField(max_length=255)),
                ('cam', models.CharField(max_length=255)),
                ('ram', models.CharField(max_length=255)),
                ('lm', models.CharField(max_length=255)),
                ('lcm', models.CharField(max_length=255)),
                ('cm', models.CharField(max_length=255)),
                ('rcm', models.CharField(max_length=255)),
                ('rm', models.CharField(max_length=255)),
                ('lwb', models.CharField(max_length=255)),
                ('ldm', models.CharField(max_length=255)),
                ('cdm', models.CharField(max_length=255)),
                ('rdm', models.CharField(max_length=255)),
                ('rwb', models.CharField(max_length=255)),
                ('lb', models.CharField(max_length=255)),
                ('lcb', models.CharField(max_length=255)),
                ('cb', models.CharField(max_length=255)),
                ('rcb', models.CharField(max_length=255)),
                ('rb', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'players20',
                'ordering': ['-overall'],
            },
        ),
        migrations.CreateModel(
            name='TeamsAndLeagues',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=255)),
                ('league_name', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'teams_and_leagues',
                'ordering': ['league_name'],
            },
        ),
    ]
