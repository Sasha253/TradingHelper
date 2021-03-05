from rest_framework import serializers
from models import Stock, MarketNews, BuySellForm, 
                    StockWatchList, StockHolding


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ('sock_name', 'user', 'is_checked', 'is_buy', 'eps', 'price_earnings', 'one_day_speedometer_signal', 
                    'one_week_speedometer_signal', 'one_month_speedometer_signal', 
                    'upcoming_events', 'get_latest_sens', 'get_latest_stock_results', 'bid_price', 'ask_price', 
                    'get_latest_sens', 'get_latest_stock_results', 'bid_price', 'ask_price', 'price', 
                    'volumne', 'order_type', 'limit_price', 'life_time')


class MarketNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketNews
        fields = ('market_news')


class BuySellFromSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuySellForm
        fields = ('bid_price', 'ask_price', 'price', 'volumne', 
                    'order_type', 'limit_price', 'life_time')
    

class StockWatchListSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockWatchListSerializer
        fields = ('user', 'stock_name')


class StockHoldingSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockHoldingSerializer
        fields = ('stock_name')