from django.db import models

class UserAccount(models.Model):
    name = models.CharField(max_length = 20, null = False)
    surname = models.CharField(max_length = 20, null = False)
    username = models.CharField(max_length = 20, unique = True)
    email = models.TextField(unique = True)
    password = models.TextField(unique = True)
    date_of_birth = models.DateField()