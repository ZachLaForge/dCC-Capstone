# Generated by Django 4.0.4 on 2022-05-03 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_product_cost_alter_product_msrp_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='sales',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True),
        ),
    ]