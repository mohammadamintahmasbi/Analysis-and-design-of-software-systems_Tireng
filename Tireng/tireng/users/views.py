from rest_framework.response import Response
from rest_framework.views import APIView
from.serializers import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework import status

class UserView(APIView):

    permission_classes = [AllowAny]

    def create(self, request):
        serializer = UserSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response("Your account created !", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        


