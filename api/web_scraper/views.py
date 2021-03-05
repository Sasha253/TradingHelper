from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from logic import TradingView, ShareData, ViewPoint
from serializers import StockSerializer, MarketNewsSerializer, 
                        BuySellFromSerializer, StockWatchListSerializer, 
                        StockHoldingsSerializer


class GetBuySellFormData(APIView):
    serializer_class = BuySellFromSerializer

    def get(self, request, format = None):

        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():

            is_buy = get('is_buy')
            bid_price = request.GET.get('bid_price')
            ask_price = request.GET.get('ask_price')
            price = request.GET.get('price')
            volumne = request.GET.get('volumne')
            order_type = request.GET.get('order_type')
            limit_price = request.GET.get('limit_price')
            life_time = request.GET.get('life_time')

            
                return Response(BuySellFormSerialzer(room).data, status = status.HTTP_200_OK)



class GetFundamentals(APIView):

    share_data = ShareData(stock_name)


class GetTechnicals(APIView):
    
    def __init__(self, stock_name):
        self.stock_name = stock_name


