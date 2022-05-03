from rest_framework import serializers
from .models import Product

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'sku', 'nlid', 'description', 'cost', 'msrp', 'weight', 'upc', 'sales']
        depth = 1
