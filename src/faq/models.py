from django.db import models
from django.core.exceptions import ValidationError

class FAQ(models.Model):
    question = models.CharField(max_length=255, blank=False, null=False)
    answer = models.TextField(blank=False, null=False)
    order = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['order']

    def clean(self):
        if not self.question:
            raise ValidationError({'question': "Das Feld 'Frage' darf nicht leer sein."})
        if not self.answer:
            raise ValidationError({'answer': "Das Feld 'Antwort' darf nicht leer sein."})

    def __str__(self):
        return self.question
