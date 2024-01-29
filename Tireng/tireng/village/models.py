from django.db import models
from django.utils.text import slugify

from tireng.users.models import User

class Village(models.Model):
    name = models.CharField(max_length=64, null=False, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="tireng/media/village_img")
    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    address = models.CharField(max_length=200)
    num_of_rooms = models.PositiveIntegerField(null=True, blank=True)
    meterage = models.PositiveIntegerField(null=True, blank=True)
    price_per_day = models.PositiveIntegerField(blank=True)
    description = models.TextField(blank=True)
    max_num = models.PositiveIntegerField(blank=True, null=True)
    slug = models.SlugField(unique=True, default=" ")
    
    # make slug with the name field
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)