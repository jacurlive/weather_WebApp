import json
import requests

token = 'YOUR TOKEN'

weather_url_1 = requests.get(
    f'http://api.weatherapi.com/v1/current.json?key={token}&q=Tashkent&aqi=no')

json_response = weather_url_1.json()

weather_url_2 = requests.get(
     f'http://api.weatherapi.com/v1/forecast.json?key={token}&q=Tashkent&days=2&aqi=no&alerts=no')

response = weather_url_2.json()

json_str = json.dumps(response['forecast']['forecastday'][1])

res = json.loads(json_str)


def get_temp():
    # return json.dumps(json_response, indent=4)

    return json.dumps(json_response['current'].get('temp_c'), indent=4)


def get_day():
    return json.dumps(json_response['current'].get('is_day'), indent=4)


def get_condition():
    return json.dumps(json_response['current'].get('condition').get('text'))


def get_wind():
    return json.dumps(json_response['current'].get('wind_kph'))


def get_humidity():
    return json.dumps(json_response['current'].get('humidity'))


def get_next_temp():
    return res['day']['avgtemp_c']


def get_next_wind():
    return res['day']['maxwind_kph']


def get_next_humidity():
    return res['day']['avghumidity']


def get_next_condition():
    return res['day']['condition']['text']
