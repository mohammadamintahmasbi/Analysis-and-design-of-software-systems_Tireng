from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.urls import reverse


class User(AbstractUser):
    email = models.EmailField(unique=True, blank=False)
    username = models.CharField(
        _("username"),
        unique=False,
        max_length=128,
        help_text="Required, 128 characters or fewer. Letters, digits and @/./+/-/_ only."
    )
    image = models.ImageField(null=True, blank=True, upload_to="Tireng/media/user_img")
    is_owner = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]


    def get_absolute_url(self):
        """Get url for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})
