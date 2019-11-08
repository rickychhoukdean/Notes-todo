from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include                
from rest_framework import routers                 
from note import views    
             
router = routers.DefaultRouter()                   
router.register(r'notes', views.NoteView, 'note')     
router.register(r'users', views.UserView, 'user')     


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

