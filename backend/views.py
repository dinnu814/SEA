from rest_framework.parsers import FileUploadParser
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics,status
from rest_framework import viewsets
from django.db.models import Q

class Academic_yearsListCreate(generics.ListCreateAPIView):
    queryset = Academic_years.objects.all().filter(c_status ='Active')
    serializer_class = Academic_yearsSerializer

class DetailAcademic_years(generics.RetrieveUpdateDestroyAPIView):
    queryset = Academic_years.objects.all()
    serializer_class = Academic_yearsSerializer

class InfrastructureListCreate(generics.ListCreateAPIView):
    queryset = Infrastructure.objects.all().filter(c_status ='Active')
    serializer_class = InfrastructureSerializer

class DetailInfrastructure(generics.RetrieveUpdateDestroyAPIView):
    queryset = Infrastructure.objects.all()
    serializer_class = InfrastructureSerializer

class BranchListCreate(generics.ListCreateAPIView):
    queryset = Branch.objects.all().filter(c_status ='Active')
    serializer_class = BranchSerializer

class DetailBranch(generics.RetrieveUpdateDestroyAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

class ClassListCreate(generics.ListCreateAPIView):
    queryset = Class.objects.all().filter(c_status = 'Active')
    serializer_class = ClassSerializer

class DetailClass(generics.RetrieveUpdateDestroyAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class SectionListCreate(generics.ListCreateAPIView):
    queryset = Section.objects.all().filter(c_status = 'Active')
    serializer_class = SectionSerializer

class DetailSection(generics.RetrieveUpdateDestroyAPIView):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

class SubjectListCreate(generics.ListCreateAPIView):
    queryset = Subjects.objects.all().filter(c_status = 'Active')
    serializer_class = SubjectSerializer

class DetailSubject(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subjects.objects.all()
    serializer_class = SubjectSerializer

class SyllabusListCreate(generics.ListCreateAPIView):
    queryset = Syllabus.objects.all().filter(c_status = 'Active')
    serializer_class = SyllabusSerializer

class DetailSyllabus(generics.RetrieveUpdateDestroyAPIView):
    queryset = Syllabus.objects.all()
    serializer_class = SyllabusSerializer

class Sub_chapterListCreate(generics.ListCreateAPIView):
    queryset = Sub_chapter.objects.all().filter(c_status = 'Active')
    serializer_class = Sub_chapterSerializer

class DetailSub_chapter(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sub_chapter.objects.all()
    serializer_class = Sub_chapterSerializer

class Hobby_clubListCreate(generics.ListCreateAPIView):
    queryset = Hobby_club.objects.all().filter(c_status = 'Active')
    serializer_class = Hobby_clubSerializer

class DetailHobby_club(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hobby_club.objects.all()
    serializer_class = Hobby_clubSerializer


class Subject_assignListCreate(generics.ListCreateAPIView):
    queryset = Subjects_Assign.objects.all().filter(c_status = 'Active')
    serializer_class = Subjects_AssignSerializer

class DetailSubject_assign(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subjects_Assign.objects.all()
    serializer_class = Subjects_AssignSerializer

class Hobby_club_assignListCreate(generics.ListCreateAPIView):
    queryset = Hobby_assign_class.objects.all().filter(c_status = 'Active')
    serializer_class = Hobby_assign_classSerializer

class DetailHobby_club_assign(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hobby_assign_class.objects.all()
    serializer_class = Hobby_assign_classSerializer


class ClassViewSet(viewsets.ModelViewSet):
    serializer_class = ClassSerializer

    def list(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class SectionViewSet(viewsets.ModelViewSet):
    serializer_class = SectionSerializer

    def list(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class SubjectAssignMultiViewSet(viewsets.ModelViewSet):
    serializer_class = Subjects_AssignSerializer

    def list(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class HobbyAssignMultiViewSet(viewsets.ModelViewSet):
    serializer_class = Hobby_assign_classSerializer

    def list(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class SubjectViewSet(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer

    def list(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class HobbyViewSet(viewsets.ModelViewSet):
    serializer_class = Hobby_clubSerializer

    def list(self, request, *args, **kwargs):
        data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        print (data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    
@api_view(['GET'])
def UniversityList(request):
    if request.method == 'GET':
        data = Infrastructure.objects.all().filter(i_university=0).filter(c_status = 'Active')
        serializer = InfrastructureSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def GroupsList(request):
    if request.method == 'GET':
        data = Infrastructure.objects.all().filter(~Q(i_university=0)).filter(c_status = 'Active')
        serializer = InfrastructureSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def GroupList(request,pk):
    if request.method == 'GET':
        data = Infrastructure.objects.all().filter(i_university = pk).filter(c_status = 'Active')
        serializer = InfrastructureSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def Delete_Academic(request,pk):
    if request.method == 'POST':
        data = Academic_years.objects.filter(i_year_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_Infrastructure(request,pk):
    if request.method == 'POST':
        data = Infrastructure.objects.filter(i_infra_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_Branch(request,pk):
    if request.method == 'POST':
        data = Branch.objects.filter(i_branch_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_Class(request,pk):
    if request.method == 'POST':
        data = Class.objects.filter(i_class_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_Section(request,pk):
    if request.method == 'POST':
        data = Section.objects.filter(i_section_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_Subject(request,pk):
    if request.method == 'POST':
        data = Subjects.objects.filter(i_subject_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_Syllabus(request,pk):
    if request.method == 'POST':
        data = Syllabus.objects.filter(i_syllabus_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_SubChapter(request,pk):
    if request.method == 'POST':
        data = Sub_chapter.objects.filter(i_sub_chapter_id = pk).update(c_status ='In-Active')
        return Response(data)


@api_view(['POST'])
def Change_Default(request,pk):
    if request.method == 'POST':
        Academic_years.objects.all().update(c_default = 'N')
        data = Academic_years.objects.filter(i_year_id = pk).update(c_default = 'Y')
        return Response(data)


@api_view(['GET'])
def SectionByClass(request,pk):
    if request.method == 'GET':
        print(request)
        data = Section.objects.all().filter(i_class_id = pk).filter(c_status = 'Active')
        serializer = SectionSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def SubjectByClass(request,pk):
    if request.method == 'GET':
        data = Subjects_Assign.objects.all().filter(i_class_id = pk).filter(c_status = 'Active')
        serializer = Subjects_AssignSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def SubjectBySection(request,pk):
    if request.method == 'GET':
        data = Subjects_Assign.objects.all().filter(i_section_id = pk).filter(c_status = 'Active')
        serializer = Subjects_AssignSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def HobbyByClass(request,pk):
    if request.method == 'GET':
        data = Hobby_assign_class.objects.all().filter(i_class_id = pk).filter(c_status = 'Active')
        serializer = Hobby_assign_classSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def HobbyBySection(request,pk):
    if request.method == 'GET':
        data = Hobby_assign_class.objects.all().filter(i_section_id = pk).filter(c_status = 'Active')
        serializer = Hobby_assign_classSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def Delete_Subject_Assign(request,pk):
    if request.method == 'POST':
        data = Subjects_Assign.objects.filter(i_subject_assign_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_Hobby_Assign(request,pk):
    if request.method == 'POST':
        data = Hobby_assign_class.objects.filter(i_hobby_class_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['POST'])
def Delete_Hobby(request,pk):
    if request.method == 'POST':
        data = Hobby_club.objects.filter(i_hobby_id = pk).update(c_status ='In-Active')
        return Response(data)

@api_view(['GET'])
def SyllabusByClass(request,pk):
    if request.method == 'GET':
        data = Syllabus.objects.all().filter(i_class_id = pk).filter(c_status = 'Active')
        serializer = SyllabusSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def SyllabusBySection(request,pk):
    if request.method == 'GET':
        data = Syllabus.objects.all().filter(i_section_id = pk).filter(c_status = 'Active')
        serializer = SyllabusSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)