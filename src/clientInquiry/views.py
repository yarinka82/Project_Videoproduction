import json

from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import ClientInquiry


@csrf_exempt
def create_inquiry(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=405)

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    required_fields = ["name", "email", "phone"]
    missing_fields = [field for field in required_fields if not data.get(field)]
    if missing_fields:
        return JsonResponse(
            {"error": f'Missing fields: {", ".join(missing_fields)}'}, status=400
        )

    try:
        validate_email(data["email"])
    except ValidationError:
        return JsonResponse({"error": "Invalid email format"}, status=400)

    message = data.get("message", "").strip()
    company = (data.get("company") or "").strip() 

    inquiry = ClientInquiry.objects.create(
        name=data["name"].strip(),
        company=company,
        email=data["email"].strip(),
        phone=data["phone"].strip(),
        message=message,
    )

    return JsonResponse(
        {
            "status": "success",
            "id": inquiry.id,
            "created_at": inquiry.created_at.isoformat(),
        }
    )
