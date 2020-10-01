import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editClass,getClassById } from '../../store/actions/subjectAction';
import AUX from '../../hoc/Aux_';
import { withRouter } from 'react-router-dom';


export class SubjectsEditForm extends Component {
  constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
       // this.onChange2 = this.onChange2.bind(this);
    
      }

    

    componentDidMount() {
        
        const subject_id = this.props.match.params.subject_id
        this.props.getClassById(subject_id)

    }

    onChange = e => this.props.subjects[e.target.name]=e.target.value ;
   // onChange2 = e => this.props.classd[e.target.name]=e.target.files[0] ;
        
    onSubmit = e => {

        e.preventDefault();
        const {i_subject_name,c_room,c_description,i_branch_id,c_status,c_type,c_created_by,c_updated_by,i_subject_id,i_class_id,i_section_id} = this.props.subjects;
        const subject_id = { i_subject_name,c_room,c_description,i_branch_id,c_status,c_type,c_created_by,c_updated_by,i_subject_id,i_class_id,i_section_id};
        this.props.editClass(this.props.subjects.i_subject_id,subject_id);
        localStorage.setItem('myData', "update_success");
        window.location.href = "/subjects";
      
       
    };

    render() {
        


        return (
            <AUX>
            <div className = 'card card-body mt-4 mb-4'>
               
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <div className = "form-group">
                        <label>Subject Name</label>
                        <span style={{color:"red"}}>*</span>
                        <input
                            className = "form-control"
                            type = "text"
                            required
                            name = "i_subject_name"
                            defaultValue = {this.props.subjects.i_subject_name}
                            onChange = {this.onChange}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Decription</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_description"
                            onChange = {this.onChange}
                            defaultValue = {this.props.subjects.c_description}
                            />
                    </div>
                   
                    <div className = "form-group">
                        <label>Type</label>
                        <select class="form-control" onChange={this.onChange} name="c_type">
                        <option value="{this.props.subjects.c_type}">{this.props.subjects.c_type}</option>
                            <option value="Optional">Optional</option>
                            <option value="Mandate">Mandate</option>
                        </select>
                    </div>
                    <div className = "form-group">
                        <button type = "submit" className = "btn btn-success">
                            Submit
                        </button>
                        &nbsp;&nbsp;
            <a href="/subjects" className="btn btn-secondary">
              Cancel
            </a>
                    </div>
                </form>
            </div>
            </AUX>
        )
    }
}

const mapStateToProps = state =>({
    subjects:state.subjects.subjects //state.infra(this is from reducer).infra
  });

export default connect(
  mapStateToProps,
  {getClassById,editClass})
  (withRouter(SubjectsEditForm));