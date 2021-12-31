import json
import time

import jwt,datetime
from rest_framework import generics
from django.db.models import CharField

from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

from rest_framework.decorators import api_view
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from .models import driver
from .models import *
from .serializers import *
from rest_framework.response import Response

from rest_framework import generics


class createView(generics.ListCreateAPIView):
    queryset = bus.objects.all()
    serializer_class = Mapser
    # permission_classes = [IsAdminUser]

    def get_user(self):
        user = self.request.user
        return user
        

@api_view(['POST'])
def update(request, name):
    maps = bus.objects.filter(name=name)
    if not maps:
        print("fired")
        drive = driver.objects.get(username=request.data["driver"])
        bus.objects.create(name=request.data["name"], latitude=request.data["latitude"], longitude=request.data["longitude"], driver=drive, operating=True)
        return Response(200)
    maps.update(latitude=request.data["latitude"], longitude=request.data["longitude"], operating=True)
    return Response(200)


@api_view(['GET'])
def drive_get(request):
    maps = bus.objects.filter(operating=True)
    ser = Mapser(maps, many=True)
    return Response(ser.data)

# @api_view(['GET'])
# def drive_det(request,name):
#     maps = bus.objects.get(name=name)
#     ser = Mapser(maps, many=False)
#     return Response(ser.data)
@api_view(['GET'])
def operating_get(request, name):
    maps = bus.objects.get(name=name)
    ser = Mapser(maps)
    return Response(ser.data)

@api_view(['DELETE'])
def drive_delete(request,name):
    maps = bus.objects.filter(name=name)
    maps.update(operating=False)
    return Response("delete success")





class drive_register(generics.ListCreateAPIView):
    queryset = driver.objects.all()
    serializer_class = deiverser
    # permission_classes = [IsAdminUser]

    def get_user(self):
        user = self.request.user
        return user

# @api_view(['GET'])
# def driver_get(request):
#     maps = driver.objects.all()
#     ser = deiverser(maps, many=True)
#     return Response(ser.data)



class LoginView(APIView):
    def post(self, request):
        username = request.data['username']
        password = request.data['password']

        user = driver.objects.filter(username=username).first()

        if user is None:
            raise AuthenticationFailed('User not found!')
        elif(user.password==password):
            tokens = {
                'id': user.id,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
                'iat': datetime.datetime.utcnow(),
                "username": user.username,
                "last_name": user.last_name,
                "first_name": user.first_name,
                "bus_number":user.bus_number

            }

            token = jwt.encode(tokens, 'secret', algorithm='HS256')

            response = Response()

            response.set_cookie(key='jwt', value=token, httponly=True)
            response.data = {
                'jwt': token
            }
            return response









class send(APIView):
    def post(self, request):
        bus_obj=bus.objects.filter(operating=True)
        buses = serial.serialize("json", bus_obj)
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'test_consumer_group', {
                'type': 'send_bus',
                'value': json.dumps(buses)
            }
        )
        response=Response()
        response.data={
            'value':buses
        }
        time.sleep(1)




        return  response











