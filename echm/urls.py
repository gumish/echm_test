
from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.conf.urls import static

from . import views

urlpatterns = [
    path('i00/', include(('i00.urls', 'i00'), namespace='i00')),
    # path('i10/', include(('i10.urls', 'i10'), namespace='i10')),


    # LISTs
    path(
        '',
        views.ZmenovkaListView.as_view(), name='zmenovka_list'
    ),

    # DJANGO
    path(
        'accounts/',
        include('django.contrib.auth.urls')),
    path(
        'admin/', admin.site.urls),
    path(
        'i18n/',
        include('django.conf.urls.i18n'))
]

urlpatterns += static.static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
