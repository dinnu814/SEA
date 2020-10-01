import React, { Component } from "react";
import { connect } from "react-redux";
import { getClass,getClassById,editClass,deleteClass } from '../../store/actions/classAction';
import { getSection } from '../../store/actions/sectionAction';
import { getSubject } from '../../store/actions/subjectAction';
import { getSubjectAssign } from '../../store/actions/subjectassignAction';
import { getHobbyAssign } from '../../store/actions/hobbyassignAction';
import { getHobby } from '../../store/actions/hobbyAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import { createMessage } from '../../store/actions/messageAction';

const Search = ({classid}) => {
 
  const {i_class_id} = classid;
  const [showResults, setShowResults] = React.useState(false)
  const toggle = () => setShowResults(!showResults)
  return (
    <div className="assign-btn">
      <input type="submit" value="Assign" onClick={() => toggle(!showResults)} className="btn btn-primary" />
  { showResults ? <div className="assign-dp"><Link to={`/addsection/${i_class_id}`}>Sections</Link> <Link to={`/assignSubjectDetails/${i_class_id}`}>Subject </Link> <Link to={`/Hobbydetails/${i_class_id}`}>Hobby</Link></div> : null }
    </div>
  )
}


class Classestructure extends React.Component {
static propTypes = {
 classes : PropTypes.array.isRequired,
    getClass : PropTypes.func.isRequired,
    getSection : PropTypes.func.isRequired,
    getSubject : PropTypes.func.isRequired,
    deleteClass : PropTypes.func.isRequired,
    getSubjectAssign : PropTypes.func.isRequired,
    getHobbyAssign : PropTypes.func.isRequired,
    getHobby : PropTypes.func.isRequired,

}

componentDidMount()
{
this.props.getClass();
    this.props.getSection();
    this.props.getSubject();
    this.props.getSubjectAssign();
    this.props.getHobbyAssign();
    this.props.getHobby();    
    let data =  localStorage.getItem('myData');
    if(data=="add_success")
    {
      this.props.createMessage({msg:'Added Successfully'});
    }
    if(data=="update_success")
    {
      this.props.createMessage({msg:'Updated Successfully'});
    }
    localStorage.removeItem('myData');
}


render() {
  console.log("hobbies",this.props.hobbies)
return (
<div>
           
   
            <div class="row">

              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Classes</h3>

      <Link className ="btn btn-primary btn-md float-right" to = "/addclass">Add</Link>
     
                    </div>
                   
     
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                     
                        <tr >
                        <th class="text-white">Serial No</th>
                          <th class="text-white">Name</th>
                          <th class="text-white">Room</th>
                          <th class="text-white">Description</th>
                          <th class="text-white">Sections</th>
                          <th class="text-white">Subjects</th>
                          <th class="text-white">Hobbies</th>
                          <th class="text-white">Action</th>

                        </tr>
                     
                      </thead>
                      <tbody>
                      {this.props.classes.map((classd,i) => (
                        <tr key={classd.i_class_id}>
<td>{i+1}</td>
                          <th scope="row">{classd.c_class_name}</th>
                          <td>{classd.c_room}</td>
                          <td>{classd.c_description}</td>
                          <td>
                          {
                           this.props.sections.map(section => {
                              if(section.i_class_id == classd.i_class_id)
                              {
                             
                               return <span>{section.c_section_name}, </span>
                             }
                           

                            })
                         }
                          </td>
                         
<td>
                         {
                          this.props.subjectassign.map(sa => {
                             if(sa.i_class_id == classd.i_class_id)
                             {
                               return(
                             this.props.subjects.map(sb => {
                               if(sb.i_subject_id == sa.i_subject_id)
                               {
                              return <span>{sb.i_subject_name}, </span>
                            }
                          })

                              )//end return
                            }//end first if                            
                           })//end first map function
                        }
                         </td>
<td>
                         {
                          this.props.hobbiesassign.map(ha => {
                             if(ha.i_class_id == classd.i_class_id)
                             {
                               return(
                               this.props.hobbies.map(hb => {
                                 if(hb.i_hobby_id == ha.i_hobby)
                                 {
                              return <span>{hb.c_hobby_name}, </span>
                            }
                           
                            })
                             )
                            }
                           

                           })
                        }
                         </td>
                          <td class="actions">
                            <Link to = {`/classedit/${classd.i_class_id}`}><i class="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteClass.bind(this,classd.i_class_id)}><i className="fa fa-trash"></i></span>
                            <Search classid={classd}/>
                          </td>
                         
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
           

</div>
);
}
}

const mapStateToProps = state => ({
classes:state.classes.classes,
subjects:state.subjects.subjects,
  sections:state.sections.sections,
  hobbies:state.hobbies.hobbies,
  subjectassign:state.subjectassign.subjectassign,
  hobbiesassign:state.hobbiesassign.hobbiesassign,
});


export default connect(mapStateToProps,{ getClass,getClassById,editClass,deleteClass,createMessage,getSection,getSubjectAssign,getHobbyAssign,getHobby,getSubject})(withRouter(Classestructure));