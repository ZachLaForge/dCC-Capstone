from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import ProductSerializer
from .models import Product
from rest_framework import status

# Create your views here.
@api_view(['GET', 'POST'])

def products_list(request):
    if request.method == 'GET':
        song = Product.objects.all()
        serializer = ProductSerializer(song, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  