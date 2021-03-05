from django.db import models
from ../user_registration/models import UserAccount

class Stock(models.Model):
    stock_name = models.CharField(max_length = 6, primary_key = True) 
    user = models.ManyToManyField(UserAccount, on_delete = models.CASCADE
        related_name= "stock")

    is_checked = models.BooleanField(null = True)
    is_buy = models.BooleanField(null = True)

    eps = models.CharField(null = True)
    price_earnings = models.CharField(null = True)
    one_day_speedometer_signal = models.CharField(null = True)
    one_week_speedometer_signal = models.CharField(null = True)
    one_month_speedometer_signal = models.CharField(null = True)

    upcoming_events = models.TextField(null = True)
    get_latest_sens = models.TextField(null = True)
    get_latest_stock_results = models.TextField(null = True)

    bid_price = models.IntegerField(null = True)
    ask_price = models.IntegerField(null = True)

    price = models.IntegerField(null = True)
    volumne = models.IntegerField(null = True)
    order_type = models.Choices(null = True)
    limit_price = models.IntegerField(null = True)
    life_time = models.Choices(null = True)


class MarketNews(models.Model):
    market_news = models.TextField()
    found = models.BooleanField()
    date = models.DateField()
    count = models.IntegerField()


class StockWatchList(models.Model):
    
    stock_name = models.ForeignKey(Stock, on_delete = models.CASCADE
        related_name= "stockwatclist")
    user = models.ForeignKey(User, on_delete = models.DO_NOTHING, 
        related_name = "stockholding")
        

class StockHolding(models.Model):

    stock_name = models.ForeignKey(Stock, on_delete = models.CASCADE
        related_name= "stockholding")
    user = models.ForeignKey(User, on_delete = models.DO_NOTHING, 
        related_name = "stockholding")
