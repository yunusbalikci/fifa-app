from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def login(request):
    return HttpResponse("Hello, world. You're at the polls index.")