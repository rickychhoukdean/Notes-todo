from django.urls import path
from .views import (
    NoteListView,
    NoteDetailView,
    UserView,
    NoteCreateView
)

urlpatterns = [
    path('notes/create/',NoteCreateView.as_view()),
    path('notes/',NoteListView.as_view()),
    path('notes/<pk>/',NoteDetailView.as_view())
]