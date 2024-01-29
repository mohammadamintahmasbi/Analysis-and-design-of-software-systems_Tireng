from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView, UpdateAPIView, ListAPIView, DestroyAPIView
from rest_framework.permissions import IsAdminUser

from tireng.users.models import User
from.serializers import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework import status

class CreateUserView(APIView):

    serializer_class = UserSerializer
    query_set = User.objects.all()
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response("Your account created !", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        

class ListUserView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

class UpdateUserView(UpdateAPIView):
    lookup_field = "id"
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    # Only the owner of user account can edit it
    def get_object(self):
        return self.request.user

class GetUserView(RetrieveAPIView):
    lookup_field = "id"
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    # Only the owner of user account can edit it
    def get_object(self):
        return self.request.user

class DeleteUserView(DestroyAPIView):
    lookup_field = "id"
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    # Only the owner of user account can edit it
    def get_object(self):
        return self.request.user
