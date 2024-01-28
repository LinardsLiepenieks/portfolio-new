from django.shortcuts import render
from django.http import JsonResponse
from ProfileInfo.models import ProfileInfo
# Create your views here.


def test(request):
    items = [
        {'id': 1, 'name': 'Item 1'},
        {'id': 2, 'name': 'Item 2'},
        # Add more items
    ]
    return JsonResponse({'items': items})


def get_active_profileinfo(request):
    try:
        active_profile = ProfileInfo.objects.get(is_active=True)
        data = {
            'quote': active_profile.quote,
            'quote_lv': active_profile.quote_lv,
            'description': active_profile.description,
            'logo_url': active_profile.logo.url,
            'email': active_profile.email,
            'linkedin_url': active_profile.linkedin_url,
        }
        return JsonResponse(data)
    except ProfileInfo.DoesNotExist:
        return JsonResponse({'error': 'No active profile found'}, status=404)
