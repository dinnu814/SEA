import React from "react"
import TaskList from "./SubjectsList"
import axios from 'axios';
import { connect } from 'react-redux';
import { addClass } from '../../store/actions/subjectAction';

export class ClassForm extends React.Component {
     
    state = {
        classList: [{i_subject_name: "", c_description: "", c_status: "Active", c_created_by: 'Admin',
        c_updated_by: 'Admin',c_type :"Optional",
        i_branch_id:1}]
    }
    

    handleChange = (e) => {
        if (["i_subject_name", "c_room", "c_description", "c_type"].includes(e.target.name)) {
            let classList = [...this.state.classList]
            classList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
          classList: [...prevState.classList, {i_subject_name: "", c_description: "", c_status: "Active", c_created_by: 'Admin',
          c_updated_by: 'Admin',c_type : "Optional",
          i_branch_id:1}],
        }));
    }

    deteteRow = (index) => {
        this.setState({
          classList: this.state.classList.filter((s, sindex) => index !== sindex),
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        let data = this.state.classList
        axios
        .post(`/api/subjectmulti/`,data)
        .then(res =>{
            dispatch({
                type:ADD_CLASS,
                payload:res.data
            });
        }).catch(err=>console.log(err));
    localStorage.setItem('myData', "add_success");
    window.location.href = "/subjects";
    }
    clickOnDelete(record) {
        this.setState({
          classList: this.state.classList.filter(r => r !== record)
        });
    }
    render() {
        let { classList } = this.state
        return (
            <div className="content">
               
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center"><h3 className="card-title">Subjects</h3></div>
                                <div className="card-body">
                            
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Subject Name <span style={{color:"red"}}>*</span></th>
                                                <th>Description</th>
                                                <th> Type</th>
                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} classList={classList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button>&nbsp;&nbsp;
            <a href="/subjects" className="btn btn-secondary">
              Cancel
            </a></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        )
    }

}
export default connect(null, { addClass })(ClassForm);