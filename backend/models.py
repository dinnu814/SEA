from django.db import models

# Create your models here.

class Infrastructure(models.Model):
   i_infra_id = models.AutoField(primary_key=True)
   c_name = models.CharField(max_length=500)
   c_code = models.CharField(max_length=100,blank=True)
   c_address = models.CharField(max_length=1000,blank=True)
   c_description = models.CharField(max_length=1000,blank=True)
   c_logo = models.ImageField(upload_to='images/',blank=True,null=True)
   i_university = models.IntegerField(blank=True)
   c_status = models.CharField(max_length=10)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50) 

class Branch(models.Model):
   i_branch_id = models.AutoField(primary_key=True)
   c_name = models.CharField(max_length=500)
   c_code = models.CharField(max_length=100,blank=True)
   c_address = models.CharField(max_length=1000,blank=True)
   c_description = models.CharField(max_length=1000,blank=True)
   c_logo = models.ImageField(upload_to='images/',blank=True,null=True)
   i_university = models.ForeignKey(Infrastructure, related_name='university',on_delete=models.CASCADE,blank = True,null=True) # university is not mandatory
   i_group = models.ForeignKey(Infrastructure, related_name='group',on_delete=models.CASCADE,blank = True,null=True)  # Group is not mandatory
   c_status = models.CharField(max_length=10)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50) 

class Academic_years(models.Model):
    i_year_id = models.AutoField(primary_key=True)
    FromDate = models.DateField()
    ToDate = models.DateField()
    c_academic_year = models.CharField(max_length=50)
    c_description = models.CharField(max_length=1000,blank = True)
    c_default = models.CharField(max_length =1,default ='N')
    i_branch_id = models.ForeignKey(Branch, on_delete=models.CASCADE)
    c_status = models.CharField(max_length=10) 
    d_created_at = models.DateTimeField(auto_now_add=True)
    d_updated_at = models.DateTimeField(auto_now=True)
    c_created_by = models.CharField(max_length=50)
    c_updated_by = models.CharField(max_length=50)

class Class(models.Model):
   i_class_id = models.AutoField(primary_key=True)
   c_class_name = models.CharField(max_length=100)
   c_description = models.CharField(max_length=1000,blank=True)
   c_room = models.CharField(max_length =25,blank=True)
   #i_year_id = models.ForeignKey(Academic_years, on_delete=models.CASCADE)
   i_branch_id = models.ForeignKey(Branch, on_delete=models.CASCADE)  
   c_status = models.CharField(max_length=10)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50) 


class Section(models.Model):
   i_section_id = models.AutoField(primary_key=True)
   c_section_name = models.CharField(max_length=100)
   c_description = models.CharField(max_length=1000,blank=True)
   c_room = models.CharField(max_length =25,blank=True)
   i_class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
 # i_year_id = models.ForeignKey(Academic_years, on_delete=models.CASCADE)
   i_branch_id = models.ForeignKey(Branch, on_delete=models.CASCADE)
   c_status = models.CharField(max_length=10)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50)

class Subjects(models.Model):
    i_subject_id = models.AutoField(primary_key=True)
    i_subject_name = models.CharField(max_length=1000)
    c_description = models.CharField(max_length=1000,blank=True)
    c_type = models.CharField(max_length = 100)
    i_branch_id = models.ForeignKey(Branch, on_delete=models.CASCADE)
    c_status = models.CharField(max_length=10)
    d_created_at = models.DateTimeField(auto_now_add=True)
    d_updated_at = models.DateTimeField(auto_now=True)
    c_created_by = models.CharField(max_length=50)
    c_updated_by = models.CharField(max_length=50)

class Subjects_Assign(models.Model):
    i_subject_assign_id = models.AutoField(primary_key=True)
    i_subject_id = models.ForeignKey(Subjects, on_delete=models.CASCADE)
    i_class_id = models.ForeignKey(Class, on_delete=models.CASCADE,blank=True)
    i_section_id = models.ForeignKey(Section, on_delete=models.CASCADE,blank = True) # section id is not mandatory
    c_status = models.CharField(max_length=10)
    d_created_at = models.DateTimeField(auto_now_add=True)
    d_updated_at = models.DateTimeField(auto_now=True)
    c_created_by = models.CharField(max_length=50)
    c_updated_by = models.CharField(max_length=50)



class Syllabus(models.Model):
   i_syllabus_id = models.AutoField(primary_key=True)
   i_subject_id = models.ForeignKey(Subjects, on_delete=models.CASCADE)
   i_class_id = models.ForeignKey(Class, on_delete=models.CASCADE,blank=True)
   i_section_id = models.ForeignKey(Section, on_delete=models.CASCADE,blank = True) # section id is not mandatory
   i_branch_id = models.ForeignKey(Branch, on_delete=models.CASCADE)
   c_chapter_no = models.CharField(max_length = 100)
   c_chapter_name = models.CharField(max_length = 200)
   c_page_from = models.CharField(max_length = 50) 
   c_page_to = models.CharField(max_length = 50)
   d_date_from = models.DateField()
   d_date_to = models.DateField()
   c_status = models.CharField(max_length=10)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50)

class Sub_chapter(models.Model):
   i_sub_chapter_id = models.AutoField(primary_key=True)
   i_syllabus_id = models.ForeignKey(Syllabus, on_delete=models.CASCADE)
   c_sub_chapter_no = models.CharField(max_length = 100)
   c_sub_chapter_name = models.CharField(max_length = 200)
   c_page_from = models.CharField(max_length = 50) 
   c_page_to = models.CharField(max_length = 50)
   d_date_from = models.DateField()
   d_date_to = models.DateField()
   c_status = models.CharField(max_length=10)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50)

class Hobby_club(models.Model):
   i_hobby_id = models.AutoField(primary_key=True)
   c_hobby_name = models.CharField(max_length=100)
   c_description = models.CharField(max_length=300,blank=True)
   c_status = models.CharField(max_length=10)
   i_branch_id = models.ForeignKey(Branch, on_delete=models.CASCADE)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50)

class Hobby_assign_class(models.Model):
   i_hobby_class_id = models.AutoField(primary_key=True)
   i_hobby = models.ForeignKey(Hobby_club, on_delete=models.CASCADE)
   i_class_id = models.ForeignKey(Class, on_delete=models.CASCADE,blank=True)
   i_section_id = models.ForeignKey(Section,on_delete = models.CASCADE,blank=True)
   c_status = models.CharField(max_length=10)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50)
  
class Settings(models.Model):
   i_setting_id = models.AutoField(primary_key =True)
   i_year_id = models.ForeignKey(Academic_years, on_delete=models.CASCADE)
   i_branch_id = models.ForeignKey(Branch, on_delete=models.CASCADE)
   c_status = models.CharField(max_length=10)
   d_created_at = models.DateTimeField(auto_now_add=True)
   d_updated_at = models.DateTimeField(auto_now=True)
   c_created_by = models.CharField(max_length=50)
   c_updated_by = models.CharField(max_length=50)
