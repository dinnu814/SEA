from django.urls import path,re_path,include
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static 
from . import views

urlpatterns = [

    path('auth/' , include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    path('api/academic/', views.Academic_yearsListCreate.as_view() ),
    path('api/academic/<int:pk>/', views.DetailAcademic_years.as_view()),
    path('api/academic/delete/<int:pk>/', views.Delete_Academic),
    path('api/change_default/<int:pk>/', views.Change_Default),


    path('api/infrastructure/', views.InfrastructureListCreate.as_view() ),
    path('api/infrastructure/<int:pk>/', views.DetailInfrastructure.as_view()),
    path('api/infrastructure/delete/<int:pk>/', views.Delete_Infrastructure),

    path('api/branch/', views.BranchListCreate.as_view() ),
    path('api/branch/<int:pk>/', views.DetailBranch.as_view()),
    path('api/branch/delete/<int:pk>/', views.Delete_Branch),

    path('api/class/', views.ClassListCreate.as_view() ),
    path('api/class/<int:pk>/', views.DetailClass.as_view()),
    path('api/classmulti/', views.ClassViewSet.as_view({'post':'list'})),
    path('api/class/delete/<int:pk>/', views.Delete_Class),

    path('api/section/', views.SectionListCreate.as_view() ),
    path('api/section/<int:pk>/', views.DetailSection.as_view()),
    path('api/sectionmulti/',views.SectionViewSet.as_view({'post':'list'})),
    path('api/section/delete/<int:pk>/', views.Delete_Section),

    path('api/subject/', views.SubjectListCreate.as_view() ),
    path('api/subject/<int:pk>/', views.DetailSubject.as_view()),
    path('api/subject/delete/<int:pk>/', views.Delete_Subject),
    path('api/subjectmulti/',views.SubjectViewSet.as_view({'post':'list'})),


    path('api/subject_assign/', views.Subject_assignListCreate.as_view() ),
    path('api/subject_assign/<int:pk>/', views.DetailSubject_assign.as_view()),
    path('api/subject_assign/delete/<int:pk>/', views.Delete_Subject_Assign),
    path('api/subject_assign_multi/', views.SubjectAssignMultiViewSet.as_view({'post':'list'})),
    

    path('api/syllabus/', views.SyllabusListCreate.as_view() ),
    path('api/syllabus/<int:pk>/', views.DetailSyllabus.as_view()),
    path('api/syllabus/delete/<int:pk>/', views.Delete_Syllabus),
    path('api/syllabus_section/<int:pk>/',views.SyllabusBySection),
    path('api/syllabus_class/<int:pk>/',views.SyllabusByClass),


    path('api/sub_chapter/', views.Sub_chapterListCreate.as_view() ),
    path('api/sub_chapter/<int:pk>/', views.DetailSub_chapter.as_view()),
    path('api/sub_chapter/delete/<int:pk>/', views.Delete_SubChapter),
    

    path('api/hobby_club/', views.Hobby_clubListCreate.as_view() ),
    path('api/hobby_club/<int:pk>/', views.DetailHobby_club.as_view()),
    path('api/hobby_club/delete/<int:pk>/',views.Delete_Hobby),
    path('api/hobbymulti/',views.HobbyViewSet.as_view({'post':'list'})),


    path('api/hobby_club_assign/', views.Hobby_club_assignListCreate.as_view() ),
    path('api/hobby_club_assign/<int:pk>/', views.DetailHobby_club_assign.as_view()),
    path('api/hobby_assign/delete/<int:pk>/',views.Delete_Hobby_Assign),
    path('api/hobby_assign_multi/', views.HobbyAssignMultiViewSet.as_view({'post':'list'})),
   
    path('api/university_list/', views.UniversityList),
    path('api/group_list/', views.GroupsList),
    path('api/group_list/<int:pk>/', views.GroupList),

    path('api/section_class/<int:pk>/',views.SectionByClass),
    path('api/subject_section/<int:pk>/',views.SubjectBySection),
    path('api/subject_class/<int:pk>/',views.SubjectByClass),
    path('api/hobby_section/<int:pk>/',views.HobbyBySection),
    path('api/hobby_class/<int:pk>/',views.HobbyByClass),
     
    
    

]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)