from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=50, default="Anonymous")
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=100)
    username = None
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []