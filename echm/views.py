from django.views import generic
from i00.models import Zmenovka


class HomePageView(generic.base.TemplateView):
    template_name = 'home.html'

# LISTs
class ZmenovkaListView(generic.ListView):
    queryset = (
        Zmenovka.objects.all().order_by('-id')
    )
    template_name = "zmenovka_list.html"


# DETAILs
# class ZmenovkaDetailView(generic.DetailView):
#     model = Zmenovka
#     template_name = "zmenovka_detail.html"
#     slug_field = 'cislo'
#     slug_url_kwarg = 'cislo'
