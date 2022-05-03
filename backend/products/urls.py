from django.urls import path, include
from products import views


urlpatterns = [
    path('', views.products_list),
    path('<int:pk>/', views.product_detail),
]
