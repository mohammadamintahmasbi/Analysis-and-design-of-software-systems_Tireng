from django.db import models
from tireng.users.models import User

class Village(models.Model):
    name = models.CharField(max_length=64)
    image = models.ImageField(null=True, blank=True, upload_to="tireng/media/village_img")
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=200)
    num_of_rooms = models.PositiveIntegerField(null=True, blank=True)
    meterage = models.PositiveIntegerField(null=True, blank=True)
    price_per_day = models.PositiveIntegerField()
    description = models.TextField()

    
