from django.urls import path
from . import views

urlpatterns = [
    # UPDATERs
    path( '<str:cislo>/update/', views.I10MilnikCreateUpdateView.as_view(), name='update'),

    # VIEWERs
    path( '<str:cislo>/detail/', views.ZmenovkaDetailView.as_view(), name='detail'),

    # HTMXs
    path('hx_create_projekt/', views.hx_create_projekt, name='hx_create_projekt'),
]

