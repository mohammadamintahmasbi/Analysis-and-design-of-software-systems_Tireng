from rest_framework.permissions import BasePermission, SAFE_METHODS
from django.utils.translation import gettext_lazy as _

class IsAllowedToAddVillage(BasePermission):
    message = _("You are not owner. you can not create Village")
    
    def has_permission(self, request, view):
        if request.user.is_owner:
            return True
        
class IsOwnerOfSpeceficVillage(BasePermission):
    message = _("You are not the owner of this village")
    
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.owner == request.user