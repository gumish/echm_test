from django.forms.models import ModelForm, construct_instance, model_to_dict
from django.forms import fields, widgets
from formset.collection import FormCollection
from formset.renderers.bootstrap import FormRenderer
from .models import *


class ZmenovkaForm(ModelForm):
    class Meta:
        model = Zmenovka
        fields = '__all__'

class PlanMilnikuForm(ModelForm):
    id = fields.IntegerField(required=False, widget=widgets.HiddenInput)
    class Meta:
        model = PlanMilniku
        fields = '__all__'

class SchvalovatelForm(ModelForm):
    id = fields.IntegerField(required=False, widget=widgets.HiddenInput)
    class Meta:
        model = Schvalovatel
        fields = '__all__'


class SchvalovatelCollection(FormCollection):
    min_siblings = 0
    schvalovatel = SchvalovatelForm()

    def model_to_dict(self, zmenovka):
        fields = self.declared_holders['schvalovatel']._meta.fields
        data = []
        for schvalovatel in zmenovka.schvalovatele.all():
            data.append({
                'schvalovatel': model_to_dict(schvalovatel, fields=fields),
                # 'members': self.declared_holders['members'].model_to_dict(schvalovatel),
            })
        return data

    def retrieve_instance(self, data):
        if data := data.get('schvalovatel'):
            try:
                return self.instance.schvalovatels.get(id=data.get('id') or 0)
            except Schvalovatel.DoesNotExist:
                return Schvalovatel(name=data.get('name'), zmenovka=self.instance)

    def construct_instance(self, zmenovka):
        for holder in self.valid_holders:
            schvalovatel_form = holder['schvalovatel']
            instance = schvalovatel_form.instance
            if schvalovatel_form.marked_for_removal:
                instance.delete()
                continue
            construct_instance(schvalovatel_form, instance)
            schvalovatel_form.save()
            # holder['members'].construct_instance(instance)


class PlanMilnikuCollection(FormCollection):
    min_siblings = 0
    plan_milniku = PlanMilnikuForm()

    def model_to_dict(self, zmenovka):
        fields = self.declared_holders['plan_milniku']._meta.fields
        data = []
        for plan_milniku in zmenovka.plany_milniku.all():
            data.append({
                'plan_milniku': model_to_dict(plan_milniku, fields=fields),
                # 'members': self.declared_holders['members'].model_to_dict(plan_milniku),
            })
        return data

    def retrieve_instance(self, data):
        if data := data.get('plan_milniku'):
            try:
                return self.instance.plany_milniku.get(id=data.get('id') or 0)
            except PlanMilniku.DoesNotExist:
                return PlanMilniku(name=data.get('name'), zmenovka=self.instance)

    def construct_instance(self, zmenovka):
        for holder in self.valid_holders:
            pm_form = holder['plan_milniku']
            instance = pm_form.instance
            if pm_form.marked_for_removal:
                instance.delete()
                continue
            construct_instance(pm_form, instance)
            pm_form.save()
            # holder['members'].construct_instance(instance)


class ZmenovkaCollection(FormCollection):
    default_renderer = FormRenderer()
    zmenovka = ZmenovkaForm()
    plany_milniku = PlanMilnikuCollection()
    schvalovatele = SchvalovatelCollection()
