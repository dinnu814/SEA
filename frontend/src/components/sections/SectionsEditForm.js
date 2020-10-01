import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editSection,getSectionById } from '../../store/actions/sectionAction';
import AUX from '../../hoc/Aux_';
import { withRouter } from 'react-router-dom';


export class SectionEditForm extends Component {
  constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        //this.onChange2 = this.onChange2.bind(this);
    
      }

    

    componentDidMount() {
        
        const secId = this.props.match.params.section_id
        this.props.getSectionById(secId)

    }

    onChange = e => this.props.sections[e.target.name]=e.target.value ;
   // onChange2 = e => this.props.classd[e.target.name]=e.target.files[0] ;
        
    onSubmit = e => {

        e.preventDefault();
        const {c_section_name,c_room,c_description,i_branch_id,i_class_id,c_status,c_created_by,c_updated_by} = this.props.sections;
        const secId = { c_section_name,c_room,c_description,i_branch_id,i_class_id,c_status,c_created_by,c_updated_by };
        console.log(secId);
        this.props.editSection(this.props.sections.i_section_id,secId);
        localStorage.setItem('myData', "update_success");
        window.location.href = "/sections";
      
       
    };

    render() {
        


        return (
            <AUX>
            <div className = 'card card-body mt-4 mb-4'>
               
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <div className = "form-group">
                        <label>Section</label>
                        <span style={{color:"red"}}>*</span>
                        <input
                            className = "form-control"
                            type = "text"
                            required
                            name = "c_section_name"
                            defaultValue = {this.props.sections.c_section_name}
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
                            defaultValue = {this.props.sections.c_room}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_description"
                            onChange = {this.onChange}
                            defaultValue = {this.props.sections.c_description}
                            />
                    </div>
        
                    <div className = "form-group">
                        <label>Parent Branch</label>
                        <select class="form-control" onChange={this.onChange}>
                            <option value={this.props.sections.i_branch_id}>{this.props.sections.i_branch_id}</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div className = "form-group">
                        <label>Status</label>
                        <select class="form-control" onChange={this.onChange} name="c_status">
                            <option value={this.props.sections.c_status}>{this.props.sections.c_status}</option>
                            <option value="Active">Active</option>
                            <option value="In-Active">In-Active</option>
                        </select>
                    </div>
                    <div className = "form-group">
                        <button type = "submit" className = "btn btn-success">
                            Submit
                        </button>
                        &nbsp;&nbsp;
            <a href="/sections" className="btn btn-secondary">
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
    sections:state.sections.sections //state.infra(this is from reducer).infra
  });

export default connect(
  mapStateToProps,
  {getSectionById,editSection})
  (withRouter(SectionEditForm));