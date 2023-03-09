from django.shortcuts import render
from .models import Notes
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import NotesSerializers
# Create your views here.

@api_view(['GET'])
def allNotes(request):
    notes = Notes.objects.all().order_by('-update')
    serializer = NotesSerializers(notes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def singleNote(request, pk):
    note = Notes.objects.get(id = pk)
    serializer = NotesSerializers(note, many=False)

    return Response(serializer.data)


@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = Notes.objects.get(id = pk)
    
    serializer = NotesSerializers(instance=note, data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Notes.objects.get(id = pk)
    note.delete()
    return Response('Se ha eliminado con exito')

@api_view(['POST'])
def createNote(request):
    data = request.data
    note = Notes.objects.create(
        content = data['content']
    )
    serializer = NotesSerializers(note, many=False)
    return Response(serializer.data)