from django.db import models
from django.forms import DecimalField
from authentication.models import User



class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sku = models.CharField(max_length=50)
    nlid = models.CharField(max_length=30)
    description = models.CharField(max_length=60)
    cost = models.DecimalField(max_digits=5, decimal_places=2)
    msrp = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    upc = models.IntegerField(blank=True, null=True)
    sales = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

# Create your models here.
