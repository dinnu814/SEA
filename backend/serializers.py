from rest_framework import serializers
from .models import *

class Academic_yearsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Academic_years
        fields = '__all__'
        
class InfrastructureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Infrastructure
        fields = '__all__'

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subjects
        fields = '__all__'

class SyllabusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Syllabus
        fields = '__all__'

class Sub_chapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sub_chapter
        fields = '__all__'

class Hobby_clubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby_club
        fields = '__all__'

class Hobby_assign_classSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby_assign_class
        fields = '__all__'        

class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = '__all__' 

class Subjects_AssignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subjects_Assign
        fields = '__all__'


