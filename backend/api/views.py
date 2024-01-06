from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Players20, TeamsAndLeagues
from .serializers import Players20Serializer, TeamsAndLeaguesSerializer
from django.http import HttpResponse
from joblib import load
import numpy as np
import os
import pandas as pd

# Load the model
model = load(os.path.join(os.path.dirname(__file__), "../Models/priceQuess.pkl"))
position_model = load(
    os.path.join(os.path.dirname(__file__), "../Models/position_guess_model.pkl")
)

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
    # select players from Real Madrid
    players = Players20.objects.filter(club="Real Madrid")
    serializer = Players20Serializer(players, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def TeamList(request):
    teams = TeamsAndLeagues.objects.all()
    serializer = TeamsAndLeaguesSerializer(teams, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def PlayerValue(request):
    if request.method == "POST":
        Overall = request.data.get("Overall")
        Potential = request.data.get("Potential")
        Ball_control = request.data.get("Ball_control")
        Composure = request.data.get("Composure")
        Reactions = request.data.get("Reactions")
        Age = request.data.get("Age")

        # Create a list of features
        features = [
            Overall,
            Potential,
            Ball_control,
            Composure,
            Reactions,
            Age,
        ]

        # Create a dictionary for the response
        response = {}

        # Create a list of feature names
        feature_names = [
            "Overall",
            "Potential",
            "Ball control",
            "Composure",
            "Reactions",
            "Age",
        ]

        # Create a dictionary for the features
        features_dict = dict(zip(feature_names, features))

        # Create a dataframe from the features
        features_df = pd.DataFrame([features_dict])

        # Make a prediction using the random forest model
        prediction = model.predict(features_df)

        # Add the prediction to the response dictionary
        response["prediction"] = prediction[0]

        # Send the response dictionary as a json object
        return Response(response)

    else:
        return Response("Send a POST request with the features to get a prediction.")


@api_view(["POST"])
def PositionQuess(request):
    """
    Selected columns:
    'Acceleration', 'Crossing', 'Dribbling', 'Finishing',
    'Heading accuracy', 'Long passing', 'Positioning',
    'Sliding tackle', 'Standing tackle', 'Vision'

    Position mapping:
     "ST": 0,"RW": 1,"LW": 1, "RM": 2,"CM": 3,"LM": 2,
    "CAM": 4,"CF": 5,"CDM": 6,"CB": 7,"LB": 8,"RB": 8,
    "RWB": 8,"LWB": 8,
    """

    if request.method == "POST":
        Acceleration = request.data.get("Acceleration")
        Crossing = request.data.get("Crossing")
        Dribbling = request.data.get("Dribbling")
        Finishing = request.data.get("Finishing")
        Heading_accuracy = request.data.get("Heading_accuracy")
        Long_passing = request.data.get("Long_passing")
        Positioning = request.data.get("Positioning")
        Sliding_tackle = request.data.get("Sliding_tackle")
        Standing_tackle = request.data.get("Standing_tackle")
        Vision = request.data.get("Vision")

        # Create a list of features
        features = [
            Acceleration,
            Crossing,
            Dribbling,
            Finishing,
            Heading_accuracy,
            Long_passing,
            Positioning,
            Sliding_tackle,
            Standing_tackle,
            Vision,
        ]

        # Create a dictionary for the response
        response = {}

        # Create a list of feature names
        feature_names = [
            "Acceleration",
            "Crossing",
            "Dribbling",
            "Finishing",
            "Heading accuracy",
            "Long passing",
            "Positioning",
            "Sliding tackle",
            "Standing tackle",
            "Vision",
        ]

        # Create a dictionary for the features
        features_dict = dict(zip(feature_names, features))

        # Create a dataframe from the features
        features_df = pd.DataFrame([features_dict])

        # Make a prediction using the random forest model
        prediction = position_model.predict(features_df)

        # Add the prediction to the response dictionary
        response["prediction"] = prediction[0]

        # Send the response dictionary as a json object
        return Response(response)

    else:
        return Response("Send a POST request with the features to get a prediction.")


# Get all palayers from same team and select best 11 players according to their overall with their position
@api_view(["GET"])
def BestTeam(request):
    def get_best_player(position):
        players = Players20.objects.filter(
            club="Real Madrid", team_position=position
        ).order_by("-overall")
        return players[0] if players else None

    gk = get_best_player("GK")
    backs = ["RB", "LB", "CB", "RWB", "LWB"]
    centers = ["CB", "CM", "CDM", "CAM"]
    wings = ["LM", "RM", "LW", "RW"]
    forwards = ["ST", "CF"]

    # get the best players from each position
    players = sorted(
        [player for player in (get_best_player(position) for position in backs + centers + wings + forwards) if player is not None], 
        key=lambda x: x.overall
    )

    # if there are not enough players, fill the remaining spots with the top players from all positions
    if len(players) < 10:
        all_players = Players20.objects.filter(club="Real Madrid").order_by("-overall")
        players += all_players[:10 - len(players)]

    # get all player in the best team
    best_team = [player for player in [gk] + players if player is not None]
    
    # serialize the best team
    serializer = Players20Serializer(best_team, many=True)
    return Response(serializer.data)