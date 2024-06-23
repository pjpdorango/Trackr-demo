from django.shortcuts import render
from django.http import HttpRequest
from django.http import HttpResponse 
from django.db.models.query import QuerySet
import json

from .models import Subject

# Create your views here.
def collection(request: HttpRequest) -> HttpResponse:
    if request.GET.__contains__('usr'):
        print("we chillin")

        allSubjects: QuerySet = Subject.objects.all()
        
        # Convert all of the subject info into a single dictionary
        return HttpResponse(json.dumps([{
            "name" : subject.name,
            "grade" : subject.grade
        } for subject in allSubjects]))

        

    context: dict = { }
    return render(request, 'collection.html', context)
