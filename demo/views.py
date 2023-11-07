from django.http import JsonResponse
from django.shortcuts import render


# Create your views here.
def demo(request):
    lst = [{"name": "arsenii", "grade": "junior"},
           {"name": "anton", "grade": "middle"},
           {"name": "Vladislav", "grade": "senior"}]
    return JsonResponse(lst, safe=False)
