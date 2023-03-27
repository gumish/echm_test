from django.urls import path
from . import views


urlpatterns = [
    # UPDATERs
    path( 'zmenovka/nova/', views.ZmenovkaCreateUpdateView.as_view(), name='create'),
    path( '<str:pk>/update/', views.ZmenovkaCreateUpdateView.as_view(), name='update'),
]

