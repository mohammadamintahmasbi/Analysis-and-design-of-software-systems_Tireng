from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "username", "password"]

    def create(self, validate_data):
        user = User(email=validate_data["email"])
        user.set_password(validate_data["password"])
        user.username = validate_data["username"]
        user.save()
        return user