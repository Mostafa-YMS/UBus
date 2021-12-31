"""
ASGI config for core project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import re_path


from mapapi.consumers import TestConsumer

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_asgi_application()

# ws_patterns=[
#     re_path('ws/test/',TestConsumer.as_asgi())
# ]
#
# application=ProtocolTypeRouter({
#     'http':get_asgi_application(),
#     'websocket':URLRouter(ws_patterns)
# })
