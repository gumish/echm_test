from django import template
from django.contrib.contenttypes.models import ContentType
from django.urls import NoReverseMatch, reverse
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

register = template.Library()

@register.simple_tag(takes_context=True)
def pm_url(context, pm):
    """ vraci url milniku detail/update
    """
    user = context['user']
    if pm.zmenovka.zodpovedny == user or user.is_superuser:
        view_typ = 'update'
    else:
        view_typ = 'detail'
    try:
        return reverse(f'{pm.typ}:{view_typ}', args=(pm.zmenovka.cislo,))
    except NoReverseMatch:
        return '#'


@register.filter
def humanize(value, css=''):
    if value is False or value in ('N',):
        return mark_safe(
            '<i class="ui remove red {} icon"></i>'.format(css)
        )
    elif value is True or value in ('A',):
        return mark_safe(
            '<i class="ui checkmark green {} icon"></i>'.format(css)
        )
    elif value in (None, 0, ''):
        return '-'
    else:
        return value
humanize.is_safe = False


@register.filter
def yesno2(value):
    if not value:
        return mark_safe('-')
    else:
        return mark_safe(
            '<i class="ui checkmark green icon" title="{0}"></i>'.format(_('Ano'))
        )


@register.filter
def file_icon(ext):
    value = ''
    ext = ext.lower()
    if ext in ('zip', 'rar', 'tar', '7z'):
        value = 'archive'
    elif ext in ('mp3', 'wav'):
        value = 'audio'
    elif ext in ('xls', 'xlsx'):
        value = 'excel'
    elif ext in ('jpg', 'gif', 'tif', 'jpeg', 'bmp', 'png'):
        value = 'image'
    elif ext in ('pdf',):
        value = 'pdf'
    elif ext in ('ppt', 'pptx', 'pps', 'ppsx'):
        value = 'powerpoint'
    elif ext in ('txt',):
        value = 'text'
    elif ext in ('avi', 'mpg', 'mpeg', 'mp4', 'mts', 'mov', 'm4v'):
        return mark_safe('<i class="video fitted icon"></i>')
    elif ext in ('doc', 'docx'):
        value = 'word'
    return mark_safe('<i class="file {0} outline fitted icon"></i>'.format(value))

@register.filter
def join_breaks(value):
    """
    Slouci vice polozek z textfield do radku
    - pouziti v listech
    """
    if value:
        return value.replace("\n"," | ")

@register.filter
def percentage(value, arg=5):
    if not value:
        return '-'
    else:
        result = '{:.2f}'.format(value*100)
        result = result.replace('.', ',')
        if value >= arg:
            result = '<span class="red">%s</span>' % result
            return mark_safe(result)
        else:
            result = '<span>%s</span>' % result
            return mark_safe(result)


@register.filter
def help_text(value):
    if value:
        result = '<span class="icon icon_info cursor_help" title="{}"></span>'.format(value)
        return mark_safe(result)
    else:
        return ''


@register.filter
def addcss(field, field_css=''):
    """ ke stavajici class prida dalsi """
    if field_css:
        try:
            field.field.widget.attrs.setdefault('class', '')
            field.field.widget.attrs['class'] += ' ' + field_css
            return field
        except:
            pass
    return field


@register.filter
def placeholder(field, text=''):
    try:
        return field.as_widget(attrs={"placeholder": text})
    except:
        return field


@register.filter
def ltruncate(value, trunc):
    value = str(value)
    if len(value) > 20:
        return value.lstrip(str(trunc)).lstrip('_')
    else:
        return value

# @register.filter
# def model_name(value):
#     return value.__class__.__name__.lower()

# @register.filter
# def basename(field):
#     return os.path.basename(field.name)

# URLS

@register.filter
def admin_url(obj, action='change'):
    return reverse(
        'admin:{0}_{1}_{2}'.format(
            obj._meta.app_label,
            obj._meta.model_name,
            action
        ),
        args=(obj.pk,)
    )

# @register.filter
# def delete_url(obj):
#     return reverse(
#         '{0}:{1}_delete'.format(
#             obj._meta.app_label,
#             obj._meta.model_name
#         ),
#         args=(obj.pk,)
#     )

# @register.filter
# def edit_url(obj):
#     return reverse(
#         '{0}:{1}_edit'.format(
#             obj._meta.app_label,
#             obj._meta.model_name
#         ),
#         args=(obj.pk,)
#     )

# @register.filter
# def create_url(obj):
#     return reverse(
#         '{0}:{1}_create'.format(
#             obj._meta.app_label,
#             obj._meta.model_name
#         )
#     )

# @register.filter
# def ajax_update(obj):
#     return reverse(
#         '{0}:ajax_{1}_update'.format(
#             obj._meta.app_label,
#             obj._meta.model_name
#         ),
#         args=(obj.pk,)
#     )

@register.filter
def ajax_delete_object_url(obj):
    content_type = ContentType.objects.get_for_model(obj)
    return reverse(
        'ajax_smazani_objektu',
        args=(content_type.pk, obj.pk)
    )

@register.filter
def ct_id(objekt):
    """
    Vrati ID content typu objektu
    """
    # print('@@', objekt, type(objekt))
    return ContentType.objects.get_for_model(objekt).pk

# @register.filter
# def ajax_comment_create(obj):
#     content_type = ContentType.objects.get_for_model(obj)
#     return reverse(
#         'comments:ajax_comment_create',
#         args=(content_type.pk, obj.pk)
#     )

@register.filter
def ajax_field_autocomplete(obj, field):
    content_type = ContentType.objects.get_for_model(obj)
    return reverse(
        'ajax_field_autocomplete',
        args=(content_type.pk, field)
    )

@register.filter
def dopln_chybejici_prvky(obj, empty=''):
    """ u REGROUP listu doplni prazdne prvky, aby sla udelat spravne tabulka
    """
    if obj:
        max_prvku = max([len(gr.list) for gr in obj])
        for gr in obj:
            chybejicich_prvku = max_prvku - len(gr.list)
            gr.list.extend([empty] * chybejicich_prvku)
    return obj

