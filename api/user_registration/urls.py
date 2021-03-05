from django.urls import path
from .views import UserAccountView, SignUpView, LoginView

urlpatterns = [
    path('useraccount' UserAccountView.as_view())
    path('signup' SignUpView.as_view())
    path('login' LoginView.as_view())
]