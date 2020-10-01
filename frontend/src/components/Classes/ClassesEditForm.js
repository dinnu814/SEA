import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editClass,getClassById } from '../../store/actions/classAction';
import AUX from '../../hoc/Aux_';
import { withRouter } from 'react-router-dom';


export class ClassesEditForm extends Component {
  constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
       // this.onChange2 = this.onChange2.bind(this);
    
      }

    

    componentDidMount() {
        
        const classId = this.props.match.params.class_id
        this.props.getClassById(classId)

    }

    onChange = e => this.props.classes[e.target.name]=e.target.value ;
   // onChange2 = e => this.props.classd[e.target.name]=e.target.files[0] ;
        
    onSubmit = e => {

        e.preventDefault();
        const {c_class_name,c_room,c_description,c_logo,i_branch_id,c_status,c_created_by,c_updated_by} = this.props.classes;
        const classd = { c_class_name,c_room,c_description,c_logo,i_branch_id,c_status,c_created_by,c_updated_by };
        this.props.editClass(this.props.classes.i_class_id,classd);
        localStorage.setItem('myData', "update_success");
        window.location.href = "/classes";
      
       
    };

    render() {
        


        return (
            <AUX>
            <div className = 'card card-body mt-4 mb-4'>
               
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <div className = "form-group">
                        <label>Class Name</label>
                        <span style={{color:"red"}}>*</span>
                        <input
                            className = "form-control"
                            type = "text"
                            required
                            name = "c_class_name"
                            defaultValue = {this.props.classes.c_class_name}
                            onChange = {this.onChange}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Room</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_room"
                            onChange = {this.onChange}
                            defaultValue = {this.props.classes.c_room}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_description"
                            onChange = {this.onChange}
                            defaultValue = {this.props.classes.c_description}
                            />
                    </div>
                   
                    <div className = "form-group">
                        <label>Status</label>
                        <select class="form-control" onChange={this.onChange} name="c_status">
                        <option value="{this.props.classes.c_status}">{this.props.classes.c_status}</option>
                            <option value="Active">Active</option>
                            <option value="In-Active">In-Active</option>
                        </select>
                    </div>
                    <div className = "form-group">
                        <button type = "submit" className = "btn btn-success">
                            Submit
                        </button>
                        &nbsp;&nbsp;
            <a href="/classes" className="btn btn-secondary">
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
    classes:state.classes.classes //state.infra(this is from reducer).infra
  });

export default connect(
  mapStateToProps,
  {getClassById,editClass})
  (withRouter(ClassesEditForm));