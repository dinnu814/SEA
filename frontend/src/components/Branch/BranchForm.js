import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBranch,getGroup } from '../../store/actions/branchAction';
import { createMessage } from '../../store/actions/messageAction';

export class BranchForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.onUniversity = this.onUniversity.bind(this);
    
  }
  state = {
    c_name: '',
    c_code: '',
    c_address:'',
    c_description: '',
    c_logo:'',
    c_status: 'Active',
    i_group:0,
    i_university:0,
    c_created_by: 'Admin',
    c_updated_by: 'Admin',
    university : [],
    group :[]
  };
  static propTypes = {
    addBranch: PropTypes.func.isRequired,
    branches : PropTypes.array.isRequired,
  }

  componentDidMount()
  {
    fetch('/api/university_list/')
     .then(response => response.json())
     .then(data => {
       this.setState({university: data});
     })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  onUniversity = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });
    const id = e.target.value
    this.props.getGroup(e.target.value)
  }

  

  onChange2 = (e) => this.setState({ [e.target.name]: e.target.files[0] });



  onSubmit = (e) => {
    e.preventDefault();
    
    const {c_name,c_code,c_address,c_description,c_logo,c_status,c_created_by,c_updated_by, i_group,i_university} = this.state;
    const branch = {c_name,c_code,c_address,c_description,c_logo,c_status,c_created_by,c_updated_by, i_group,i_university};
    this.props.addBranch(branch);
    localStorage.setItem('myData', "add_success");
    window.location.href = "/branch";
    
  };

  render() {

    let UniversityItems = this.state.university.map((item) => 
    <option key={item.i_infra_id} value={item.i_infra_id}>{item.c_name}</option>,

);

    let GroupItems = this.props.branches.map((item) =>
    
    <option key={item.i_infra_id} value={item.i_infra_id}>{item.c_name}</option>
    
);

    const {c_name,c_code,c_address,c_description,c_logo,c_status,i_group,i_university} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Branch</label>
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
            
            <select class="form-control" onChange={this.onUniversity} name="i_university">
              <option>----Select----</option>
              {UniversityItems}
           </select>
          </div>

           <div className="form-group">
            <label>Select Group</label>
            
            <select class="form-control" onChange={this.onChange} name="i_group">

              <option>----Select----</option>
              {GroupItems}
             
           </select>
          </div> 
          <div className="form-group">
          <button type = "submit" className = "btn btn-success">
                            Submit
                        </button>
                        &nbsp;&nbsp;
                        <a href="/branch" className="btn btn-secondary">
                        Cancel
                        </a>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  branches:state.branches.branches //state.infra(this is from reducer).infra
});

export default connect(mapStateToProps, { addBranch , getGroup,createMessage })(BranchForm);