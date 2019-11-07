from rest_framework import serializers
from .models import Note , User

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'title', 'body', 'date_created', 'date_editted', 'user')
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields =('name')