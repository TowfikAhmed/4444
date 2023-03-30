from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, null=False, blank=False, on_delete=models.CASCADE)
    TYPE_CHOICE = (
        ('ADMIN', 'ADMIN'),
        ('WORKER', 'WORKER'),
    )
    pending = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    earning = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    type = models.CharField(max_length=10, choices=TYPE_CHOICE, default='WORKER')
    def __str__(self):
        return self.user.username

class Group(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Bank(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE) 
    name = models.CharField(max_length=50, null=True, blank=True)
    account = models.CharField(max_length=200)
    routing = models.CharField(max_length=200)
    worker = models.ForeignKey(Profile, null=True, blank=True, on_delete=models.SET_NULL, related_name='worker')
    history = models.ManyToManyField(Profile, blank=True)
    STATUS_CHOICES = (
        ('LIVE', 'LIVE'),
        ('COMPLETED', 'COMPLETED'),
        ('PENDING', 'PENDING'),
        ('PENDING SUBMIT', 'PENDING SUBMIT'),
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='LIVE')
    def __str__(self):
        return self.account
    
class Proof(models.Model):
    bank = models.ForeignKey(Bank, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    date = models.DateTimeField(auto_now_add=True)
    STATUS_CHOICES = (
        ('APPROVE', 'APPROVE'),
        ('FAILED', 'FAILED'),
        ('PENDING', 'PENDING'),
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    sc = models.ImageField(upload_to='sc/', null=True, blank=True)
    def __str__(self):
        return self.bank.account


class Message(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author_messages')
    participants = models.ManyToManyField(User, related_name='user_messages', blank=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.author.username


