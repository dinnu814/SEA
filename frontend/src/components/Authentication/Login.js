import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authLogin} from '../../store/actions/auth';
import {Link,withRouter} from 'react-router-dom';


export class LoginForm extends Component {
    state = {
        username: '',
        password:'',
      };
    
 
 
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  
  onSubmit = (e) => {
    e.preventDefault();
    const {username,password} = this.state;
    
    console.log(username,password)
    this.props.authLogin(username,password)
    //console.log("token",localStorage.gtItem('token'))
    //this.props.history.push('/index'); 
    

  };

  


  render() {

    let errorMessage = null;
    if(this.props.error)
{

    errorMessage = (
        <p>{this.props.error.message}</p>
    )
}   
    return (
    <div> {errorMessage}
      <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>UserName</label>
            <span style={{color:"red"}}>*</span>
            <input
              className="form-control"
              type="text"
              required
              name="username"
              onChange={this.onChange}
              value={this.state.username}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <span style={{color:"red"}}>*</span>
            <input
              className="form-control"
              type="password"
              required
              name="password"
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Login  
            </button>
               <br />
               <br />Not Yet Registered? 
            <Link style = {{color:'blue',textDecorationStyle:'double'}} to = '/signup/'> SignUp here</Link>
        

          </div>
        </form>
      </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
	token:state.token.token
});


export default connect(mapStateToProps,{ authLogin })(withRouter(LoginForm));

