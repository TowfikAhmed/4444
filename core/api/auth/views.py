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
        