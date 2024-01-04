from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("players/", views.PlayerList, name="players"),
    path("players/<int:pk>/", views.PlayerDetail, name="player"),
    path("teams/", views.TeamList, name="teams"),
    path("deneme/", views.deneme, name="deneme"),
    path("player-value-guess/", views.PlayerValue, name="PlayerValue"),
    path("position-quess/", views.PositionQuess, name="position-quess"),
    path("best-team/", views.BestTeam, name="best-team"),
]
