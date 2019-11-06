# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Note , User

class NoteAdmin(admin.ModelAdmin): 
    list_display = ('title', 'body', 'date_created', 'date_editted') 

    # Register your models here.
admin.site.register(Note, NoteAdmin) 

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
admin.site.register(User,UserAdmin)