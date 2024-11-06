from django.urls import path
from . import views

app_name = "clone_site"
urlpatterns = [path("", views.HomeView.as_view(), name="home")]
