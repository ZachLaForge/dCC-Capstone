from rest_framework import serializers
from .models import Product



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','design','sku', 'nlid', 'description', 'cost', 'msrp', 'weight', 'sales', 'modify']
        depth = 1

    # user_id = serializers.IntegerField(write_only=True)