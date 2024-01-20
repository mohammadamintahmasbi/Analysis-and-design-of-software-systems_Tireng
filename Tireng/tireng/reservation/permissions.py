from rest_framework.permissions import BasePermission
from django.utils.translation import gettext_lazy as _

class IsAllowedToReserveVillage(BasePermission):
    message = _("your entity is not guest")
    
    def has_permission(self, request, view):
        if not request.user.is_owner:
            return True