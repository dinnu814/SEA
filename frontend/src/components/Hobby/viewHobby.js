import React, { Component } from "react";
import { connect } from "react-redux";
import { getviewHobby,editClass,deleteHobbyAssign ,getHobby} from '../../store/actions/hobbyAction';
import {getClass} from '../../store/actions/classAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';



class ViewHobbystructure extends React.Component {
	static propTypes = {
	  hobbies : PropTypes.array.isRequired,
    getviewHobby : PropTypes.func.isRequired,
    getClass :PropTypes.func.isRequired,
    deleteHobbyAssign : PropTypes.func.isRequired

	}

	componentDidMount()
	{
    this.props.getHobby()
    this.props.getClass()
    const classId = this.props.match.params.class_id
    this.props.getviewHobby(classId);
  console.log('Hobbies...',this.props.hobbies)
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
                          <th class="text-white">Class</th>
                          <th class="text-white">Action</th>

                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.viewhobbies.map((classd,i) => (
                        
                        <tr key={classd.i_hobby}>
                          <td>{i+1}</td>
                          {
                        
                        this.props.hobbies.map(content => {
                          if(classd.i_hobby == content.i_hobby_id)
                          {
                            return  <th scope="row">{content.c_hobby_name}</th>
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
                            <span onClick={this.props.deleteHobbyAssign.bind(this,classd.i_hobby_class_id)}><i className="fa fa-trash"></i></span>
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
  hobbies:state.hobbies.hobbies,
  viewhobbies:state.viewhobbies.viewhobbies,
  classes:state.classes.classes
});


export default connect(mapStateToProps,{ getviewHobby,editClass,deleteHobbyAssign,getClass,getHobby})(withRouter(ViewHobbystructure));