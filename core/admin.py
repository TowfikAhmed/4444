from django.contrib import admin
from .models import Profile, Group, Bank, Proof, Message
# Register your models here.

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'type',)
    list_filter = ('type',)
    # search_fields = ('user',)
    ordering = ('user',)
    filter_horizontal = ()

class GroupAdmin(admin.ModelAdmin):
    list_display = ('name',)
    list_filter = ()
    search_fields = ('name',)
    ordering = ('name',)
    filter_horizontal = ()

class BankAdmin(admin.ModelAdmin):
    list_display = ('account', 'group', 'routing', 'worker', 'status',)
    list_filter = ('group', 'status',)
    search_fields = ('account', 'routing')
    ordering = ('account',)
    filter_horizontal = ()

class ProofAdmin(admin.ModelAdmin):
    list_display = ('bank', 'amount', 'date', 'status',)
    list_filter = ('bank', 'status',)
    search_fields = ('bank',)
    ordering = ('bank',)
    filter_horizontal = ()

class MessageAdmin(admin.ModelAdmin):
    list_display = ('author', 'title', 'date',)
    list_filter = ('author',)
    search_fields = ('author',)
    ordering = ('author',)
    filter_horizontal = ()

admin.site.register(Profile, ProfileAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(Bank, BankAdmin)
admin.site.register(Proof, ProofAdmin)
admin.site.register(Message, MessageAdmin)
