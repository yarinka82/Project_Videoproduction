from django.contrib import admin
from .models import FAQ
from adminsortable2.admin import SortableAdminMixin

@admin.register(FAQ)
class FAQAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ("question",)
    search_fields = ("question", "answer")