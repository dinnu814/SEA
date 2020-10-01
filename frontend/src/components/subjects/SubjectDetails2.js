import React from 'react'
import { connect } from "react-redux";
import { getSubject,getClassById,editClass,deleteClass } from '../../store/actions/subjectAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {ASSIGN_SUBJECT} from '../../store/actions/action';
import axios from 'axios';


class SubjectDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            subjects:[],
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
	static propTypes = {
        subjects : PropTypes.array.isRequired,
      getClass : PropTypes.func.isRequired,
      deleteClass : PropTypes.func.isRequired
  
      }
           
      componentDidMount()
      {
          this.props.getSubject();
         const classId = this.props.match.params.class_id;
            this.setState ({
                i_class_id: parseInt(classId)
            } )    
    }

  

    handleInputChange(event) {
        const target = event.target;
        var value = parseInt(target.value);
        if(target.checked){
           this.setState(prevState => ({
            subjects: [...prevState.subjects,
            {i_subject_id :value , i_class_id :this.state.i_class_id,i_section_id : 1,c_status: 'Active',
                c_created_by:"ADMIN",c_updated_by:"ADMIN" }]
          }));
           
           
        }
    }

    handleSubmit = (e) => {
     
        let data = this.state.subjects
        axios.post(`api/subject_assign_multi/`,data)
	.then(res => {
		dispatch({
			type : ASSIGN_SUBJECT,
			payload : res.data
		});
	}).catch(err => console.log(err));

        this.props.history.push('/classes');
        window.location.reload(false);
    }

    render(){
        return(
            <div>
                <div class="row">
                <div className="card">
           <div class="card-header text-center"><h4>Assign SUbjects</h4> <div className="assign-btn">
    <Link to={`/viewsubjects/${this.props.match.params.class_id}`}  className="btn btn-secondary">View Subjects</Link>
      </div></div> 
            <ul className='subject-list'>
            {this.props.subjects.map((sub) => (
            <li><span><input type="checkbox" id= {sub.i_subject_id} value={sub.i_subject_id} onChange={this.handleInputChange}/></span>{sub.i_subject_name}</li>
          ))}
            </ul>
        </div>
        <div class="form-row">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary" onClick={()=>this.handleSubmit()}>Submit</button>
                            </div>
                        </div>
                </div>
            </div>
        )  
    }
}

const mapStateToProps = state => ({
	subjects:state.subjects.subjects
});


export default connect(mapStateToProps,{ getSubject,getClassById,editClass,deleteClass})(withRouter(SubjectDetails));