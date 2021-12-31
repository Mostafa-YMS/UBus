from rest_framework import serializers
from .models import *


class Mapser(serializers.ModelSerializer):
    class Meta:
        model = bus
        fields = '__all__'



class deiverser(serializers.ModelSerializer):
    class Meta:
        model = driver
        fields = ['first_name','last_name','username','bus_number']
