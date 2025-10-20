from django.apps import AppConfig


class ClientInquiryConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "src.clientInquiry"

    def ready(self):
        import src.clientInquiry.signals  # pylint: disable=import-outside-toplevel, unused-import
