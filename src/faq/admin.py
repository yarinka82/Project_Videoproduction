from adminsortable2.admin import SortableAdminMixin
from django.contrib import admin

from .models import FAQ


@admin.register(FAQ)
class FAQAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ("order", "question",)
    list_display_links = ("question",)
    list_editable = ("order",)
    search_fields = ("question", "answer")
    ordering = ("order",)
