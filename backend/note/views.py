# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NoteSerializer , UserSerializer
from .models import Note , User
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView

# class NoteView(viewsets.ModelViewSet):
#     serializer_class = NoteSerializer
#     queryset = Note.objects.all()

# class UserView(viewsets.ModelViewSet):
#     serializer_class = UserSerializer
#     queryset = User.objects.all()

class NoteCreateView(CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteListView(ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteDetailView(RetrieveAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    

class UserView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
