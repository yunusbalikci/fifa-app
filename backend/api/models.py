from django.db import models


# Create your models here.
class Players20(models.Model):
    sofifa_id = models.IntegerField(primary_key=True, verbose_name="Sofifa ID")
    player_url = models.CharField(max_length=255, verbose_name="Player URL")
    short_name = models.CharField(max_length=255, verbose_name="Short Name")
    long_name = models.CharField(max_length=255, verbose_name="Long Name")
    age = models.IntegerField(verbose_name="Age")
    height_cm = models.IntegerField(verbose_name="Height (cm)")
    weight_kg = models.IntegerField(verbose_name="Weight (kg)")
    nationality = models.CharField(max_length=255, verbose_name="Nationality")
    club = models.CharField(max_length=255, verbose_name="Club")
    overall = models.IntegerField(verbose_name="Overall")
    potential = models.IntegerField(verbose_name="Potential")
    value_eur = models.IntegerField(verbose_name="Value (EUR)")
    wage_eur = models.IntegerField(verbose_name="Wage (EUR)")
    player_positions = models.CharField(max_length=255, verbose_name="Player Positions")
    preferred_foot = models.CharField(max_length=255, verbose_name="Preferred Foot")
    international_reputation = models.IntegerField(
        verbose_name="International Reputation"
    )
    weak_foot = models.IntegerField(verbose_name="Weak Foot")
    skill_moves = models.IntegerField(verbose_name="Skill Moves")
    work_rate = models.CharField(max_length=255, verbose_name="Work Rate")
    body_type = models.CharField(max_length=255, verbose_name="Body Type")
    real_face = models.CharField(max_length=255, verbose_name="Real Face")
    release_clause_eur = models.FloatField(verbose_name="Release Clause (EUR)")
    player_tags = models.CharField(max_length=255, verbose_name="Player Tags")
    team_position = models.CharField(max_length=255, verbose_name="Team Position")
    team_jersey_number = models.FloatField(verbose_name="Team Jersey Number")
    loaned_from = models.CharField(max_length=255, verbose_name="Loaned From")
    joined = models.DateTimeField(verbose_name="Joined")
    contract_valid_until = models.FloatField(verbose_name="Contract Valid Until")
    nation_position = models.CharField(max_length=255, verbose_name="Nation Position")
    nation_jersey_number = models.FloatField(verbose_name="Nation Jersey Number")
    pace = models.FloatField(verbose_name="Pace")
    shooting = models.FloatField(verbose_name="Shooting")
    passing = models.FloatField(verbose_name="Passing")
    dribbling = models.FloatField(verbose_name="Dribbling")
    defending = models.FloatField(verbose_name="Defending")
    physic = models.FloatField(verbose_name="Physic")
    gk_diving = models.FloatField(verbose_name="GK Diving")
    gk_handling = models.FloatField(verbose_name="GK Handling")
    gk_kicking = models.FloatField(verbose_name="GK Kicking")
    gk_reflexes = models.FloatField(verbose_name="GK Reflexes")
    gk_speed = models.FloatField(verbose_name="GK Speed")
    gk_positioning = models.FloatField(verbose_name="GK Positioning")
    player_traits = models.CharField(max_length=255, verbose_name="Player Traits")
    attacking_crossing = models.IntegerField(verbose_name="Attacking Crossing")
    attacking_finishing = models.IntegerField(verbose_name="Attacking Finishing")
    attacking_heading_accuracy = models.IntegerField(
        verbose_name="Attacking Heading Accuracy"
    )
    attacking_short_passing = models.IntegerField(
        verbose_name="Attacking Short Passing"
    )
    attacking_volleys = models.IntegerField(verbose_name="Attacking Volleys")
    skill_dribbling = models.IntegerField(verbose_name="Skill Dribbling")
    skill_curve = models.IntegerField(verbose_name="Skill Curve")
    skill_fk_accuracy = models.IntegerField(verbose_name="Skill FK Accuracy")
    skill_long_passing = models.IntegerField(verbose_name="Skill Long Passing")
    skill_ball_control = models.IntegerField(verbose_name="Skill Ball Control")
    movement_acceleration = models.IntegerField(verbose_name="Movement Acceleration")
    movement_sprint_speed = models.IntegerField(verbose_name="Movement Sprint Speed")
    movement_agility = models.IntegerField(verbose_name="Movement Agility")
    movement_reactions = models.IntegerField(verbose_name="Movement Reactions")
    movement_balance = models.IntegerField(verbose_name="Movement Balance")
    power_shot_power = models.IntegerField(verbose_name="Power Shot Power")
    power_jumping = models.IntegerField(verbose_name="Power Jumping")
    power_stamina = models.IntegerField(verbose_name="Power Stamina")
    power_strength = models.IntegerField(verbose_name="Power Strength")
    power_long_shots = models.IntegerField(verbose_name="Power Long Shots")
    mentality_aggression = models.IntegerField(verbose_name="Mentality Aggression")
    mentality_interceptions = models.IntegerField(
        verbose_name="Mentality Interceptions"
    )
    mentality_positioning = models.IntegerField(verbose_name="Mentality Positioning")
    mentality_vision = models.IntegerField(verbose_name="Mentality Vision")
    mentality_penalties = models.IntegerField(verbose_name="Mentality Penalties")
    mentality_composure = models.IntegerField(verbose_name="Mentality Composure")
    defending_marking = models.IntegerField(verbose_name="Defending Marking")
    defending_standing_tackle = models.IntegerField(
        verbose_name="Defending Standing Tackle"
    )
    defending_sliding_tackle = models.IntegerField(
        verbose_name="Defending Sliding Tackle"
    )
    goalkeeping_diving = models.IntegerField(verbose_name="Goalkeeping Diving")
    goalkeeping_handling = models.IntegerField(verbose_name="Goalkeeping Handling")
    goalkeeping_kicking = models.IntegerField(verbose_name="Goalkeeping Kicking")
    goalkeeping_positioning = models.IntegerField(
        verbose_name="Goalkeeping Positioning"
    )
    goalkeeping_reflexes = models.IntegerField(verbose_name="Goalkeeping Reflexes")
    ls = models.CharField(max_length=255, verbose_name="LS")
    st = models.CharField(max_length=255, verbose_name="ST")
    rs = models.CharField(max_length=255, verbose_name="RS")
    lw = models.CharField(max_length=255, verbose_name="LW")
    lf = models.CharField(max_length=255, verbose_name="LF")
    cf = models.CharField(max_length=255, verbose_name="CF")
    rf = models.CharField(max_length=255, verbose_name="RF")
    rw = models.CharField(max_length=255, verbose_name="RW")
    lam = models.CharField(max_length=255, verbose_name="LAM")
    cam = models.CharField(max_length=255, verbose_name="CAM")
    ram = models.CharField(max_length=255, verbose_name="RAM")
    lm = models.CharField(max_length=255, verbose_name="LM")
    lcm = models.CharField(max_length=255, verbose_name="LCM")
    cm = models.CharField(max_length=255, verbose_name="CM")
    rcm = models.CharField(max_length=255, verbose_name="RCM")
    rm = models.CharField(max_length=255, verbose_name="RM")
    lwb = models.CharField(max_length=255, verbose_name="LWB")
    ldm = models.CharField(max_length=255, verbose_name="LDM")
    cdm = models.CharField(max_length=255, verbose_name="CDM")
    rdm = models.CharField(max_length=255, verbose_name="RDM")
    rwb = models.CharField(max_length=255, verbose_name="RWB")
    lb = models.CharField(max_length=255, verbose_name="LB")
    lcb = models.CharField(max_length=255, verbose_name="LCB")
    cb = models.CharField(max_length=255, verbose_name="CB")
    rcb = models.CharField(max_length=255, verbose_name="RCB")
    rb = models.CharField(max_length=255, verbose_name="RB")
    dob = models.DateField(verbose_name="Date of Birth")

    def __str__(self):
        return self.short_name

    class Meta:
        ordering = ["-overall"]


class TeamsAndLeagues(models.Model):
    url = models.CharField(max_length=255, verbose_name="URL")
    league_name = models.CharField(max_length=255, verbose_name="League Name")

    def __str__(self):
        return self.league_name

    class Meta:
        ordering = ["league_name"]
