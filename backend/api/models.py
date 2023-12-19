from django.db import models


# Create your models here.
class Players20(models.Model):
    sofifa_id = models.IntegerField(
        verbose_name="Sofifa ID", unique=True, primary_key=True
    )
    player_url = models.CharField(
        max_length=255, verbose_name="Player URL", null=True, blank=True
    )
    short_name = models.CharField(
        max_length=255, verbose_name="Short Name", null=True, blank=True
    )
    long_name = models.CharField(
        max_length=255, verbose_name="Long Name", null=True, blank=True
    )
    age = models.IntegerField(verbose_name="Age", null=True, blank=True)
    dob = models.DateTimeField(verbose_name="Date of Birth", null=True, blank=True)
    height_cm = models.IntegerField(verbose_name="Height (cm)", null=True, blank=True)
    weight_kg = models.IntegerField(verbose_name="Weight (kg)", null=True, blank=True)
    nationality = models.CharField(
        max_length=255, verbose_name="Nationality", null=True, blank=True
    )
    club = models.CharField(max_length=255, verbose_name="Club", null=True, blank=True)
    overall = models.IntegerField(verbose_name="Overall", null=True, blank=True)
    potential = models.IntegerField(verbose_name="Potential", null=True, blank=True)
    value_eur = models.IntegerField(verbose_name="Value (EUR)", null=True, blank=True)
    wage_eur = models.IntegerField(verbose_name="Wage (EUR)", null=True, blank=True)
    player_positions = models.CharField(
        max_length=255, verbose_name="Player Positions", null=True, blank=True
    )
    preferred_foot = models.CharField(
        max_length=255, verbose_name="Preferred Foot", null=True, blank=True
    )
    international_reputation = models.IntegerField(
        verbose_name="International Reputation", null=True, blank=True
    )
    weak_foot = models.IntegerField(verbose_name="Weak Foot", null=True, blank=True)
    skill_moves = models.IntegerField(verbose_name="Skill Moves", null=True, blank=True)
    work_rate = models.CharField(
        max_length=255, verbose_name="Work Rate", null=True, blank=True
    )
    body_type = models.CharField(
        max_length=255, verbose_name="Body Type", null=True, blank=True
    )
    real_face = models.CharField(
        max_length=255, verbose_name="Real Face", null=True, blank=True
    )
    release_clause_eur = models.IntegerField(
        verbose_name="Release Clause (EUR)", null=True, blank=True
    )
    player_tags = models.CharField(
        max_length=255, verbose_name="Player Tags", null=True, blank=True
    )
    team_position = models.CharField(
        max_length=255, verbose_name="Team Position", null=True, blank=True
    )
    team_jersey_number = models.IntegerField(
        verbose_name="Team Jersey Number", null=True, blank=True
    )
    loaned_from = models.CharField(
        max_length=255, verbose_name="Loaned From", null=True, blank=True
    )
    joined = models.DateTimeField(verbose_name="Joined", null=True, blank=True)
    contract_valid_until = models.IntegerField(
        verbose_name="Contract Valid Until", null=True, blank=True
    )
    nation_position = models.CharField(
        max_length=255, verbose_name="Nation Position", null=True, blank=True
    )
    nation_jersey_number = models.IntegerField(
        verbose_name="Nation Jersey Number", null=True, blank=True
    )
    pace = models.IntegerField(verbose_name="Pace", null=True, blank=True)
    shooting = models.IntegerField(verbose_name="Shooting", null=True, blank=True)
    passing = models.IntegerField(verbose_name="Passing", null=True, blank=True)
    dribbling = models.IntegerField(verbose_name="Dribbling", null=True, blank=True)
    defending = models.IntegerField(verbose_name="Defending", null=True, blank=True)
    physic = models.IntegerField(verbose_name="Physic", null=True, blank=True)
    gk_diving = models.IntegerField(verbose_name="GK Diving", null=True, blank=True)
    gk_handling = models.IntegerField(verbose_name="GK Handling", null=True, blank=True)
    gk_kicking = models.IntegerField(verbose_name="GK Kicking", null=True, blank=True)
    gk_reflexes = models.IntegerField(verbose_name="GK Reflexes", null=True, blank=True)
    gk_speed = models.IntegerField(verbose_name="GK Speed", null=True, blank=True)
    gk_positioning = models.IntegerField(
        verbose_name="GK Positioning", null=True, blank=True
    )
    player_traits = models.CharField(
        max_length=255, verbose_name="Player Traits", null=True, blank=True
    )
    attacking_crossing = models.IntegerField(
        verbose_name="Attacking Crossing", null=True, blank=True
    )
    attacking_finishing = models.IntegerField(
        verbose_name="Attacking Finishing", null=True, blank=True
    )
    attacking_heading_accuracy = models.IntegerField(
        verbose_name="Attacking Heading Accuracy", null=True, blank=True
    )
    attacking_short_passing = models.IntegerField(
        verbose_name="Attacking Short Passing", null=True, blank=True
    )
    attacking_volleys = models.IntegerField(
        verbose_name="Attacking Volleys", null=True, blank=True
    )
    skill_dribbling = models.IntegerField(
        verbose_name="Skill Dribbling", null=True, blank=True
    )
    skill_curve = models.IntegerField(verbose_name="Skill Curve", null=True, blank=True)
    skill_fk_accuracy = models.IntegerField(
        verbose_name="Skill FK Accuracy", null=True, blank=True
    )
    skill_long_passing = models.IntegerField(
        verbose_name="Skill Long Passing", null=True, blank=True
    )
    skill_ball_control = models.IntegerField(
        verbose_name="Skill Ball Control", null=True, blank=True
    )
    movement_acceleration = models.IntegerField(
        verbose_name="Movement Acceleration", null=True, blank=True
    )
    movement_sprint_speed = models.IntegerField(
        verbose_name="Movement Sprint Speed", null=True, blank=True
    )
    movement_agility = models.IntegerField(
        verbose_name="Movement Agility", null=True, blank=True
    )
    movement_reactions = models.IntegerField(
        verbose_name="Movement Reactions", null=True, blank=True
    )
    movement_balance = models.IntegerField(
        verbose_name="Movement Balance", null=True, blank=True
    )
    power_shot_power = models.IntegerField(
        verbose_name="Power Shot Power", null=True, blank=True
    )
    power_jumping = models.IntegerField(
        verbose_name="Power Jumping", null=True, blank=True
    )
    power_stamina = models.IntegerField(
        verbose_name="Power Stamina", null=True, blank=True
    )
    power_strength = models.IntegerField(
        verbose_name="Power Strength", null=True, blank=True
    )
    power_long_shots = models.IntegerField(
        verbose_name="Power Long Shots", null=True, blank=True
    )
    mentality_aggression = models.IntegerField(
        verbose_name="Mentality Aggression", null=True, blank=True
    )
    mentality_interceptions = models.IntegerField(
        verbose_name="Mentality Interceptions", null=True, blank=True
    )
    mentality_positioning = models.IntegerField(
        verbose_name="Mentality Positioning", null=True, blank=True
    )
    mentality_vision = models.IntegerField(
        verbose_name="Mentality Vision", null=True, blank=True
    )
    mentality_penalties = models.IntegerField(
        verbose_name="Mentality Penalties", null=True, blank=True
    )
    mentality_composure = models.IntegerField(
        verbose_name="Mentality Composure", null=True, blank=True
    )
    defending_marking = models.IntegerField(
        verbose_name="Defending Marking", null=True, blank=True
    )
    defending_standing_tackle = models.IntegerField(
        verbose_name="Defending Standing Tackle", null=True, blank=True
    )
    defending_sliding_tackle = models.IntegerField(
        verbose_name="Defending Sliding Tackle", null=True, blank=True
    )
    goalkeeping_diving = models.IntegerField(
        verbose_name="Goalkeeping Diving", null=True, blank=True
    )
    goalkeeping_handling = models.IntegerField(
        verbose_name="Goalkeeping Handling", null=True, blank=True
    )
    goalkeeping_kicking = models.IntegerField(
        verbose_name="Goalkeeping Kicking", null=True, blank=True
    )
    goalkeeping_positioning = models.IntegerField(
        verbose_name="Goalkeeping Positioning", null=True, blank=True
    )
    goalkeeping_reflexes = models.IntegerField(
        verbose_name="Goalkeeping Reflexes", null=True, blank=True
    )
    ls = models.IntegerField(verbose_name="LS", null=True, blank=True)
    st = models.IntegerField(verbose_name="ST", null=True, blank=True)
    rs = models.IntegerField(verbose_name="RS", null=True, blank=True)
    lw = models.IntegerField(verbose_name="LW", null=True, blank=True)
    lf = models.IntegerField(verbose_name="LF", null=True, blank=True)
    cf = models.IntegerField(verbose_name="CF", null=True, blank=True)
    rf = models.IntegerField(verbose_name="RF", null=True, blank=True)
    rw = models.IntegerField(verbose_name="RW", null=True, blank=True)
    lam = models.IntegerField(verbose_name="LAM", null=True, blank=True)
    cam = models.IntegerField(verbose_name="CAM", null=True, blank=True)
    ram = models.IntegerField(verbose_name="RAM", null=True, blank=True)
    lm = models.IntegerField(verbose_name="LM", null=True, blank=True)
    lcm = models.IntegerField(verbose_name="LCM", null=True, blank=True)
    cm = models.IntegerField(verbose_name="CM", null=True, blank=True)
    rcm = models.IntegerField(verbose_name="RCM", null=True, blank=True)
    rm = models.IntegerField(verbose_name="RM", null=True, blank=True)
    lwb = models.IntegerField(verbose_name="LWB", null=True, blank=True)
    ldm = models.IntegerField(verbose_name="LDM", null=True, blank=True)
    cdm = models.IntegerField(verbose_name="CDM", null=True, blank=True)
    rdm = models.IntegerField(verbose_name="RDM", null=True, blank=True)
    rwb = models.IntegerField(verbose_name="RWB", null=True, blank=True)
    lb = models.IntegerField(verbose_name="LB", null=True, blank=True)
    lcb = models.IntegerField(verbose_name="LCB", null=True, blank=True)
    cb = models.IntegerField(verbose_name="CB", null=True, blank=True)
    rcb = models.IntegerField(verbose_name="RCB", null=True, blank=True)
    rb = models.IntegerField(verbose_name="RB", null=True, blank=True)

    def __str__(self):
        return self.short_name

    class Meta:
        ordering = ["overall"]


class TeamsAndLeagues(models.Model):
    url = models.CharField(max_length=255, verbose_name="URL")
    league_name = models.CharField(max_length=255, verbose_name="League Name")

    def __str__(self):
        return self.league_name

    class Meta:
        ordering = ["league_name"]
