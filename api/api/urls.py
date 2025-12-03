from django.urls import path
from .views import send_application, send_contact, subscribe

urlpatterns = [
    path('send-application/', send_application, name='send_application'),
    path('send-contact/', send_contact, name='send-contact'),
    path('subscribe/', subscribe, name='subscribe'),
]
