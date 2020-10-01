import React, { Component } from "react";
import { connect } from "react-redux";
import { getInfra,getInfraById,editInfra,deleteInfra } from '../../store/actions/infrastructureAction';
import PropTypes from 'prop-types';
import InfrastructureForm from './InfrastructureForm';
import {Link, withRouter} from 'react-router-dom';
import { createMessage } from '../../store/actions/messageAction';



class Infrastructure extends React.Component {
	static propTypes = {
	  infra : PropTypes.array.isRequired,
    getinfra : PropTypes.func.isRequired,
    deleteinfra : PropTypes.func.isRequired

	}

	componentDidMount()
	{
		this.props.getInfra();
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
                    <h3 class="card-title">Infrastructure</h3>

      <Link className ="btn btn-primary btn-md float-right" to = "/addinfrastructure">Add</Link>
      
                    </div>
                    
      
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                          <th class="text-white">Serial No</th>
                          <th class="text-white">Name</th>
                          <th class="text-white">Code</th>
                          <th class="text-white">Address</th>
                          <th class="text-white">Description</th>
                          <th class="text-white">Logo</th>
                          <th class="text-white">University</th>
                          <th class="text-white">Action</th>

                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.infra.map((infra,i) => (
                        <tr key={infra.i_infra_id}>
                          <td>{i+1}</td>
                          <th scope="row">{infra.c_name}</th>
                          <td>{infra.c_code}</td>
                          <td>{infra.c_address}</td>
                          <td>{infra.c_description}</td>
                          <td><img src={infra.c_logo} height="30" width="30"/></td>
                          {
                            infra.i_university==0?
                               <td></td>:
                          
                            this.props.infra.map(content => {
                              if(infra.i_university == content.i_infra_id)
                              {
                                return  <td>{content.c_name}</td>
                              }
                            })
                          }                          
                          <td>
                            <Link to = {`/infrastructureedit/${infra.i_infra_id}`}><i className="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteInfra.bind(this,infra.i_infra_id)}><i className="fa fa-trash"></i></span>
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
	infra:state.infra.infra
});


export default connect(mapStateToProps,{ getInfra,getInfraById,editInfra,deleteInfra,createMessage })(withRouter(Infrastructure));