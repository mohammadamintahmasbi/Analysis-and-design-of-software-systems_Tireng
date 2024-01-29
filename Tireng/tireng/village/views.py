from rest_framework.generics import CreateAPIView, DestroyAPIView, UpdateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import Village
from .serializers import VillageSerializer
from .permissions import IsAllowedToAddVillage, IsOwnerOfSpeceficVillage


class AddVillageViewset(CreateAPIView):
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [IsAuthenticated, IsAllowedToAddVillage]
    

class RemoveVillageViewset(DestroyAPIView):
    lookup_field = "slug"
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [IsAuthenticated,  IsAllowedToAddVillage, IsOwnerOfSpeceficVillage]

class UpdateVillageViewset(UpdateAPIView):
    lookup_field = "slug"
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [IsAuthenticated, IsAllowedToAddVillage, IsOwnerOfSpeceficVillage]
    
class ListVillageViewset(ListAPIView):
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [AllowAny]
    
class GetVillageViews(RetrieveAPIView):
    lookup_field = "slug"
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [AllowAny]