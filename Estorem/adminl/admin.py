from django.contrib import admin
from  .models  import Product
from  .models  import Category
from .models import Customer

from .models import SubCategory

from .models import Uom
from .models import Vendor
from .models import DelivPart
from .models import Invman
from .models import FinManager

from .models import Brand
# class AdminProduct(admin.ModelAdmin):
#     list_display = ['name', 'price', 'category']


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']


admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Customer)
admin.site.register(SubCategory)
admin.site.register(Uom)
admin.site.register(Vendor)
admin.site.register(DelivPart)
admin.site.register(Invman)

admin.site.register(FinManager)
admin.site.register(Brand)

# Register your models here.
