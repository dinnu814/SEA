
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import {Link} from 'react-router-dom';


export class SignupForm extends Component {
    state = {
        username: '',
        email:'',
        password1:'',
        password2:'',
      };
    
 
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  
  onSubmit = (e) => {
    e.preventDefault();
    
    const {username,email,password1,password2} = this.state;
    if(this.state.password1 == this.state.password2)
    {
    this.props.onAuth(username,email,password1)
    //this.props.history.push('/login');  
     } 
    else
    {
      alert("Passwords do not match")
    }
  
  
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
            <label>Email</label>
            <span style={{color:"red"}}>*</span>
            <input
              className="form-control"
              type="mail"
              required
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <span style={{color:"red"}}>*</span>
            <input
              className="form-control"
              type="password"
              required
              name="password1"
              onChange={this.onChange}
              value={this.state.password1}
            />
            </div>

            <div className="form-group">
            <label>Confirm Password</label>
            <span style={{color:"red"}}>*</span>
            <input
              className="form-control"
              type="password"
              required
              name="password2"
              onChange={this.onChange}
              value={this.state.password2}
            />
            </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              SignUp   
            </button>
               Already Registered? Then...  
            <Link style = {{color:'blue',textDecorationStyle:'double'}} to = '/login/'>  Login</Link>
        

          </div>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        error:state.error
    }
}

const mapDispatchToProps = dispatch => {

    return{
        onAuth:(username,email,password1) => dispatch(actions.authSignup(username,email,password1))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);
