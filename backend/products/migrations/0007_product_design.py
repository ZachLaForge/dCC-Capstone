# Generated by Django 4.0.4 on 2022-05-11 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_alter_product_sales'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='design',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
