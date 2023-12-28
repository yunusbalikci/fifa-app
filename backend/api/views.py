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
    # select top 10 * from players20 order by overall desc
    players = Players20.objects.all().order_by("-overall")[:10]
    serializer = Players20Serializer(players, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def TeamList(request):
    teams = TeamsAndLeagues.objects.all()
    serializer = TeamsAndLeaguesSerializer(teams, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def deneme(request):
    routes = [
        {
            "Endpoint": "/notes/",
            "method": "GET",
            "body": None,
            "description": "Returns an array of notes.",
        },
        {
            "Endpoint": "/notes/id",
            "method": "GET",
            "body": None,
            "description": "Returns a single note object.",
        },
        {
            "Endpoint": "/notes/create",
            "method": "POST",
            "body": {"body": ""},
            "description": "Creates a new note with data sent in post request.",
        },
        {
            "Endpoint": "/notes/id/update",
            "method": "PUT",
            "body": {"body": ""},
            "description": "Updates an existing note with data sent in post request.",
        },
        {
            "Endpoint": "/notes/id/delete",
            "method": "DELETE",
            "body": None,
            "description": "Deletes an existing note.",
        },
    ]
    return Response(routes)
