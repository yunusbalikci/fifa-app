from django.contrib import admin
from .models import Players20, TeamsAndLeagues

# Register your models here.


@admin.register(Players20)
class PlayerAdmin(admin.ModelAdmin):
    list_display = [
        "age",
        "short_name",
        "club",
        "overall",
        "value_eur",
        "wage_eur",
        "player_positions",
    ]
    list_filter = ["club", "overall", "player_positions"]
    search_fields = ["short_name", "club", "player_positions"]
    ordering = ["overall"]
    list_per_page = 20

    class Meta:
        model = Players20


@admin.register(TeamsAndLeagues)
class TeamAdmin(admin.ModelAdmin):
    list_display = ["url", "league_name"]
    list_filter = ["league_name"]
    search_fields = ["league_name"]
    ordering = ["league_name"]
    list_per_page = 20

    class Meta:
        model = TeamsAndLeagues
