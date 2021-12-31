
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('users.urls')),
    path('mapapi/', include('mapapi.urls')),
    path('linesstops/', include('linesStops.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('<path>', TemplateView.as_view(template_name='index.html')),
    # path('<path:route>', TemplateView.as_view(template_name='index.html')),
    # re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name="index.html")),
]
urlpatterns += [
    # re_path(r'^.*', TemplateView.as_view(template_name="index.html")),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
