
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logout} from '../../store/actions/auth';
import {withRouter} from 'react-router-dom';


export class Logout extends Component {
    
  
    componentDidMount()
	{
        this.props.logout()
        this.props.history.push('/login');  
	}




render()
{
    return "Successfully Logged Out.";
}	
    
       
};



const mapStateToProps = state => ({
	token:state.token.token
});


export default connect(mapStateToProps,{ logout })(withRouter(Logout));

