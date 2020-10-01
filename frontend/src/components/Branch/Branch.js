import React, { Component } from "react";
import { connect } from "react-redux";
import { getBranches,getYearById,deleteYear,editBranch } from '../../store/actions/branchAction';
import {getInfra} from '../../store/actions/infrastructureAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import { createMessage } from '../../store/actions/messageAction';



class Branch extends React.Component {

  constructor(props) {
    super(props);
  }
 state = {
  branches : []
 }
	static propTypes = {
		branches : PropTypes.array.isRequired,
    getBranches : PropTypes.func.isRequired,
    deleteYear : PropTypes.func.isRequired

  }
  



	componentDidMount()
	{
    this.props.getBranches();
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
    console.log("Branches aRE " ,this.props.branches)
		return (
			<div>
        
            
			{/* Row */}
            <div class="row">


              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Branch</h3>
                    <Link className ="btn btn-primary btn-md" to = "/addbranch">Add</Link>
                  </div>
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                          <th class = "text-white">Serial No</th>
                          <th class="text-white">Branch Name</th>
                          <th class= "text-white">Code</th>
                          <th class= "text-white">Address</th>
                          <th class="text-white">Description</th>
                          <th class= "text-white">Logo</th>
                          <th class= "text-white">University</th>
                          <th class= "text-white">Group</th>
                          <th class="text-white">Action</th>
                        </tr>
                      
                      </thead>
                      <tbody>
                       
                      {this.props.branches.map((branch,i) => (
                        <tr key={branch.i_branch_id}>
                        <td>{i+1}</td>
                          <th scope="row">{branch.c_name}</th>
                          <td>{branch.c_code}</td>
                          <td>{branch.c_address}</td>
                          <td>{branch.c_description}</td>
                          <td><img src={branch.c_logo} height="30" width="30"/></td>
                          {
                        
                            this.props.infra.map(content => {
                              if(branch.i_university == content.i_infra_id)
                              {
                                return  <td>{content.c_name}</td>
                              }
                            })
                          }  

                           {
                        
                            this.props.infra.map(content => {
                              if(branch.i_group == content.i_infra_id)
                              {
                                return  <td>{content.c_name}</td>
                              }
                            })
                          }  
                          <td className="actions">
                            <Link to = {`/branchedit/${branch.i_branch_id}`}><i class="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteYear.bind(this,branch.i_branch_id)}><i class="fa fa-trash"></i></span>
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
  branches:state.branches.branches,
  infra:state.infra.infra
});


export default connect(mapStateToProps,{ getInfra,getBranches,getYearById,deleteYear,editBranch,createMessage })(withRouter(Branch));