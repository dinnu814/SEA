import React, { Component } from "react";
import { connect } from "react-redux";
import { getSection,getSectionById,editSection,deleteSection } from '../../store/actions/sectionAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import { createMessage } from '../../store/actions/messageAction';

const Search = ({csecid}) => {
 
  const {i_section_id} = csecid;
  const [showResults, setShowResults] = React.useState(false)
  const toggle = () => setShowResults(!showResults)
  return (
    <div className="assign-btn">
      <input type="submit" value="Assign" onMouseOver={() => toggle(!showResults)} className="btn btn-primary" />
  { showResults ? <div className="assign-dp"><Link to={`/assignSubjectDetails/${i_section_id}`}>Subject </Link> <Link to={`/Hobbydetails/${i_section_id}`}>Hobby</Link></div> : null }
    </div>
  )
}

class SectionStructure extends React.Component {
	static propTypes = {
	  sections : PropTypes.array.isRequired,
    getSection : PropTypes.func.isRequired,
   deleteSection : PropTypes.func.isRequired

	}

	componentDidMount()
	{
		this.props.getSection();
    let data =  localStorage.getItem('myData');
    console.log(data);
    if(data=="add_success")
    {
      this.props.createMessage({msg:'Added Successfully'});
    }
    if(data=="update_success")
    {
      this.props.createMessage({msg:'Updated Successfully'});
    }
    localStorage.removeItem('myData');
	}


	render() {		
		return (
			<div>
            
    
            <div class="row">

              <div class="col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Sections</h3>

                    </div>
                    
      
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap table-primary mb-0">
                      <thead  class="bg-primary text-white">
                      
                        <tr >
                        <th class="text-white">Serial No</th>
                          <th class="text-white">Name</th>
                          <th class="text-white">Room</th>
                          <th class="text-white">Description</th>
                          <th class="text-white">Action</th>

                        </tr>
                      
                      </thead>
                      <tbody>
                      
                      {this.props.sections.map((classd,i) => (
                        <tr key={classd.i_section_id}>
<td>{i+1}</td>
                          <th scope="row">{classd.c_section_name}</th>
                          <td>{classd.c_room}</td>
                          <td>{classd.c_description}</td>
                          <td class="actions">
                            <Link to = {`/sectionedit/${classd.i_section_id}`}><i class="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteSection.bind(this,classd.i_section_id)}><i className="fa fa-trash"></i></span>
                            <Search csecid={classd}/>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
				
			</div>
		);
	}
}

const mapStateToProps = state => ({
	sections:state.sections.sections
});


export default connect(mapStateToProps,{ getSection,getSectionById,editSection,deleteSection,createMessage})(withRouter(SectionStructure));