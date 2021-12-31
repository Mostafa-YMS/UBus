import json
from django.core import serializers as serial
from django.core.validators import RegexValidator
from django.db import models

from django.db.models import CharField

from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from django.core import serializers as serial


class driver(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)

    phone_validation = RegexValidator(regex=r'^01[5|1|2|0][0-9]{8}$',
                                      message=" Please ,, Entered the Phone number in the format: '010|212|134|156'.")
    mobile_phone = models.CharField(max_length=11, null=True, blank=True, verbose_name=("Phone"))
    username = models.CharField(max_length=100)
    password: CharField = models.CharField(max_length=100)
    bus_number=models.IntegerField(null=True)
    def __str__(self):
        return str(self.username)

    # def save(self, *args, **kwars):
    #     channel_layer = get_channel_layer()
    #     bus_obj = driver.objects.all()
    #     drivers = serial.serialize("json", bus_obj)
    #     # data={'count':buses,'current_bus':self.name,'latitude':self.latitude,'longitude':self.longitude}
    #     async_to_sync(channel_layer.group_send)(
    #         'test_consumer_group', {
    #             'type': 'send_drivers',
    #             'value': drivers
    #         }
    #
    #     )
    #     super(driver, self).save(*args, **kwars)
    #



class bus(models.Model):
    # driver_id=models.IntegerField()
    name = models.CharField(max_length=300, unique=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    driver = models.ForeignKey(driver, on_delete=models.CASCADE)
    operating = models.BooleanField(default=False)


    def save(self,*args,**kwars):
        channel_layer=get_channel_layer()
        bus_obj=bus.objects.filter(operating=True)
        buses = serial.serialize("json", bus_obj)
        # data={'count':buses,'current_bus':self.name,'latitude':self.latitude,'longitude':self.longitude}
        async_to_sync(channel_layer.group_send)(
            'test_consumer_group',{
                'type':'send_bus',
                'value':buses
            }

        )
        super(bus, self).save(*args,**kwars)





