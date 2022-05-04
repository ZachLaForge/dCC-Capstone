from django.urls import path, include
from products import views


urlpatterns = [
    path('', views.products_list),
    path('create/', views.post_products),
    path('edit/<int:pk>/', views.edit_products),
    path('<int:pk>/', views.product_detail),
]
