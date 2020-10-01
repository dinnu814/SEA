import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editClass,getHobbyById } from '../../store/actions/hobbyAction';
import AUX from '../../hoc/Aux_';
import { withRouter } from 'react-router-dom';


export class HobbyEditForm extends Component {
  constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
       // this.onChange2 = this.onChange2.bind(this);
    
      }

    

    componentDidMount() {
        
        const hobby_id = this.props.match.params.hobby_id
        this.props.getHobbyById(hobby_id)

    }

    onChange = e => this.props.hobbies[e.target.name]=e.target.value ;
   // onChange2 = e => this.props.classd[e.target.name]=e.target.files[0] ;
        
    onSubmit = e => {

        e.preventDefault();
        const {c_hobby_name,c_description,i_branch_id,c_status,c_created_by,c_updated_by,i_hobby_id} = this.props.hobbies;
        const hobby_id = { c_hobby_name,c_description,i_branch_id,c_status,c_created_by,c_updated_by,i_hobby_id};
        this.props.editClass(this.props.hobbies.i_hobby_id,hobby_id);
        localStorage.setItem('myData', "update_success");
        window.location.href = "/Hobbies";
      
       
    };

    render() {
        


        return (
            <AUX>
            <div className = 'card card-body mt-4 mb-4'>
               
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <div className = "form-group">
                        <label>Hobbies Name</label>
                        <span style={{color:"red"}}>*</span>
                        <input
                            className = "form-control"
                            type = "text"
                            required
                            name = "c_hobby_name"
                            defaultValue = {this.props.hobbies.c_hobby_name}
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
                            defaultValue = {this.props.hobbies.c_description}
                            />
                    </div>
                   
                    <div className = "form-group">
                        <button type = "submit" className = "btn btn-success">
                            Submit
                        </button>
                        &nbsp;&nbsp;
            <a href="/Hobbies" className="btn btn-secondary">
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
    hobbies:state.hobbies.hobbies //state.infra(this is from reducer).infra
  });

export default connect(
  mapStateToProps,
  {getHobbyById,editClass})
  (withRouter(HobbyEditForm));