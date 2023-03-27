from django.views.generic import DetailView
from i00.views import MilnikUpdateAbstractView, MilnikDetailAbstractView

from .forms import I10MilnikForm, ProduktyInlineFormset
from .models import I10Milnik


# UPDATE
# ------

class I10MilnikCreateUpdateView(MilnikUpdateAbstractView):
    typ = 'i10'
    model = I10Milnik
    form_class = I10MilnikForm
    formsety = {
        'produkty_formset': ProduktyInlineFormset,
    }


# VIEWER
# ------
class ZmenovkaDetailView(MilnikDetailAbstractView):
    typ = 'i10'
    model = I10Milnik


# HTMX
# ----
from django.contrib import messages
from django.http.response import HttpResponse
from django.shortcuts import render

from echm.models import Projekt
from echm.forms import ProjektForm

def hx_create_projekt(request):
    """ zobrazi formular projektu, POST-> vytvori novy
    """
    form = ProjektForm(request.POST or None)
    title = 'Vytvořit nový projekt'
    if request.method == 'POST' and form.is_valid():
        new_projekt = form.save()
        print(new_projekt)
        messages.success(request, 'nový projekt vytvořen')
        return HttpResponse()
    return render(request, 'modal_forms/modal_form.html', {'form': form, 'title': title})


