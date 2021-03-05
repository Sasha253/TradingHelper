from models import ViewPoint, ShareData, TradingView

def main():
    take_screenshot = True

    viewpoint = ViewPoint()

    viewpoint.login()
    viewpoint.navigate_to_stock(take_screenshot)
    bid_price, ask_price = bid_ask_spread()

    #if (ai_module/views/Objectdetection)
       