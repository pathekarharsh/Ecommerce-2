
from django.db import models
from django.db.models import Model


class Category(models.Model):

    allowed= models.BooleanField(default=False)
    category= models.CharField(max_length=50, default="fruits")
    color= models.CharField(max_length=10, default='', blank=True, null= True)


    @staticmethod
    def get_all_categories():
        return Category.objects.all()
    
    def __str__(self):
        return self.name
    

class SubCategory(models.Model):
    subcategory= models.CharField(max_length=50)
    category= models.ForeignKey(Category,on_delete=models.CASCADE,default=1 )

    allowed= models.BooleanField(default=False)
    color= models.CharField(max_length=10, default='', blank=True, null= True)
    
    @staticmethod
    def get_all_subcategories():
        return Category.objects.all()
    
    def __str__(self):
        return self.name
    
class Customer(models.Model):
    firstname = models.CharField(max_length=50,default='Kartik')
    lastname = models.CharField (max_length=50,default='Singhania')
    contact = models.CharField(max_length=10)
    #agentimage= models.ImageField(upload_to='uploads/customers/',null=True)
    email=models.EmailField(max_length=50,default='karsingh@gmail.com')
    city = models.CharField(max_length=50,default='Koregaon')
    address= models.CharField(max_length=250, default='', blank=True, null= True)
    pin = models.CharField(max_length=10,default='000000')
    #agentimage= models.ImageField(upload_to='uploads/customers/',null=True)

    #to save the data
    def register(self):
        self.save()

class Uom(models.Model):
    name= models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Vendor(models.Model):
 
    firstname = models.CharField(max_length=50,default='Kartik')
    lastname = models.CharField (max_length=50,default='Singhania')
    contact = models.CharField(max_length=10)
    #agentimage= models.ImageField(upload_to='uploads/customers/',null=True)
    email=models.EmailField(max_length=50,default='karsingh@gmail.com')
    city = models.CharField(max_length=50,default='Koregaon')
    state = models.CharField(max_length=50, default='', blank=True, null= True)
    address= models.CharField(max_length=250, default='', blank=True, null= True)
    #image= models.ImageField(upload_to='uploads/vendors/')


    #to save the data
    def register(self):
        self.save()

class DelivPart(models.Model):
 
    firstname = models.CharField(max_length=50,default='Kartik')
    lastname = models.CharField (max_length=50,default='Singhania')
    contact = models.CharField(max_length=10)
    #agentimage= models.ImageField(upload_to='uploads/customers/',null=True)
    email=models.EmailField(max_length=50,default='karsingh@gmail.com')
    city = models.CharField(max_length=50,default='Koregaon')
    state = models.CharField(max_length=50, default='', blank=True, null= True)
    address= models.CharField(max_length=250, default='', blank=True, null= True)
    #image= models.ImageField(upload_to='uploads/vendors/')


    #to save the data
    def register(self):
        self.save()

class FinManager(models.Model):
 
    firstname = models.CharField(max_length=50,default='Kartik')
    lastname = models.CharField (max_length=50,default='Singhania')
    contact = models.CharField(max_length=10)
    #agentimage= models.ImageField(upload_to='uploads/customers/',null=True)
    email=models.EmailField(max_length=50,default='karsingh@gmail.com')
    city = models.CharField(max_length=50,default='Koregaon')
    state = models.CharField(max_length=50, default='', blank=True, null= True)
    address= models.CharField(max_length=250, default='', blank=True, null= True)
    #image= models.ImageField(upload_to='uploads/vendors/')


    #to save the data
    def register(self):
        self.save()

class Invman(models.Model):
 
    firstname = models.CharField(max_length=50,default='Kartik')
    lastname = models.CharField (max_length=50,default='Singhania')
    contact = models.CharField(max_length=10)
    #agentimage= models.ImageField(upload_to='uploads/customers/',null=True)
    email=models.EmailField(max_length=50,default='karsingh@gmail.com')
    city = models.CharField(max_length=50,default='Koregaon')
    state = models.CharField(max_length=50, default='', blank=True, null= True)
    address= models.CharField(max_length=250, default='', blank=True, null= True)
    #image= models.ImageField(upload_to='uploads/vendors/')


    #to save the data
    def register(self):
        self.save()

    
class Brand(models.Model):
    bname=models.CharField(max_length=50, default="Nike")
    #vendors= models.ForeignKey(Vendor,on_delete=models.CASCADE,default=1 )

class Product(models.Model):
    name = models.CharField(max_length=60)
    price= models.IntegerField(default=0)
    category= models.ForeignKey(Category,on_delete=models.CASCADE,default=1 )
    description= models.CharField(max_length=250, default='', blank=True, null= True)
    image= models.ImageField(upload_to='uploads/products/')

    @staticmethod
    def get_products_by_id(ids):
        return Product.objects.filter (id__in=ids)
    @staticmethod
    def get_all_products():
        return Product.objects.all()

    @staticmethod
    def get_all_products_by_categoryid(category_id):
        if category_id:
            return Product.objects.filter (category=category_id)
        else:
            return Product.get_all_products()

# # Create your models here.
