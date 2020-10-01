import React from 'react'
import { connect } from "react-redux";
import axios from 'axios';
import { getHobby,getHobbyById,editClass,deleteClass } from '../../store/actions/hobbyAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {ASSIGN_HOBBY} from '../../store/actions/action';
import { useParams } from "react-router-dom";


class HobbyDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state  = {
            hobbies:[],
          }
          this.handleInputChange = this.handleInputChange.bind(this);
        }
	static propTypes = {
      hobbies : PropTypes.array.isRequired,
      getHobby : PropTypes.func.isRequired,
      deleteClass : PropTypes.func.isRequired
  
      }
     
      
      componentDidMount()
      {
          this.props.getHobby();
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
            hobbies: [...prevState.hobbies,
            {i_hobby :value , i_class_id :this.state.i_class_id,i_section_id : 1,c_status: 'Active',
                c_created_by:"ADMIN",c_updated_by:"ADMIN" }]
          }));
           
           
        }
          
    }
    

    handleSubmit = (e) => {
     
        let data = this.state.hobbies
        axios.post(`api/hobby_assign_multi/`,data)
	.then(res => {
		dispatch({
			type : ASSIGN_HOBBY,
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
           <div class="card-header text-center"><h4>Hobbies</h4> <div className="assign-btn">
    <Link to={`/viewhobbies/${this.props.match.params.class_id}`}  className="btn btn-secondary">View Hobbies</Link>
      </div></div> 
            <ul className='subject-list'>
            {this.props.hobbies.map((sub) => (
            <li><span><input type="checkbox" id= {sub.i_hobby_id} value={sub.i_hobby_id} onChange={this.handleInputChange}/></span>{sub.c_hobby_name}</li>
          ))}
            </ul>
        </div>
        <div class="form-row">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>
                </div>
            </div>
        )  
    }
}

const mapStateToProps = state => ({
    hobbies:state.hobbies.hobbies,
    hobbiesassign:state.hobbiesassign.hobbiesassign
});


export default connect(mapStateToProps,{ getHobby,getHobbyById,editClass,deleteClass})(withRouter(HobbyDetails));