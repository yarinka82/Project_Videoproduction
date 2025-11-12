from django.db import models


class ClientInquiry(models.Model):
    name = models.CharField(max_length=255, verbose_name="Name")
    company = models.CharField(max_length=255, verbose_name="Business GmbH", blank=True)
    email = models.EmailField(verbose_name="E-Mail")
    phone = models.CharField(max_length=50, verbose_name="Telefonnummer")
    message = models.TextField(verbose_name="Anliegen oder Frage", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.name} ({self.company})"
