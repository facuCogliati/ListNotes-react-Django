from django.db import models

# Create your models here.

class Notes(models.Model):
    content     =      models.TextField(null=True, blank=True)
    update      =      models.DateTimeField(auto_now=True)
    created     =      models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content[0:50]