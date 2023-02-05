from django.contrib.auth.models import User

from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

import time


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.username
        return token


@api_view(['GET', 'POST'])
def session(request):
    print('sission',request.data, request.headers, request.user)
    userdata = {}
    if request.user.is_authenticated:
        userdata = {
            'id': request.user.id,
            'username': request.user.username,
            'email': request.user.email,
            'name': request.user.first_name,
            'image': None,
        }
    return Response(userdata)

@api_view(['GET'])
def providers(request):
    print('providers',request.data, request.headers, request.user)
    return Response({
        'credentials': {
            'id': 'credentials',
            'name': 'Credentials',
            'type': 'credentials',
            'signinUrl': 'http://localhost:3000/signin',
            'callbackUrl': 'http://localhost:8000/api/auth/callback/credentials',
        },
    })

@api_view(['GET'])
def csrf(request):
    print('csrf',request.data, request.headers, request.user)
    data = {
        "csrfToken": "25676e66af8ac91d92af221a6886e59526b92b3e7ec71ededbb78db3404624d8"
    }
    return Response(data)

@api_view(['GET','POST', 'OPTIONS'])
def loginUser(request):
    user = request.user
    data = None
    if request.method == 'POST':
        username = request.data.get('identity')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
    if user is not None:
        data = {
            'user': {
                'id': user.id,
                'name': user.first_name,
                'email': user.email,
                'image': None,
            },
        }
        data['jwt'] = str( MyTokenObtainPairSerializer.get_token(user).access_token )
    return Response(data)
        