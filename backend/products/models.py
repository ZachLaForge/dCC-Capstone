from django.db import models
from django.forms import DecimalField
from authentication.models import User



class Product(models.Model):
    sku = models.CharField(max_length=50)
    nlid = models.CharField(max_length=30)
    description = models.CharField(max_length=60)
    cost = models.DecimalField(max_digits=5, decimal_places=2)
    msrp = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    sales = models.IntegerField(blank=True, default=0)
    modify = models.BooleanField(default=False)

# Create your models here.
# Potentially need to create another model for pending changes for the front end functionality

