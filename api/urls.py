from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', views.allNotes, name='all_notes'),
    path('<str:pk>/update', csrf_exempt(views.updateNote), name='update_note'),
    path('create', csrf_exempt(views.createNote), name='create_note'),
    path('<str:pk>/delete', csrf_exempt(views.deleteNote), name='delete_note'),


    path('<str:pk>', views.singleNote, name='single_notes'),
]
