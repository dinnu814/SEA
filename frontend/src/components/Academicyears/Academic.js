import React, { Component } from "react";
import { connect } from "react-redux";
import { getYears,getYearById,editYear,deleteYear,Change_default } from '../../store/actions/academicAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import { createMessage } from '../../store/actions/messageAction';



class Academic extends React.Component {

  constructor(props) {
    super(props);
    
  }

  
	static propTypes = {
		years : PropTypes.array.isRequired,
    getYears : PropTypes.func.isRequired,
    deleteYear : PropTypes.func.isRequired

  }
  

	componentDidMount()
	{
    this.props.getYears();
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

  MyFunction = (i_year_id) => {
    this.props.Change_default(i_year_id);
    this.props.history.push('/academic');
    window.location.reload(false);
  
  };



	render() {	
    
		return (
      
			<div>
			{/* Row */}
            <div class="row">
            

              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Academic_Years</h3>
                    <Link className ="btn btn-primary btn-md" to = "/addacademic">Add</Link>
                  </div>
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                          <th class="text-white">Serial No</th>
                          <th class="text-white">Academic_Year</th>
                          <th class="text-white">From Date</th>
                          <th class="text-white">To Date</th>
                          <th class="text-white">Description</th>
                          <th class ="text-white">Default</th>
                          <th class="text-white">Action</th>
                        </tr>
                      
                      </thead>
                      <tbody>
                      {this.props.years.map((year,i) => (
                        <tr key={year.i_year_id}>
                          
                      <td>{i+1}</td>

                          <th scope="row">{year.c_academic_year}</th>
                          <td>{year.FromDate}</td>
                          <td>{year.ToDate}</td>
                          <td>{year.c_description}</td>
                              {
                            year.c_default == 'Y' ?
                            <td>Yes</td>
                            :
                            <td>No</td>

                               } 
                          <td class = "actions">
                            <Link to = {`/academicedit/${year.i_year_id}`}><i className="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteYear.bind(this,year.i_year_id)}><i className="fa fa-trash"></i></span>
                            {/* <button onClick={() => {this.props.Change_default(year.i_year_id)}} >Default</button> */}
                            
                            <button onClick={() => {this.MyFunction(year.i_year_id)}} className="btn btn-primary assign-btn">Default</button>
                            
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
	years:state.years.years
});


export default connect(mapStateToProps,{ getYears,getYearById,editYear,deleteYear,createMessage,Change_default })(withRouter(Academic));