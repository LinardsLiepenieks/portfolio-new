from django.db import models
from django.core.validators import EmailValidator
from django.utils import timezone

# Create your models here.


class ProfileInfo(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    quote = models.CharField(max_length=255)
    quote_lv = models.CharField(max_length=255)
    description = models.TextField()
    logo = models.ImageField(
        upload_to="images/logo")
    email = models.CharField(
        max_length=100,
        validators=[EmailValidator(message="Enter a valid email address.")],
    )
    linkedin_url = models.URLField(max_length=200)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.is_active:
            # Deactivate all other items when this item is activated
            ProfileInfo.objects.exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)
