from django.core.exceptions import ValidationError
from django.db import models


class FAQ(models.Model):
    """
    Represents a frequently asked question with answer and display order.
    """

    question = models.CharField(max_length=255, blank=False, null=False)
    answer = models.TextField(blank=False, null=False)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def clean(self):
        if not self.question:
            raise ValidationError(
                {"question": "Das Feld 'Frage' darf nicht leer sein."}
            )
        if not self.answer:
            raise ValidationError(
                {"answer": "Das Feld 'Antwort' darf nicht leer sein."}
            )

    def __str__(self):
        return self.question or f"FAQ #{self.id}"
