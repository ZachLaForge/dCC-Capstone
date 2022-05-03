from django.urls import path, include
from products import views


urlpatterns = [
    path('', views.products_list),
    # path('all/', views.get_all_products),
]
