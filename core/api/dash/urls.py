from django.urls import path
from .views import *
urlpatterns = [
    # path('profiles', profiles),
    # path('groups', groups),
    # path('banks', banks),
    # path('proofs', proofs),
    path('profiles', ProfileViewSet.as_view({'get': 'list'})),
    path('profiles/<int:pk>', ProfileViewSet.as_view({'get': 'retrieve'})),
    path('profiles/<int:pk>/delete', ProfileViewSet.as_view({'delete': 'destroy'})),
    path('profiles/create', ProfileViewSet.as_view({'post': 'create'})),
    path('groups', GroupViewSet.as_view({'get': 'list'})),
    path('groups/<int:pk>', GroupViewSet.as_view({'get': 'retrieve'})),
    path('banks', BankViewSet.as_view({'get': 'list'})),
    path('banks/<int:pk>', BankViewSet.as_view({'get': 'retrieve'})),
    path('banks/<int:pk>/delete', BankViewSet.as_view({'delete': 'destroy'})),
    path('banks/create', BankViewSet.as_view({'post': 'create'})),
    path('proofs/<int:pk>', ProofViewSet.as_view({'get': 'list'})),
    path('proofs/<int:pk>', ProofViewSet.as_view({'get': 'retrieve'})),
    path('proofs/<int:pk>/delete', ProofViewSet.as_view({'delete': 'destroy'})),
    path('proofs/create', ProofViewSet.as_view({'post': 'create'})),
    path('generate', generate)
]