from django.db import models
from django.core.exceptions import ValidationError

from tireng.village.models import Village
from tireng.users.models import User


class Reservations(models.Model):
    reservator = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    village = models.ForeignKey(Village, on_delete=models.CASCADE, blank=True)
    num_stay_day = models.PositiveIntegerField(blank=True)
    num_of_guests = models.PositiveIntegerField(blank=True)


    # calculate the total price
    @property
    def total_price(self):
        return self.num_stay_day * self.village.price_per_day
    
    # check the number of guests
    def save(self, *args, **kwargs):
        if self.village.max_num != None:
            if self.num_of_guests > self.village.max_num:
                raise ValidationError("The number of guests is more capacity")
        super().save(*args, **kwargs)