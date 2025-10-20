import re
from urllib.parse import parse_qs, urlparse

from django.core.exceptions import ValidationError
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name


class Video(models.Model):
    SOURCE_CHOICES = [
        ("youtube", "YouTube"),
        ("gdrive", "Google Drive"),
    ]

    title = models.CharField(max_length=200)
    source = models.CharField(max_length=20, choices=SOURCE_CHOICES, default="youtube")
    url = models.URLField(blank=True, null=True)
    video_id = models.CharField(max_length=100, blank=True, null=True, editable=False)
    preview_url_manual = models.URLField(
        blank=True,
        null=True,
        verbose_name="Manual preview URL",
        help_text="If set, this URL will be used instead of the automatic preview",
    )
    preview_url = models.URLField(blank=True, null=True, editable=False)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True
    )
    uploaded_at = models.DateTimeField(auto_now_add=True)
    order = models.PositiveIntegerField(default=0)
    # file = models.FileField(upload_to='videos/', blank=True, null=True)

    class Meta:
        ordering = ["order"]

    def clean(self):
        errors = {}
        if not self.title:
            errors["title"] = "Title cannot be empty."
        if not self.url:
            errors["url"] = "URL cannot be empty."
        elif self.source == "youtube" and not self.extract_youtube_id(self.url):
            errors["url"] = "Invalid YouTube URL."
        elif self.source == "gdrive" and not re.search(r"/d/([^/]+)", self.url):
            errors["url"] = "Invalid Google Drive URL."
        if errors:
            raise ValidationError(errors)

    def save(self, *args, **kwargs):
        if self.preview_url_manual:
            self.preview_url = self.preview_url_manual  # переважає будь-яке автоматичне
        elif self.url:
            if re.search(r"(youtube\.com|youtu\.be)", self.url):
                self.source = "youtube"
                self.video_id = self.extract_youtube_id(self.url)
                self.preview_url = (
                    f"https://img.youtube.com/vi/{self.video_id}/hqdefault.jpg"
                    if self.video_id
                    else None
                )
            if self.url and "drive.google.com" in self.url:
                self.source = "gdrive"
                match = re.search(r"/d/([^/]+)", self.url)
                self.video_id = match.group(1) if match else None
                self.preview_url = (
                    f"https://drive.google.com/thumbnail?id={self.video_id}"
                    if self.video_id
                    else None
                )
            # else:
            #     self.source = 'local'

        super().save(*args, **kwargs)

    @staticmethod
    def extract_youtube_id(url):
        parsed = urlparse(url)
        if "youtube.com" in parsed.netloc:
            if parsed.path.startswith("/watch"):
                return parse_qs(parsed.query).get("v", [None])[0]
            if parsed.path.startswith("/embed/"):
                return parsed.path.split("/embed/")[1]
            if parsed.path.startswith("/shorts/"):
                return parsed.path.split("/shorts/")[1]
        if "youtu.be" in parsed.netloc:
            return parsed.path.lstrip("/")
        return None

    def embed_url(self):
        if self.source == "youtube" and self.video_id:
            return f"https://www.youtube-nocookie.com/embed/{self.video_id}?rel=0&modestbranding=1"
        if self.source == "gdrive" and self.video_id:
            return f"https://drive.google.com/file/d/{self.video_id}/preview"
        return self.url

        # elif self.source == 'local' and self.file:
        #     poster = f'poster="{self.preview.url}"' if self.preview else ''
        #     return self.file.url

    def __str__(self):
        return self.title
