# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NoteSerializer , UserSerializer
from .models import Note , User

class NoteView(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()