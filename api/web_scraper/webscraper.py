import selenium
import selenium.common
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

PATH = r"C:\Users\User\Documents\PycharmProjects\web_scraper_app\chromedriver.exe"

# options = webdriver.ChromeOptions()
# options.add_argument('headless')
driver = webdriver.Chrome(PATH)

actions = ActionChains(driver)


class ViewPoint:

    def __init__(self, stock_id):
        self.stock_id = stock_id

    def view_unhidden_browser():
        driver_unhidden = webdriver.Chrome(PATH)
        login(driver_unhidden)
        navigate_to_stock()

    def login():

        driver.get("https://securities.standardbank.co.za/ost/")

        search_username = driver.find_element_by_id("normalUsername")
        search_username.clear()
        search_username.send_keys("sashmul055462")
        search_password = driver.find_element_by_id("j_password")
        search_password.clear()
        search_password.send_keys("Sasha@23")

        login_element = driver.find_element_by_id("submitButton")
        login_element.click()

        driver.implicitly_wait(5)

        driver.get("https://viewpoint.iress.co.za/st/")  # TODO might have to do a element load first

        driver.implicitly_wait(35)

    def navigate_to_stock(take_screenshot = False):  
        
        count = 1
        stock_id = 0

        chart_element = driver.find_element_by_xpath(
            "//div[contains(concat(' ', normalize-space(@class), ' '),  'tab chromeTabs-tab ui-draggable "
            "ui-draggable-handle active') and text() = 'Chart']")
        chart_element.click()

        driver.implicitly_wait(4)

        while True:
            try:
                stock_button = driver.find_element_by_xpath("//div[@data-row-index = 'str(stock_id)' \
                                        and @class = 'trans-security-code inter-transport slick-transport sc-fjdhpX eCKzfe']")
                # EC.presence_of_all_elements_located((By.CSS_SELECTOR, ".trans-security-code inter-transport \
                # slick-transport sc-fjdhpX eCKzfe[data-row-index = str(count)]"))

                stock_id += 1
                stock_chart = driver.find_element_by_class_name("chart-container")

                actions.drag_and_drop(stock_button, stock_chart)
                actions.perform()

                # TODO enlarge screen
                
                if (take_screenshot):
                    driver.save_screenshot("./stock_chart_pictures/picture" + count + ".png")
                    count += 1

            except selenium.common.exceptions.InvalidElementStateException:
                print("task complete")
                break

    def bid_ask_spread():
        bid_price = driver.find_element_by_class_name("container-hor group-box bid-box").text
        ask_price = driver.find_element_by_class_name("container-hor group-box ask-box").text

        return bid_price, ask_price

    def buy_sell_stock(is_buy, volume, order_type, limit_price, life_time):

        navigate_to_stock()

        driver.implicitly_wait(2)

        if is_buy:
            buy_button = driver.find_element_by_class_name("apply-common-tooltip customButton--jqJTfH5- custom-buy-button")
            buy_button.click()

        else:
            sell_button = driver.find_element_by_class_name("apply-common-tooltip customButton--jqJTfH5- custom-sell-button")
            sell_button.click()

        driver.implicitly_wait(6)

        volume_element = driver.find_element_by_css_selector(".container-ver ot-section-box main_volume input[type = text] ")
        volume_element.clear()
        volume_element.send_keys(volume)

        order_element = Select(driver.find_element_by_css_selector(".container-ver ot-section-box main_ordertype " 
                                                            ".ot-section-value .selected-selectbox"))

        if order_type == "Limit":
            order_element.select_by_visible_text("Limit")

        else:
            order_element.select_by_visible_text("Market")

        limit_price_element = driver.find_element_by_css_selector(".container-ver ot-section-box main_limitprice "
                                                                    "input[type = text]")
        limit_price_element.send_keys(limit_price)

        life_time_element = Select(driver.find_element_by_css_selector(".container-ver ot-section-box main_lifetime " 
                                                            ".ot-section-value .selected-selectbox"))
        if life_time == "End of Day":
            life_time_element.select_by_visible_text("End of Day")
        elif life_time == "Fill or Kill":
            life_time_element.select_by_visible_text("Fill or Kill")
        elif life_time == "Good till Cancelled":
            life_time_element.select_by_visible_text("Good till Cancelled")
        elif life_time == "Good till Date":
            life_time_element.select_by_visible_text("Good till Date")
        else:
            life_time_element.select_by_visible_text("Immediate or Cancel")

        submit_button = driver.find_element_by_class_name("class = btn btn-default ot-button submit-button")
        submit_button.click()

        confirmation_button = driver.find_element_by_css_selector("#modal .btn btn-primary")
        confirmation_button.click()

    def view_data():

        vp_account_element = driver.find_element_by_xpath(
            "//div[contains(concat(' ', normalize-space(@class), ' '),  'tab chromeTabs-tab ui-draggable "
            "ui-draggable-handle active') and text() = 'VP Account']")
        vp_account_element.click()

        driver.implicitly_wait(2)

        available_balance = driver.find_element_by_class_name(".value available-value .price-up").text


class ShareData:
    def __init__(self, stock_name):
        self.stock_id = stock_name

    def navigate_to_stock():
        driver.get('https://www.sharedata.co.za/')
        driver.implicitly_wait(3)

        search = driver.find_element_by_id("JumpTo")
        search.send_keys(stock_name)
        search.send_keys(Keys.RETURN)


    def get_latest_sens():
        table = driver.find_element_by_css_selector("#LatestSENS_LblTable .TableData")
        cell = table.find_element_by_class_name("fakeheaderlink bold")

        for tr_name in table.find_element_by_xpath(".//tr[text() = 'stock_name']"):
            if tr_name:
                cell.click()
                driver.implicitly_wait(2)
                stock_text = driver.find_element_by_id("NoteText").text
                close_button = driver.find_element_by_class_name("ui-button-text")
                close_button.click()

                return stock_text

    def get_latest_stock_results():
        table = driver.find_element_by_id("LatestResults_LblLatestResults")

        for column in table.find_element_by_css_selector("td[colspan = '2']"):
            if column.find_element_by_xpath(".//b[text() = 'stock_name']"):
                cell = column.find_element_by_class_name("fakeheaderlink")
                cell.click()
                stock_text = driver.find_element_by_css_selector("#NoteText .news").text
                close_button = driver.find_element_by_class_name("ui-button-text")
                close_button.click()

                return stock_text

    def get_market_news():
        table = driver.find_element_by_id("MoneyWebNewsDiv")
        for column in table.find_element_by_xpath(".//tr"):
            market_news = [column.find_element_by_xpath(".//td")]

            return market_news


class TradingView:
    def __init__(self, stock_name):
        self.stock_name = stock_name

    def navigate_to_stock():

        driver.get("https://www.tradingview.com/")
        driver.implicitly_wait(3)

        search = driver.find_element_by_class_name("tv-header-search__input js-header-search__input")
        search.send_keys("JSE:" + stock_name)
        search.send_keys(Keys.RETURN)
        driver.implicitly_wait(3)

        technicals_button = driver.find_element_by_xpath('//a[contains(@href,"/symbols/JSE/technicals/") '
                                                            'and class = "tv-tabs_tab"]')
        technicals_button.click()

    def get_data():

        upcoming_events = driver.find_element_by_class_name("tv-fundamental-block__value "
                                                            "tv-fundamental-block__value--sentence-cased "
                                                            "js-symbol-next-earning").text
        eps = driver.find_element_by_class_name("tv-fundamental-block__value js-symbol-eps").text
        price_earnings = driver.find_element_by_class_name("tv-fundamental-block__value js-symbol-pe").text

        one_day_technical = driver.find_element_by_class_name("tab-B2mArR2X tabActive-368-nktb tab-1Yr0rq0J"
                                                                " active-37sipdzm noBorder-oc3HwerO")
        one_day_technical.click()
        one_day_speedometer_signal = driver.find_element_by_class_name("speedometerSignal-pyzN--tL buyColor-4BaoBngr").text
        one_week_technical = driver.find_element_by_class_name("tab-B2mArR2X tab-1Yr0rq0J noBorder-oc3HwerO")
        one_week_technical.click()
        one_week_speedometer_signal = driver.find_element_by_class_name("speedometerSignal-pyzN--tL buyColor-4BaoBngr").text

        one_month_technical = driver.find_element_by_class_name("tab-B2mArR2X tab-1Yr0rq0J noBorder-oc3HwerO")
        one_month_technical.click()
        one_month_speedometer_signal = driver.find_element_by_class_name("speedometerSignal-pyzN--tL buyColor-4BaoBngr").text

        return upcoming_events, eps, price_earnings, one_day_speedometer_signal, one_week_speedometer_signal, one_month_speedometer_signal
        # TODO put weights in speedometer_signals

