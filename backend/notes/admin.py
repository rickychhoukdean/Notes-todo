# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Notes # add this

class NotesAdmin(admin.ModelAdmin):  
  list_display = ('title', 'body', 'date_created', 'date_editted') # add this


# Register your models here.
admin.site.register(Notes, NotesAdmin)

#username = user
#email = chhoukdean184@msn.com
#password = user1234