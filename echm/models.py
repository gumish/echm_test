from django.db import models

MILNIK_TYP_CHOICES = (
    ('i00', 'i00 - Zadání, Milníky'),
    ('i10', 'i10 - Produkty'),
    ('i20', 'i20 - Schvalovatelé'),
    ('i30', 'i30 - Analýza'),
    ('i40', 'i40 - Rozhodnutí'),
    ('i50', 'i50 - Realizace'),
    ('i80', 'i80 - Uvolnění'),
    ('i90', 'i90 - Uzavření'),
)

class Zakaznik(models.Model):
    """
    Zakaznik - automobilka
    """
    admin_pozice = 0
    nazev = models.CharField('název', max_length=100, unique=True)

    class Meta:
        ordering = ('nazev',)
        verbose_name = 'zákazník'
        verbose_name_plural = 'zákazníci'

    def __str__(self):
        return self.nazev


class Projekt(models.Model):
    """
    Projekt zakaznika
    """

    zakaznik = models.ForeignKey(
        'Zakaznik', verbose_name='zákazník',
         related_name='projekty', on_delete=models.CASCADE, blank=True, null=True)
    nazev = models.CharField('název', max_length=200)

    class Meta:
        ordering = ('zakaznik', 'nazev')
        verbose_name = 'projekt'
        verbose_name_plural = 'projekty'
        unique_together = ('zakaznik', 'nazev')

    def __str__(self):
        zakaznik = self.zakaznik.nazev if self.zakaznik else '???'
        return '{0} {1}'.format(zakaznik, self.nazev)


class Stredisko(models.Model):
    """
    Stredisko - pro zařazení a snadnější rozeznání uživatelů
    např: nástrojárna, trysky2, ie, lisovna
    """
    admin_pozice = 1
    nazev = models.CharField(
        'název', max_length=100, unique=True)
    poradi = models.PositiveSmallIntegerField(
        'pořadí v menu', default=1)
    aktivni = models.BooleanField(
        'aktivni', default=True)

    class Meta:
        ordering = ('-aktivni', 'poradi', 'nazev')
        verbose_name = 'středisko'
        verbose_name_plural = 'střediska'

    def __str__(self):
        return self.nazev


class RoleSchvalovateleProduktu(models.Model):
    """
    Role schvalovatele produktu
    - podřazena středisku
    např.: IE(NPLM), NÁSTROJÁRNA (Management Forem), E QMPP (výrobní kvalita)
    """
    admin_pozice = 5
    nazev = models.CharField(
        'název role', max_length=50)
    stredisko = models.ForeignKey(
        'Stredisko', on_delete=models.CASCADE, blank=True, null=True,
        help_text='omezuje vyber nabizenych zamestanancu do role')
    poradi = models.PositiveSmallIntegerField(
        'pořadí v menu', default=1)
    popis = models.CharField(
        'popis', max_length=300, blank=True, null=True)
    aktivni = models.BooleanField(
        'aktivni', default=True, help_text='bude přímo nabízeo v i20?')

    class Meta:
        ordering = ('-aktivni', 'poradi', 'stredisko', 'nazev')
        verbose_name = 'role schvalovatele produktu'
        verbose_name_plural = 'role schvalovatelů produktu'
        unique_together = ('nazev', 'stredisko')

    def __str__(self):
        return f'{self.nazev} ({self.stredisko})'


class RoleSchvalovatele(models.Model):
    """
    role schvalovatelů přiřazených přímo ke změnovce
    """
    admin_pozice = 4
    nazev = models.CharField(
        'název', max_length=50, unique=True)
    popis = models.CharField(
        'popis', max_length=300, blank=True, null=True)
    poradi = models.PositiveSmallIntegerField(
        'pořadí v menu', default=1)
    kde_zadat = models.CharField(
        'kde zadat člena', max_length=50, choices=MILNIK_TYP_CHOICES[1:],  # TODO ERROR v i00 pri create
        help_text='v jakém milniku zadán')
    aktivni = models.BooleanField(
        'aktivní', default=True,
        help_text='bude role přímo v milníku vytvořena? pokud ne, pak ji lze zvolit v dodatečných rolích')
    povinna = models.BooleanField(
        'povinná', default=False,
        help_text='bude přiřazení zaměstnance k roli (pokud bude přidána do milníku) vyžadováno ke schválení milníku?')

    class Meta:
        ordering = ('kde_zadat', '-aktivni', 'poradi', 'nazev',)
        verbose_name = 'role schvalovatele'
        verbose_name_plural = 'role schvalovatelů'

    def __str__(self):
        return self.nazev