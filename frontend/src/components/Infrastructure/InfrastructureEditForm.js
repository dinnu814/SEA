import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editInfra,getInfraById } from '../../store/actions/infrastructureAction';
import AUX from '../../hoc/Aux_';
import { withRouter } from 'react-router-dom';
import { createMessage } from '../../store/actions/messageAction';



export class InfrastructureEditForm extends Component {
  constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        
    
      }
      state = {
        university:[],
    };

  static propTypes = {
    createMessage: PropTypes.func.isRequired,  

  };  

    componentDidMount() {
        
        const infraId = this.props.match.params.infra_id
        this.props.getInfraById(infraId)

       } 


    

    onChange = e => this.props.infra[e.target.name]=e.target.value ;
    onChange2 = e => this.props.infra[e.target.name]=e.target.files[0] ;

        
    onSubmit = e => {

        e.preventDefault();
        
        const {c_name,c_code,c_address,c_description,c_logo,i_university,c_status,c_created_by,c_updated_by} = this.props.infra;
        const infra = { c_name,c_code,c_address,c_description,c_logo,i_university,c_status,c_created_by,c_updated_by };
        this.props.editInfra(this.props.infra.i_infra_id,infra);
        localStorage.setItem('myData', "update_success");       
        window.location.href = "/infrastructure";
        
        
        
    };


    render() {
        let optionItems = this.state.university.map((item) =>
            
        <option key={item.i_infra_id} value={item.i_infra_id}>{item.c_name}</option>
    );
    

        return (
            <AUX>
            <div className = 'card card-body mt-4 mb-4'>
               
                <form onSubmit = {this.onSubmit.bind(this)}>
                    <div className = "form-group">
                        <label>University/Group/Branch Name</label>
                        <span style={{color:"red"}}>*</span>
                        <input
                            className = "form-control"
                            type = "text"
                            required
                            name = "c_name"
                            defaultValue = {this.props.infra.c_name}
                            onChange = {this.onChange}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Code</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_code"
                            onChange = {this.onChange}
                            defaultValue = {this.props.infra.c_code}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Address</label>
                        <input
                            className = "form-control"
                            type = "text"
                            name = "c_address"
                            onChange = {this.onChange}
                            defaultValue = {this.props.infra.c_address}
                            />
                    </div>
                    <div className = "form-group">
                        <label>Logo</label>
                        <input
                            className = "form-control"
                            type = "file"
                            name = "c_logo"
                                onChange = {this.onChange2}
                            /><img src = {this.props.infra.c_logo} height="30" width="30"/>
                    </div>
                    <div className = "form-group">
                        <label>Parent Branch</label>
                        <select class="form-control" onChange={this.onChange} name="i_university">
                            {
                                this.props.infra.i_university==0?
                                <option selected="selected" key ={this.props.infra.i_university} value={this.props.infra.i_university}></option>
                                :
                                 this.state.university.map(content => {
                              if(this.props.infra.i_university == content.i_infra_id)
                              {
                               return <option selected="selected" key={content.i_infra_id} value={content.i_infra_id}>{content.c_name}</option>
                            
                              }

                            })

                            }
                            {optionItems}

                        </select>
                    </div>
                    <div className = "form-group">
                        <button type = "submit" className = "btn btn-success">
                            Submit
                        </button>
                        &nbsp;&nbsp;
                        <a href="/infrastructure" className="btn btn-secondary">
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
    infra:state.infra.infra //state.infra(this is from reducer).infra
  });

export default connect(
  mapStateToProps,
  {getInfraById,editInfra,createMessage})
  (withRouter(InfrastructureEditForm));