from rest_framework import serializers
from core.models import *

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        depth = 1
    
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

class ProofSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proof
        fields = '__all__'
class BankSerializer(serializers.ModelSerializer):
    proof_set = ProofSerializer(many=True, read_only=True)
    class Meta:
        model = Bank
        fields = '__all__'
        depth = 1