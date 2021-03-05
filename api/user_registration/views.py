from django.shortcuts import render
from rest_framework import generics, status
from .serializers import UserAccountSerializer, SignUpSerializer, LoginSerializer
from .models import UserAccount
from rest_framework.views import APIView
from rest_framework.response import Response


class UserAccountView(generics.ListAPIView):
    queryset = UserAccount.objects.all()
    serialzer_class = UserAccountSerializer


class SignUpView(APIView):
    serializer_class = UserAccountSerializer

    def post(self, request, format = None):

        serializer = self.serialzer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            password1 = serializer.data.get('password1')
            password2 = serializer.data.get('password2')
            email = serializer.data.get('email')
            date_of_birth = serializer.data.get('date_of_birth')


class LoginView(APIView):
    serialzer_class = LoginSerializer

    def post(self, request, format = None):

        serializer = self.serialzer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            