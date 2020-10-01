import React,{Component,Fragment} from "react"
import {withAlert} from "react-alert";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

export class Alerts extends Component {

	static propTypes = {
		error:PropTypes.object.required,
		message:PropTypes.object.required
	}
	componentDidUpdate(prevProps) {
		const {error,alert,message} = this.props;
		 if(error!==prevProps.error)
		 {
		 	if(error.msg.non_field_errors)
		 	alert.error("Invalid Login Credentials");

		 	if(error.msg.username)
		 	alert.error(error.msg.username);


		 	if(error.msg.password)
		 	alert.error(error.msg.password);

		 	if(error.msg.email)
		 	alert.error(error.msg.email);
		 }
		if(message!==prevProps.message)
		{
			if(message.msg) alert.success(message.msg);


		}

	}
	render(){
		return <Fragment />;
	}
}

const mapStateToProps = state => ({
error : state.errors,
message : state.messages

});

export default connect(mapStateToProps)(withAlert()(Alerts));