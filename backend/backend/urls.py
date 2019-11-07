
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
# Including another URLconf
#     1. Import the include() function: from django.conf.urls import url, include
#     2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))

from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include                
from rest_framework import routers                 
from note import views    
             

# router = routers.DefaultRouter()                   
# router.register(r'notes', views.NoteView, 'note')     


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # path('api/', include(router.urls)),
    path('api-auth/',include('rest_framework.urls')),
    # path('create/', NoteCreateView.as_view()),
    path('api/',include('note.urls'))
]

