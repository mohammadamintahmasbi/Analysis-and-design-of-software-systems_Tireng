from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Reservations
from .serializers import ReservationSerializer
from .permissions import IsAllowedToReserveVillage

class CreateReservationView(CreateAPIView):
    queryset = Reservations.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticated, IsAllowedToReserveVillage]
    
class ListOfReservationsView(ListAPIView):
    queryset = Reservations.objects.all()
    serializer_class = ReservationSerializer
    # permission_classes = [IsAdminUser]