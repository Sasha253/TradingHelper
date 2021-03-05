from django.db import models
from ../web_scraper/models import Stock

class StockImage(models.Model):
    stock = models.ForeignKey(Stock, on_delete = models.CASCADE)
    image = models.ImageField()
