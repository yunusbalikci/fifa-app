from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Players20, TeamsAndLeagues
from .serializers import Players20Serializer, TeamsAndLeaguesSerializer
from django.http import HttpResponse

# Create your views here.


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@api_view(["GET"])
def PlayerDetail(request, pk):
    player = Players20.objects.get(sofifa_id=pk)
    serializer = Players20Serializer(player, many=False)
    return Response(serializer.data)


@api_view(["GET"])
def PlayerList(request):
    players = Players20.objects.all()
    serializer = Players20Serializer(players, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def TeamList(request):
    teams = TeamsAndLeagues.objects.all()
    serializer = TeamsAndLeaguesSerializer(teams, many=True)
    return Response(serializer.data)
