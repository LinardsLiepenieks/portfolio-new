from django.contrib import admin
from .models import ProfileInfo


@admin.register(ProfileInfo)
class UserAdmin(admin.ModelAdmin):
    list_display = ['name']
# Register your models here.
