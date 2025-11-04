from adminsortable2.admin import SortableAdminMixin
from django.contrib import admin

from .models import Category, Video


@admin.register(Video)
class VideoAdmin(SortableAdminMixin, admin.ModelAdmin):
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "category":
            kwargs["initial"] = Category.objects.get_or_create(name="Allgemein")[0].pk
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    list_display = ("title", "url", "uploaded_at")
    readonly_fields = ("video_id", "preview_url")
    list_filter = ("category", "url", "uploaded_at")
    search_fields = ("title", "url", "uploaded_at")


@admin.register(Category)
class CategoryAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ("order", "name")
    search_fields = ("name",)
    list_filter = ("name",)
