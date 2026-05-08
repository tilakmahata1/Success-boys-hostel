from django.urls import path
from .views import contact_list_create

urlpatterns = [
    path('', contact_list_create, name='contact-list-create'),
]