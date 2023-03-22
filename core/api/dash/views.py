from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import status

from core.models import *
from django.contrib.auth.models import User
from .serializers import *

from rest_framework import viewsets
from rest_framework.decorators import api_view

from django.shortcuts import get_object_or_404
from decimal import Decimal

class CustomPagination(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 100

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.page.paginator.count,
            'results': data
        })
# profiles, groups, banks, proofs

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    pagination_class = CustomPagination

    def list(self, request):
        queryset = Profile.objects.all()
        serializer = ProfileSerializer(queryset, many=True)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(queryset, request)
        serializer = ProfileSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
    def destroy(self, request, pk=None):
        queryset = Profile.objects.all()
        profile = get_object_or_404(queryset, pk=pk)
        profile.user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    def create(self, request):
        username = request.data['username']
        password = request.data['password']
        user = User.objects.create_user(username=username, password=password)
        user.save()
        profile = Profile.objects.create(user=user)
        profile.save()
        return Response(status=status.HTTP_201_CREATED)

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    pagination_class = CustomPagination

    def list(self, request):
        queryset = Group.objects.all()
        serializer = GroupSerializer(queryset, many=True)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(queryset, request)
        serializer = GroupSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

class BankViewSet(viewsets.ModelViewSet):
    queryset = Bank.objects.all()
    serializer_class = BankSerializer
    pagination_class = CustomPagination

    def list(self, request):
        approve = request.GET.get('approve', None)
        if approve:
            approve = Bank.objects.filter(id=approve).first()
            if approve:
                approve.status = "COMPLETED"
                approve.save()
        if request.user.profile.type == 'ADMIN':
            queryset = Bank.objects.all()
        else:
            queryset = Bank.objects.filter(worker=request.user.profile)
        serializer = BankSerializer(queryset, many=True)
        paginator = CustomPagination()
        result_page = paginator.paginate_queryset(queryset, request)
        serializer = BankSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)
    
    def destroy(self, request, pk=None):
        queryset = Bank.objects.all()
        bank = get_object_or_404(queryset, pk=pk)
        bank.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    def create(self, request):
        # asdfasdf:asdfasdf
        # asdfasdf:asdfasdf
        dataLists = request.data
        dataLists = dataLists.split('\n')
        group = Group.objects.first()
        for dataList in dataLists:
            dataList = dataList.split(':')
            bank = Bank.objects.create(account=dataList[0], routing=dataList[1], group=group)
            bank.save()
        return Response(status=status.HTTP_201_CREATED) 

class ProofViewSet(viewsets.ModelViewSet):
    queryset = Proof.objects.all()
    serializer_class = ProofSerializer
    pagination_class = CustomPagination

    def list(self, request, pk):

        queryset = Proof.objects.filter(bank__id=pk)
        serializer = ProofSerializer(queryset, many=True)
        return Response(serializer.data)
    def create(self, request):
        serializer = ProofSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def generate(request):
    user = request.user
    if request.method == 'POST':
        data = request.data
        print(data)
        bank = Bank.objects.get(id=data['account']['id'])
        bank.status = 'PENDING'
        bank.save()
        for proof in data['proofs']:
            new = Proof.objects.create(amount = Decimal(proof['amount']), bank=bank)
            new.save()
        return Response(status=status.HTTP_200_OK)
    gen = request.GET.get('generate', None)
    if gen:
        bank = Bank.objects.filter(status='LIVE').first()
        if bank:
            myBank = Bank.objects.filter(worker = user.profile, status = 'PENDING SUBMIT').first()
            if myBank:
                myBank.status = 'LIVE'
                myBank.worker = None
                myBank.save()
            bank.status = 'PENDING SUBMIT'
            bank.worker = user.profile
            bank.save()
    myBank = Bank.objects.filter(worker = user.profile, status = 'PENDING SUBMIT').first()
    print(myBank)
    if myBank:
        data = BankSerializer(myBank).data
        return Response(data)
    return Response(status=status.HTTP_204_NO_CONTENT)

    

    
    