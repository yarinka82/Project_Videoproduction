from adminsortable2.admin import SortableAdminMixin
from django.contrib import admin

from .models import ClientInquiry


@admin.register(ClientInquiry)
class ClientInquiryAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ("name", "company", "email", "phone", "message", "created_at")
    search_fields = ("name", "company", "email", "phone", "message", "created_at")
    list_filter = ("created_at",)

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return True
