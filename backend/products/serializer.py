from rest_framework import serializers
from .models import Product



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'sku', 'nlid', 'description', 'cost', 'msrp', 'weight', 'upc', 'sales']
        depth = 1

    # user_id = serializers.IntegerField(write_only=True)