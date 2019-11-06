# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Note(models.Model):
    title = models.CharField(max_length=20)
    body = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_editted = models.DateTimeField(auto_now=True)


    def _str_(self):
        return self.title