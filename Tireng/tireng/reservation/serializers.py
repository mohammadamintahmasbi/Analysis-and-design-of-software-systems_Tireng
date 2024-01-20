from rest_framework import serializers
from .models import Reservations

class ReservationSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField()
    class Meta:
        model = Reservations
        fields = "__all__"
        
    def get_total_price(self, obj) -> int:
        return int(obj.total_price)
    