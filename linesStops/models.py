from django.db import models
from django.db import models


class Lines (models.Model) : 
    line = models.CharField(max_length=50)
    
class Stations (models.Model) : 
    st_latitude=models.FloatField()
    st_longitude=models.FloatField ()
    station = models.CharField(max_length=50)
    line =  models.ForeignKey(Lines, on_delete=models.CASCADE)


class Line_cord (models.Model) : 
    line =  models.ForeignKey(Lines, on_delete=models.CASCADE)
    LineCords=models.TextField()
    Color= models.CharField(max_length=50 , default="red")
    