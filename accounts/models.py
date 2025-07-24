from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Qo'shimcha maydonlar qo‘shish mumkin
    phone = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.username
