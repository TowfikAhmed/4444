from django.shortcuts import render

# Create your views here.

def index(request, **args):
    return render(request, 'index.html')