from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import User, Courses
from .serializers import UserSerializer, CourseSerializer
from rest_framework import status
# Create your views here.


class UserView(APIView):

    def post(self, request):
        data = request.data
        serializer = UserSerializer(data=data)
        print("data", data, serializer.is_valid(), serializer.errors)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("User Added Successfully", safe=False)
        return JsonResponse("Failed to Add User", safe=False)

    def get(self, request):
        data = User.objects.all()
        print(data)
        serialaizer = UserSerializer(data, many=True)

        return Response(serialaizer.data)


class CourseView(APIView):
    def get(self, request,id=None):
        if id==None:
            data = Courses.objects.all()
            print(data)
            serialaizer = CourseSerializer(data, many=True)
            return Response(serialaizer.data)
        else:
            try:
                course = Courses.objects.prefetch_related('sections__video_lectures').get(course_id=id)
                serializer = CourseSerializer(course)
                print(serializer)
                return Response(serializer.data)
            except Courses.DoesNotExist:
                return Response({'error': 'Course not found ${id}'}, status=status.HTTP_404_NOT_FOUND)
    
        


# {
# "name": "Alice",
# "email": "alice.bob@student.com",
# "password": "Data Structures",
# "interactive_mode":true
# }
