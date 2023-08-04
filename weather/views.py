from django.views.generic import TemplateView

from weather.weather_response import get_temp, get_condition, get_wind, get_day, get_humidity, get_next_temp, \
    get_next_wind, get_next_humidity, get_next_condition


class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['temp_c'] = get_temp()
        context['condition'] = get_condition()
        context['wind_kph'] = get_wind()
        context['day'] = get_day()
        context['humidity'] = get_humidity()
        context['next_temp'] = get_next_temp()
        context['next_wind'] = get_next_wind()
        context['next_humidity'] = get_next_humidity()
        context['next_condition'] = get_next_condition()
        return context
