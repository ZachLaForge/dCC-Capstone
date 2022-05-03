from django.db import models
from authentication.models import User



class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sku = models.CharField(max_length=50)
    nlid = models.CharField(max_length=30)
    description = models.CharField(max_length=60)
    cost = models.IntegerField()
    msrp = models.IntegerField()
    weight = models.IntegerField()
    upc = models.IntegerField()
    sales = models.IntegerField()

# Create your models here.
