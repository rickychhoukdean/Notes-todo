# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Notes(models.Model):
    title = models.CharField(max_length=20)
    body = models.TextField()
    date_created = models.DateTimeField()
    date_editted = models.DateTimeField()

    def _str_(self):
        return self.title
    
