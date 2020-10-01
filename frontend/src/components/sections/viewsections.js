import React, { Component } from "react";
import { connect } from "react-redux";
import {getSectionById,editSection,deleteSection } from '../../store/actions/sectionAction';
import { getSectionByClass } from '../../store/actions/sectionbyclassAction';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';



class ViewSection extends React.Component {
	static propTypes = {
	  //sections : PropTypes.array.isRequired,
  getSectionByClass : PropTypes.func.isRequired,
   deleteSection : PropTypes.func.isRequired

	}

	componentDidMount()
	{
    const classId = this.props.match.params.class_id
		this.props.getSectionByClass(classId);
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
                      
                      {this.props.sectionsclass.map((classd,i) => (
                        <tr >
                          <td>{i+1}</td>
                          <th scope="row">{classd.c_section_name}</th>
                          <td>{classd.c_room}</td>
                          <td>{classd.c_description}</td>
                          <td class="actions">
                            <Link to = {`/sectionedit/${classd.i_section_id}`}><i class="fa fa-pencil-square"></i></Link>&nbsp;&nbsp;
                            <span onClick={this.props.deleteSection.bind(this,classd.i_section_id)}><i className="fa fa-trash"></i></span>
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
	sectionsclass:state.sectionsclass.sectionsclass
});


export default connect(mapStateToProps,{ getSectionByClass,getSectionById,editSection,deleteSection})(withRouter(ViewSection));