from rest_framework.permissions import BasePermission, SAFE_METHODS
from django.utils.translation import gettext_lazy as _

class IsAllowedToReserveVillage(BasePermission):
    message = _("your entity is not guest")
    
    def has_permission(self, request, view):
        if not request.user.is_owner:
            return True
        
class IsReservatorVillage(BasePermission):
    message = _("this reservation is not yours")
    
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.reservator == request.user