from rest_framework.serializers import ModelSerializer
from .models import Players20, TeamsAndLeagues


class Players20Serializer(ModelSerializer):
    class Meta:
        model = Players20
        fields = "__all__"


class TeamsAndLeaguesSerializer(ModelSerializer):
    class Meta:
        model = TeamsAndLeagues
        fields = "__all__"
