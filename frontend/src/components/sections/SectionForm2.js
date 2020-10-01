import React from "react"
import TaskList from "./sectionList"
import axios from 'axios';
import { connect } from 'react-redux';
import { addClass } from '../../store/actions/classAction';
import {Link,withRouter} from 'react-router-dom';


export class SectionFormMulti extends React.Component {



    state = {
        secList: [{c_section_name: "", c_description: "", c_room: "", c_status: "Active", c_created_by: 'Admin',
        c_updated_by: 'Admin',i_class_id:parseInt(this.props.match.params.class_id),i_branch_id:1}]
    }

    handleChange = (e) => {
        if (["c_section_name", "c_room", "c_description", "c_status"].includes(e.target.name)) {
            let secList = [...this.state.secList]
            secList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            secList: [...prevState.secList, {c_section_name: "", c_description: "", c_room: "", c_status: "Active", c_created_by: 'Admin',
            c_updated_by: 'Admin',i_class_id:parseInt(this.props.match.params.class_id),i_branch_id:1}],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            secList: this.state.secList.filter((s, sindex) => index !== sindex),
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.secList);
        let data = this.state.secList;
        
        axios
        .post(`/api/sectionmulti/`,data)
        .then(res =>{
            dispatch({
                type:GET_SECTION,
                payload:res.data
            });
        }).catch(err=>console.log(err));
    localStorage.setItem('myData', "add_success");
    window.location.href = "/sections";
    }
    clickOnDelete(record) {
        this.setState({
            secList: this.state.secList.filter(r => r !== record)
        });
    }
    render() {
        let { secList } = this.state
        return (
            <div>
    
            <div className="content">
               
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                       
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header text-center"><h3 className="card-title">Add Sections</h3>  <div className="assign-btn">
     <Link to={`/viewsections/${this.props.match.params.class_id}`}  className="btn btn-secondary">ViewSection</Link>
       </div></div>
                                <div className="card-body">
                    
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Section Name <span style={{color:"red"}}>*</span></th>
                                                <th className="required" >Room</th>
                                                <th>Descrption</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} secList={secList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </td></tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button>&nbsp;&nbsp;
            <a href="/sections" className="btn btn-secondary">
              Cancel
            </a></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
            </div>
        )
    }

}
export default connect(null, { addClass })(SectionFormMulti);