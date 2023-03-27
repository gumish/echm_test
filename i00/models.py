from django.apps import apps
from django.db import models
from django.urls import reverse


from echm.models import MILNIK_TYP_CHOICES

ROZHODNUTI_CHOICES = (
    ('', 'nerozhodnuto'),
    ('approved', 'schváleno'),
    ('refused', 'zamítnuto'),
)

class Zmenovka(models.Model):
    """
    I10Milnik == Zmenovka
    """

    typ = 'i00'
    admin_pozice = 0
    povinne_pole = ('cislo', 'nazev', 'popis', 'prinos', 'zadatel', 'zodpovedny')

    cislo = models.CharField(
        'číslo změny', max_length=50, unique=True)
    nazev = models.CharField(
        'název změny', max_length=250)
    popis = models.TextField(
        'popis změny', blank=True, null=True)
    prinos = models.TextField(
        'přínos změny', blank=True, null=True)

    zadatel = models.ForeignKey(
        'auth.User', on_delete=models.CASCADE,
        related_name='zadane_zmenovky',
        verbose_name='žadatel (ChR)',
        help_text='člověk, který o změnovku zažádá, ale dál ji neposouvá dále')

    zodpovedny = models.ForeignKey(
        'auth.User', on_delete=models.CASCADE,
        related_name='zodpovedne_zmenovky',
        verbose_name='zodpovědný (ChM)',
        help_text='člověk posunující změnovku vpřed, a mající přístup k administraci změnovky')

    # dokumenty = GenericRelation(
    #     'dokumenty.Dokument', related_query_name='objekt')

    class Meta:
        verbose_name = 'Změnovka'
        verbose_name_plural = 'Změnovky'

    def __str__(self):
        return f'{self.cislo}'

    def get_absolute_url(self):
        return reverse(f'{self.typ}:update', args=(self.cislo,))

    @property
    def verbose(self):
        return self._meta.verbose_name.title()

    @property
    def zmenovka(self):
        """ pro views self.object.zmenovka
        """
        return self

    @property
    def plan_milniku(self):
        """ vrati PlanMilniku == i00
        """
        return self.plany_milniku.filter(typ='i00').first()

    @property
    def produkty(self):
        """ vrati Produkty
        """
        from i10.models import Produkt
        return Produkt.objects.filter(milnik__plan_milniku__zmenovka=self)

    def je_schvalitelny(self, request=None):
        """ vraci bool zdali je vse vyplneno
        """
        fields = [getattr(self, f) for f in self.povinne_pole]
        return all(fields)


class PlanMilniku(models.Model):
    """
    Casovy plan milniku
    - slouzi pouze k urceni poradi milniku a jejich aktivaci/deaktivaci
    """
    admin_pozice = 1

    zmenovka = models.ForeignKey(
        'i00.Zmenovka', on_delete=models.CASCADE, related_name='plany_milniku')
    typ = models.CharField(
        'typ', max_length=50, choices=MILNIK_TYP_CHOICES)
    aktivni = models.BooleanField(
        'aktivní', default=True)

    planovane_datum = models.DateField(
        'plánované datum', blank=True, null=True)
    skutecne_datum = models.DateField(
        'skutečné datum', blank=True, null=True)

    class Meta:
        verbose_name = 'Plán milníku'
        verbose_name_plural = 'Plány milníku'
        ordering = ('zmenovka', 'typ')

    def __str__(self):
        return f'{self.zmenovka.cislo}|{self.typ}_plan_milniku'

    def get_absolute_url(self):
        """ vrati URL zmeny Milniku
        """
        return reverse(f'{self.typ}:update', args=(self.zmenovka.cislo,))

    def nazev(self):
        return self.get_typ_display().split(' - ')[-1]

    @property
    def splnen(self):
        return bool(self.skutecne_datum)

    @property
    def milnik(self):
        """ vrati Milnik, pokud neni pak ho vytvori
        """
        model_name = '{}Milnik'.format(self.typ.upper())
        model = apps.get_model(self.typ, model_name)  # module, model
        milnik, _ = model.objects.get_or_create(plan_milniku=self)
        return milnik

    @property
    def predchozi(self):
        """ vrati predchozi aktivni PlanMilniku """
        return PlanMilniku.objects.filter(zmenovka=self.zmenovka, typ__lt=self.typ, aktivni=True).last()

    @property
    def dalsi(self):
        """ vrati dalsi aktivni PlanMilniku """
        return PlanMilniku.objects.filter(zmenovka=self.zmenovka, typ__gt=self.typ, aktivni=True).first()


class Schvalovatel(models.Model):
    """
    Schvalovatel obecný
    """

    zmenovka = models.ForeignKey(
        'i00.Zmenovka', on_delete=models.CASCADE, related_name='schvalovatele')
    role = models.ForeignKey(
        'echm.RoleSchvalovatele', on_delete=models.CASCADE, related_name='schvalovatele',
        verbose_name='role', null=True, blank=True)
    user = models.ForeignKey(
        'auth.User', on_delete=models.CASCADE, related_name='schvalovatele',
        verbose_name='uživatel', null=True, blank=True)

    rozhodnuti = models.CharField(
        'rozhodnutí', max_length=50, choices=ROZHODNUTI_CHOICES,
        default='', null=True, blank=True)

    odpovezeno_kdy = models.DateTimeField(
        'odpovězeno kdy', null=True, blank=True,
        help_text='kdy CCB člen odpověděl')

    komentar = models.CharField(
        'komentář', max_length=500, null=True, blank=True)

    class Meta:
        verbose_name = 'Schvalovatel'
        verbose_name_plural = 'Schvalovatelé'
        ordering = ('-zmenovka', 'role', 'user')

    @property
    def jmeno(self):
        return self.user.__str__()

    def __str__(self):
        return '{} | {}'.format(self.role, self.jmeno)


# ABSTRACT
# --------

class MilnikAbstract(models.Model):
    """
    ABSTRACT Milnik
    - napojen na PlanMilniku
    - casto obsahuje sadu otazek
    I10Milnik = Zmenovka
    """
    typ = ''
    admin_pozice = 0
    povinne_pole = ()  # pole ktera musi byt vyplnena, aby bylo povoleno odeslani k dalsimu milniku

    plan_milniku = models.OneToOneField(
        'i00.PlanMilniku', on_delete=models.CASCADE, related_name='%(class)s')  # i10milnik

    class Meta:
        abstract = True
        verbose_name = 'Milník'
        verbose_name_plural = 'Milník'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._meta.verbose_name = f'{self.typ} Milník'
        self._meta.verbose_name_plural = f'{self.typ} Milníky'

    def __str__(self):
        return f'{self.zmenovka}|{self.typ}milnik'

    def get_absolute_url(self):
        return self.plan_milniku.get_absolute_url()

    @property
    def verbose(self):
        return self._meta.verbose_name.title()

    @property
    def zmenovka(self):
        return self.plan_milniku.zmenovka

    def je_schvalitelny(self, request=None):
        """ vraci bool zdali jsou povinna pole vyplnena
        """
        fields = [getattr(self, f) for f in self.povinne_pole]
        return all(fields)

