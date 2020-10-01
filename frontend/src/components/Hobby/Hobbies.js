import React, { Component } from "react";
import { connect } from "react-redux";
import { getHobby,getHobbyById,editClass,deleteClass } from '../../store/actions/hobbyAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import { createMessage } from '../../store/actions/messageAction';



class Hobbystructure extends React.Component {
	static propTypes = {
	  hobbies : PropTypes.array.isRequired,
    getHobby : PropTypes.func.isRequired,
    deleteClass : PropTypes.func.isRequired

	}

	componentDidMount()
	{
    this.props.getHobby();
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
                    <h3 class="card-title">Hobbies</h3>

      <Link className ="btn btn-primary btn-md float-right" to = "/addhobbies">Add</Link>
      
                    </div>
                    
      
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                        <th class="text-white">Serial No</th>
                          <th class="text-white">Hobbies</th>
                          <th class="text-white">Description</th>
                          <th class="text-white">Action</th>

                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.hobbies.map((classd,i) => (
                        <tr key={classd.i_hobby_id}>
                          <td>{i+1}</td>
                          <th scope="row">{classd.c_hobby_name}</th>
                          <td>{classd.c_description}</td>
                          <td class="actions">
                            <Link to = {`/hobbyedit/${classd.i_hobby_id}`}><i class="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteClass.bind(this,classd.i_hobby_id)}><i className="fa fa-trash"></i></span>
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
	hobbies:state.hobbies.hobbies
});


export default connect(mapStateToProps,{ getHobby,getHobbyById,editClass,deleteClass,createMessage})(withRouter(Hobbystructure));