from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import CreateAPIView, DestroyAPIView, UpdateAPIView, ListAPIView, RetrieveUpdateAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Village
from .serializers import VillageSerializer
from .permissions import IsAllowedToAddVillage, IsOwnerOfSpeceficVillage


class AddVillageViewset(CreateAPIView):
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [IsAuthenticated, IsAllowedToAddVillage]
    

class RemoveVillageViewset(DestroyAPIView):
    lookup_field = "id"
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [IsAuthenticated,  IsAllowedToAddVillage, IsOwnerOfSpeceficVillage]

class UpdateVillageViewset(UpdateAPIView):
    lookup_field = "id"
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [IsAuthenticated, IsAllowedToAddVillage, IsOwnerOfSpeceficVillage]
    
class ListVillageViewset(ListAPIView):
    queryset = Village.objects.all()
    serializer_class = VillageSerializer
    permission_classes = [AllowAny]
    