from formset.views import EditCollectionView
from .models import Zmenovka
from .forms import ZmenovkaCollection


class ZmenovkaCreateUpdateView(EditCollectionView):
    typ = 'i00'

    model = Zmenovka
    collection_class = ZmenovkaCollection
    template_name = 'i00_update.html'


    def get_object(self, queryset=None):
        try:  # updateview
            return super().get_object(queryset)
        except:  # createview
            return self.get_queryset().none()

    def get_initial(self) -> dict:
        """ nastavi zadatal + zodpovedny = user
        """
        initial = super().get_initial()
        if not getattr(self.object, 'zadatel', False):
            initial.update(zadatel=self.request.user)
        if not getattr(self.object, 'zodpovedny', False):
            initial.update(zodpovedny=self.request.user)
        return initial

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        collection = self.get_form_collection()
        context['form_collection_dict'] = dict(zip(
            collection.declared_holders.keys(),
            collection.__iter__()
        ))
        return context



