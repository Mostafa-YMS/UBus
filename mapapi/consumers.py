import json

from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync



class TestConsumer (WebsocketConsumer):

    def connect(self):


        self.room_name="test_consumer"
        self.room_group_name="test_consumer_group"

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()
        self.send(text_data=json.dumps({'status':'connected from django channel'}))


        print("not send bus")

    def receive(self,text_data):
        # print("start")
        # text_data_json=json.loads(text_data)
        # message=text_data_json['value']
        # event={
        #     'type':'send_message',
        #     'message':message
        #
        # }
        # self.channel_layer.group_send(self.room_group_name,event)
        

        print(text_data)
        self.send(text_data=json.dumps({'status':'we got you'}))




    def disconnect(self,*args,**kwargs):
        print("disconnected")


    def send_bus(self,event):
        print("send bus")
        data=json.loads(event.get('value'))
        self.send(text_data=(json.dumps({'paylod':data})))

        print("not send bus")


    #
    # def send_drivers(self,event):
    #     print("send bus")
    #     data=json.loads(event.get('value'))
    #     self.send(text_data=(json.dumps({'paylod':data})))
    #
    #     print("not send bus")