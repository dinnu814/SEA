import React, { Component } from "react";
import { connect } from "react-redux";
import { getSubject,getClassById,editClass,deleteClass } from '../../store/actions/subjectAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import { createMessage } from '../../store/actions/messageAction';



class Subjectstructure extends React.Component {
	static propTypes = {
	  subjects : PropTypes.array.isRequired,
    getClass : PropTypes.func.isRequired,
    deleteClass : PropTypes.func.isRequired

	}

	componentDidMount()
	{
		this.props.getSubject();
    let data =  localStorage.getItem('myData');
    console.log(data);
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
		return (
			<div>
            
    
            <div class="row">

              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Subjects</h3>

      <Link className ="btn btn-primary btn-md float-right" to = "/addsubjects">Add</Link>
      
                    </div>
                    
      
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                        <th class="text-white">Serial No</th>
                          <th class="text-white">Subject</th>
                          <th class="text-white">Description</th>
                          <th class="text-white">Type</th>
                          <th class="text-white">Action</th>

                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.subjects.map((classd,i) => (
                        <tr key={classd.i_subject_id}>
                          <td>{i+1}</td>
                          <th scope="row">{classd.i_subject_name}</th>
                          <td>{classd.c_description}</td>
                          <td>{classd.c_type}</td>
                          <td class="actions">
                            <Link to = {`/subjectedit/${classd.i_subject_id}`}><i class="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteClass.bind(this,classd.i_subject_id)}><i className="fa fa-trash"></i></span>
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
	subjects:state.subjects.subjects
});


export default connect(mapStateToProps,{ getSubject,getClassById,editClass,deleteClass,createMessage})(withRouter(Subjectstructure));