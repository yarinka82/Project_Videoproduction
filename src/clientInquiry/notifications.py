import os

import requests
from django.conf import settings


def send_telegram_message(text):
    url = f"https://api.telegram.org/bot{settings.TELEGRAM_TOKEN}/sendMessage"
    payload = {"chat_id": settings.TELEGRAM_CHAT_ID, "text": text, "parse_mode": "HTML"}
    try:
        response = requests.post(url, data=payload, timeout=5)
        if response.status_code != 200:
            print(f"Telegram failed: {response.text}")
    except requests.RequestException as e:
        print(f"Telegram error: {e}")


def send_brevo_email(subject, message, to_email=None):
    url = "https://api.brevo.com/v3/smtp/email"
    headers = {
        "api-key": os.getenv("BREVO_API_KEY"),
        "Content-Type": "application/json",
    }
    payload = {
        "sender": {"name": "Garaj", "email": os.getenv("EMAIL_SENDER")},
        "to": [{"email": to_email or os.getenv("EMAIL_RECEIVER")}],
        "subject": subject,
        "textContent": message,
    }

    try:
        response = requests.post(url, json=payload, headers=headers, timeout=10)
        print(f"✅ Brevo email sent: {response.status_code}")
    except Exception as e:
        print(f"❌ Brevo API error: {e}")
        send_telegram_message(f"<b>Brevo error:</b> {e}")


def notify_all_channels(inquiry):
    subject = "Neue Anfrage"
    message = f"""
👤 Name: {inquiry.name}
🏢 Firma: {inquiry.company}
📧 E-Mail: {inquiry.email}
📞 Telefonnummer: {inquiry.phone}
📝 Nachricht: {inquiry.message or '—'}
"""
    send_brevo_email(subject, message)
    send_telegram_message(f"<b>{subject}</b>\n{message}")
