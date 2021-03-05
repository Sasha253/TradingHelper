from rest_framework import serializers
from .models import UserAccount

class UserAccountSerializer(serializers.ModelSerialzer):
    class Meta:
        model = UserAccount
        fields = ('id', 'name', 'surname', 'username',
                    'email', 'password', 'date_of_birth')


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount 
        fields = ('username', 'password')