# Generated by Django 4.2 on 2023-04-18 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminl', '0007_rename_name_subcategory_subcategory_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='bname',
            field=models.CharField(default='Nike', max_length=50),
        ),
    ]