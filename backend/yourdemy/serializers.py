from rest_framework import serializers
from .models import  User,Courses,VideoLecture,Section


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class VideoLectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoLecture
        fields = '__all__'

class SectionSerializer(serializers.ModelSerializer):
    video_lectures = VideoLectureSerializer(many=True, read_only=True)

    class Meta:
        model = Section
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    sections = SectionSerializer(many=True, read_only=True)
    class Meta:
        model = Courses
        fields = '__all__'