from rest_framework.permissions import BasePermission

class IsAllowedToAddVillage(BasePermission):
    
    def has_permission(self, request, view):
        if request.user.is_owner:
            return True