from django.db import models
from i00.models import MilnikAbstract

# CUSTOM QUERYSETS
# ----------------
class ProduktQuerySet(models.QuerySet):
    def vlastni_tym(self):
        return self.filter(vlastni_tym=True)


class I10Milnik(MilnikAbstract):
    """
    i10 - Produkty
    """
    typ='i10'


class Produkt(models.Model):
    """
    Zmenou zasazeny Produkt
    - k Produktu budou prirazeni urciti lide ke schvaleni
    """

    milnik = models.ForeignKey(
        'I10Milnik', related_name='produkty', on_delete=models.CASCADE)
    projekt = models.ForeignKey(
        'echm.Projekt', on_delete=models.SET_NULL, blank=True, null=True)

    cislo = models.CharField(
        'číslo', max_length=50)
    nazev = models.CharField(
        'název', max_length=70)
    poznamka = models.CharField(
        'poznámka', max_length=250, blank=True, null=True)
    zodpovedny = models.ForeignKey(
        'auth.User', on_delete=models.SET_NULL, blank=True, null=True,
        verbose_name='zodpovědný')

    vlastni_tym = models.BooleanField(
        'vlastní tým', default=False, help_text='přidělovat schvalovatele zvlášť')
    nadprodukt = models.ForeignKey(
        'Produkt', verbose_name='nad-produkt',
        related_name='podprodukty', on_delete=models.CASCADE,
        help_text='produkt s vlastním týmem schvalovatelů, pod který tento produkt spadá',
        null=True, blank=True)
    poradi = models.PositiveIntegerField('pořadí', blank=True, null=True)
    objects = ProduktQuerySet.as_manager()

    class Meta:
        verbose_name = 'Produkt'
        verbose_name_plural = 'Produkty'
        ordering = ('-milnik', 'poradi',)

    def __str__(self):
        return self.cislo

    @property
    def zmenovka(self):
        return self.milnik.zmenovka

    # def save(self) -> None:
    #     self.vlastni_tym = not self.nadprodukt
    #     return super().save()
