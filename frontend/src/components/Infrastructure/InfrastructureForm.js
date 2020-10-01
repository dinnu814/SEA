import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addInfra } from '../../store/actions/infrastructureAction';
import { createMessage } from '../../store/actions/messageAction';

export class InfrastructureForm extends Component {
  state = {
    c_name: '',
    c_code:'',
    c_address:'',
    c_description: '',
    c_logo:'',
    i_university:0,
    university:[],
    c_status: 'Active',
    c_created_by: 'Admin',
    c_updated_by: 'Admin'
  };

  componentDidMount()
  {
     fetch('/api/university_list/')
      .then(response => response.json())
      .then(data => {
        this.setState({university: data});
      })
  }

  static propTypes = {
    addInfra: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onChange2 = (e) => this.setState({ [e.target.name]: e.target.files[0] });


  onSubmit = (e) => {
    e.preventDefault();
    
    const {c_name,c_code,c_address,c_description,c_logo,i_university,c_status,c_created_by,c_updated_by} = this.state;
    const infra = {c_name,c_code,c_address,c_description,c_logo,i_university,c_status,c_created_by,c_updated_by};
    this.props.addInfra(infra);
    localStorage.setItem('myData', "add_success");
    window.location.href = "/infrastructure";
    
  
  };


  render() {

    let optionItems = this.state.university.map((item) =>
        <option key={item.i_infra_id} value={item.i_infra_id}>{item.c_name}</option>
    );

    const {c_name,c_code,c_address,c_description,c_logo,i_university,c_status} = this.state;


    return (
      <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>University/Group</label>
            <span style={{color:"red"}}>*</span>
            <input
              className="form-control"
              type="text"
              required
              name="c_name"
              onChange={this.onChange}
              value={c_name}
            />
          </div>          
          <div className="form-group">
            <label>Code</label>
            <input
              className="form-control"
              type="text"
              name="c_code"
              onChange={this.onChange}
              value={c_code}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              name="c_address"
              onChange={this.onChange}
              value={c_address}
            />
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
            <label>Logo</label>
            <input
              className="form-control"
              type="file"
              name="c_logo"
              onChange={this.onChange2}

            />
          </div>
          <div className="form-group">
            <label>Select University</label>
            
            <select class="form-control" onChange={this.onChange} name="i_university">
              <option>----Select----</option>
              {optionItems}
           </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            &nbsp;&nbsp;
            <a href="/infrastructure" className="btn btn-secondary">
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addInfra,createMessage })(InfrastructureForm);