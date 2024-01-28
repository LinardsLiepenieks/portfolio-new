from django.urls import path
from . import views

urlpatterns = [
    path("test/", views.test, name="test"),
    path("profile_info/", views.get_active_profileinfo, name="test")
]
