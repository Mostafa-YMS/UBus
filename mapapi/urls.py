
from django.urls import path
from .views import *



urlpatterns = [
    path("post/",createView.as_view()),
    path("get/", drive_get),
    path("operating/<str:name>/", operating_get),
    path("delete/<str:name>/",drive_delete),
    path("update/<str:name>/", update),
    path("register/",  drive_register.as_view()),
    # path("get_driver/", driver_get),
    path("login/",LoginView.as_view()),
    path("bus/", send.as_view())

]