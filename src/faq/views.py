from django.http import JsonResponse

from .models import FAQ

# pylint: disable=unused-argument
def faq_list(request):
    try:
        faqs = list(FAQ.objects.values())
        return JsonResponse({"status": 200, "message": "OK", "list": faqs}, status=200)
    except Exception as e:
        return JsonResponse(
            {"status": 500, "message": f"Server error: {str(e)}", "list": []},
            status=500,
        )
