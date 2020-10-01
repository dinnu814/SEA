import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addYear } from '../../store/actions/academicAction';
import { createMessage } from '../../store/actions/messageAction';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


export class AcademicForm extends Component {

 
  state = {
    c_academic_year: '',
    c_academic_year_error:'',
    c_description: '',
    c_default: 'N',
    i_branch_id:4,
    c_status: 'Active',
    c_created_by: 'Admin',
    c_updated_by: 'Admin',
    FromDate: new Date(),
    ToDate: new Date(),
  };
  

  static propTypes = {
    addYear: PropTypes.func.isRequired,
    createMessage: PropTypes.func.isRequired,  

  };

   add_years = (dt,n) =>
 {
 return new Date(dt.setFullYear(dt.getFullYear() + n));      
 };

  
  handleChange = date => {
    
    this.setState({
      FromDate: date,
      dt :new Date(),
      ToDate :(this.add_years(this.state.FromDate, 1)),
    });

  };
  handleChange2 = date => {
    this.setState({
      ToDate: date,

    });
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  validate = () => {
    let isError = false;
    const errors = {
      c_academic_year_error : ""
    };
    if(this.state.c_academic_year == "")
    {
      isError = true;
      errors.c_academic_year_error = "Required Field";
    }
    if(isError)
    {
      this.setState({
        ...this.state,
        ...errors
      });
     
    }

    return isError;
  }


  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate()
    if(!err)
    {
    const { c_academic_year, c_description,i_branch_id, c_status,c_created_by,c_updated_by, c_default } = this.state;
    const FromDate = moment(this.state.FromDate).format('YYYY-MM-DD');
    const ToDate = moment(this.state.ToDate).format('YYYY-MM-DD');

    const year = { c_academic_year, c_description,i_branch_id, c_status ,c_created_by,c_updated_by,c_default,FromDate,ToDate};
    this.props.addYear(year);
    localStorage.setItem('myData', "add_success");
    //window.location.href = "/academic";
    this.props.history.push('/academic');
    }
  
  };

  render() {
    const { c_academic_year, c_description, c_status } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        {/* <h3>Add Academicyear</h3> */}
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>From</label>
            <DatePicker className="form-control"
        selected={this.state.FromDate}
        onChange={this.handleChange}
      />
           <div style={{color:"red"}}> {this.state.c_academic_year_error} </div>
          </div> 
          <div className="form-group">
            <label>To</label>
            <DatePicker className="form-control"
        selected={this.state.ToDate}
        onChange={this.handleChange2}
      />
           <div style={{color:"red"}}> {this.state.c_academic_year_error} </div>
          </div> 
          <div className="form-group">
            <label>Academic year</label>
            <span style={{color:"red"}}>*</span>
            <input
              className="form-control"
              type="text"
              name="c_academic_year"
              onChange={this.onChange}
              value={c_academic_year}
            />
           <div style={{color:"red"}}> {this.state.c_academic_year_error} </div>
          </div>          
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="c_description"
              onChange={this.onChange}
              value={c_description}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            &nbsp;&nbsp;
            <a href="/academic" className="btn btn-secondary">
                 Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addYear,createMessage })(AcademicForm); 