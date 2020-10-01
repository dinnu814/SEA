import React, { Component } from "react";
import {Route,Redirect}    from 'react-router-dom' ;
import {connect} from "react-redux";

const token  = localStorage.getItem('token')
const PrivateRoute = ({ component : Component, token,...rest}) =>
     ( 
         <Route 
         {...rest}
         render = {props => {
             if(!token){
                 return <Redirect to = "/login" />;
             }
             else{
             return <Component {...props}/>;
             }
         }}
         />
    );


const mapStateToProps = state => ({
    token:state.token.token
});

export default connect(mapStateToProps)(PrivateRoute);