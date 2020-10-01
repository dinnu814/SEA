import React, { Component } from "react";
import { connect } from "react-redux";
import { getviewSubjects,getClassById,editClass,deleteSubjectAssign,getSubject } from '../../store/actions/subjectAction';
import {getClass} from '../../store/actions/classAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';




class ViewSubjectstructure extends React.Component {
	static propTypes = {
    subjects : PropTypes.array.isRequired,
    getSubject :PropTypes.func.isRequired,
    getClass:PropTypes.func.isRequired,
    getviewSubjects : PropTypes.func.isRequired,

	}

	componentDidMount()
	{
    this.props.getClass()
    this.props.getSubject()
    const classId = this.props.match.params.class_id
    this.props.getviewSubjects(classId);

   
	}


	render() {		
		return (
			<div>
            
    
            <div class="row">

              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Subjects</h3>

      <Link className ="btn btn-primary btn-md float-right" to = "/addhobbies">Add</Link>
      
                    </div>
                    
      
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                        <th class="text-white">Serial No</th>
                          <th class="text-white">Subjects</th>
                          <th class="text-white">Class</th>
                          <th class="text-white">Action</th>

                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.subjectsclass.map((classd,i) => (
                        <tr key={classd.i_subject_id}>
<td>{i+1}</td>
{
                        
                        this.props.subjects.map(content => {
                          if(classd.i_subject_id == content.i_subject_id)
                          {
                            return  <th scope="row">{content.i_subject_name}</th>
                          }
                          else{
                          <th scope = "row"></th>
                          }
                        })
                      }  
                       {
                        
                        this.props.classes.map(content => {
                          if(classd.i_class_id == content.i_class_id)
                          {
                            return  <th scope="row">{content.c_class_name}</th>
                          }
                          else{
                          <td></td>
                          }
                        })
                      }  
                          <td class="actions">
                            
                            <span onClick={this.props.deleteSubjectAssign.bind(this,classd.i_subject_assign_id)}><i className="fa fa-trash"></i></span>
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
  subjectsclass:state.subjectsclass.subjectsclass,
  subjects:state.subjects.subjects,
  classes:state.classes.classes,
});


export default connect(mapStateToProps,{ getviewSubjects,getClassById,editClass,deleteSubjectAssign,getSubject,getClass})(withRouter(ViewSubjectstructure));