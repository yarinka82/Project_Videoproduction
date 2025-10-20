from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import ClientInquiry
from .notifications import notify_all_channels

@receiver(post_save, sender=ClientInquiry)
def handle_inquiry_created(sender, instance, created, **kwargs):
    if created:
        notify_all_channels(instance)