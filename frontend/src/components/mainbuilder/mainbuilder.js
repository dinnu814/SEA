import React , { Component } from 'react';
import Loggedin from '../pages/Loggedin';
import PrivateRoute from '../../hoc/PrivateRoute';
import Home from '../pages/Home';
import Login from '../Authentication/Login';
import Logout from '../Authentication/Logout';
import Signup from '../Authentication/Signup';
import Academic from '../Academicyears/Academic';
import AcademicForm from '../Academicyears/AcademicForm';
import AcademicEditForm from '../Academicyears/AcademicEditForm';
import { Route,Switch } from 'react-router-dom';
import Infrastructure from '../Infrastructure/Infrastructure';
import InfrastructureForm from '../Infrastructure/InfrastructureForm';
import InfrastructureEditForm from '../Infrastructure/InfrastructureEditForm';
import Branch from '../Branch/Branch';
import  BranchForm from '../Branch/BranchForm';
import  BranchEditForm from '../Branch/BranchEditForm';
import Classestructure from '../classes/Classes';
import ClassForm from '../Classes/ClassesForm';
import ClassesEditForm from '../Classes/ClassesEditForm';
import SectionStructure from '../sections/Sections';
import SectionFormMulti from '../sections/SectionForm2';
import SectionsEditForm from '../sections/SectionsEditForm';

import Subjects from '../subjects/Subjects';
import SubjectsForm from '../subjects/SubjectsForm';
import SubjectsEditForm from '../subjects/SubjectsEditForm';
import SubjectDetails from '../subjects/SubjectDetails2';

import Hobbystructure from '../Hobby/Hobbies';
import HobbiesForm from '../Hobby/HobbiesForm';
import HobbiesEditForm from '../Hobby/HobbiesEditForm';
import viewHobby from '../Hobby/viewHobby';
import viewSubjects from '../subjects/viewSubjects';
import HobbyDetails from '../Hobby/HobbyDetails';
import ViewSections from '../sections/viewsections';



class mainbuilder extends Component{

    render(){
       
       
        return(
                <Switch> 
                  
                    <Route path="/signup" component={Signup} /> 
                    <Route path="/login" component={Login} />  
                     <Route path ="/logout" component = {Logout}    />            
                     <Route path="/index" component={Loggedin} />

                    <Route path="/academic" component={Academic} />
                    <Route path="/addacademic" component={AcademicForm} />
                    <Route path="/academicedit/:year_id" component={AcademicEditForm} />

                    <Route path="/infrastructure" component={Infrastructure} />
                    <Route path="/addinfrastructure" component={InfrastructureForm} />
                    <Route path="/infrastructureedit/:infra_id" component={InfrastructureEditForm} />

                    <Route path="/branch" component={Branch} />
                    <Route path="/addbranch" component={BranchForm} />
                    <Route path="/branchedit/:branch_id" component={BranchEditForm} />

                    <Route path="/classes" component={Classestructure} />
                    <Route path="/addclass" component={ClassForm} />
                    <Route path="/classedit/:class_id" component={ClassesEditForm} />
                    <Route path="/addsection/:class_id" component={SectionFormMulti} />

                    <Route path="/sections" component={SectionStructure} />
                    <Route path="/sectionedit/:section_id" component={SectionsEditForm} />
                    <Route path="/viewsections/:class_id" component={ViewSections} />

                    <Route path="/subjects" component={Subjects} />
                    <Route path="/addsubjects" component={SubjectsForm} />
                    <Route path="/subjectedit/:subject_id" component={SubjectsEditForm} />
                    <Route path="/assignSubjectDetails/:class_id" component={SubjectDetails} />
                    <Route path="/viewsubjects/:class_id" component={viewSubjects} />
					
					<Route path="/Hobbies" component={Hobbystructure} />
                    <Route path="/addhobbies" component={HobbiesForm} />
                    <Route path="/hobbyedit/:hobby_id" component={HobbiesEditForm} />
                    <Route path="/Hobbydetails/:class_id" component={HobbyDetails} />
                    <Route path="/viewhobbies/:class_id" component={viewHobby} />
					
                    <Route path="/" component={Login} />

                    
                </Switch>
        );
    }
}

 export default mainbuilder;