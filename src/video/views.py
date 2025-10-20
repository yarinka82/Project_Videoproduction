from django.core.paginator import Paginator
from django.http import JsonResponse

from .models import Category, Video


def video_list(request):
    category_id = request.GET.get("category")
    videos = Video.objects.all()
    if category_id:
        if Category.objects.filter(id=category_id).exists():
            videos = videos.filter(category_id=category_id)
        else:
            return JsonResponse(
                {"status": 404, "message": "Category not found", "list": []}, status=404
            )

    sort_by = request.GET.get("sort")
    if sort_by == "uploaded":
        videos = videos.order_by("-uploaded_at")
    elif sort_by == "title":
        videos = videos.order_by("title")
    else:
        videos = videos.order_by("order")

    try:
        try:
            page_number = int(request.GET.get("page", 1))
            page_number = max(page_number, 1)
        except (ValueError, TypeError):
            page_number = 1

        per_page = int(request.GET.get("per_page", 9))
        paginator = Paginator(videos, per_page)
        page_obj = paginator.get_page(page_number)

        video = [
            {
                "title": v.title,
                "source": v.source,
                "id": v.id,
                "url": v.embed_url(),
                "preview": v.preview_url,
                "category": {
                    "id": v.category.id if v.category else None,
                    "name": v.category.name if v.category else None,
                },
                # "preview": v.preview.url if v.preview else None
            }
            for v in page_obj
        ]
        response = {
            "status": 200,
            "message": "OK",
            "list": video,
        }
        if paginator.num_pages > 1:
            response["pagination"] = {
                "page": page_obj.number,
                "total_pages": paginator.num_pages,
                "has_next": page_obj.has_next(),
                "has_previous": page_obj.has_previous(),
            }
        return JsonResponse(response, status=200)
    except Exception as e:
        return JsonResponse(
            {"status": 500, "message": f"Server error: {str(e)}", "list": []},
            status=500,
        )


def category_list(request):
    try:
        categories = Category.objects.all()
        sort_by = request.GET.get("sort")
        if sort_by == "name":
            categories = categories.order_by("name")
        elif sort_by == "id":
            categories = categories.order_by("id")
        else:
            categories = categories.order_by("order")

        data = [{"id": c.id, "name": c.name} for c in categories]
        return JsonResponse({"status": 200, "message": "OK", "list": data}, status=200)
    except Exception as e:
        return JsonResponse(
            {"status": 500, "message": f"Server error: {str(e)}", "list": []},
            status=500,
        )
