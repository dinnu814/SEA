import React, { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Alerts from '../components/Layout/Alerts';
import { Route,Switch } from 'react-router-dom';
import mainbuilder from './mainbuilder/mainbuilder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { render } from "react-dom";
import AUX from '../hoc/Aux_';
import {authCheckState} from '../store/actions/auth';



class App extends Component {

  componentDidMount(){
    this.props.authCheckState();
  }

  render() {
    let layout = null;
      layout = (
        
        <Layout topbar={this.props.topbar} footer = {this.props.footer}  loginpage={this.props.loginpage} token = {this.props.token}>
          <Switch>  
            <Route path="/" component={mainbuilder} />
            
          </Switch>
        </Layout>
        
      
        );
      
    return (
      
    
      <AUX>
        {layout}
        <Alerts />
      </AUX>
     
    );
  }
}
const mapStateToProps = state =>{
  return {
    
     topbar: state.ui_red.topbar,
     footer: state.ui_red.footer,
     loginpage:state.ui_red.loginpage,
     token:state.token.token
     
  };
}

export default withRouter(connect(mapStateToProps,{authCheckState})(App));










// import React, { Component } from 'react';
// import Layout from '../components/Layout/Layout';
// import { Route,Switch } from 'react-router-dom';
// import mainbuilder from '../containers/mainbuilder/mainbuilder';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { render } from "react-dom";
// import AUX from '../hoc/Aux_';
// import * as actions from '../store/actions/auth';

// class App extends Component {

//   componentDidMount(){
//     this.props.onTryAutoSignup();
//   }

//   render() {
//     let layout = null;
//       layout = (
//         <Layout topbar={this.props.topbar} footer = {this.props.footer}  loginpage={this.props.loginpage} isAuthenticated = {this.props.isAuthenticated}>
//           <Switch>  
//             <Route path="/" component={mainbuilder} />
//           </Switch>
//         </Layout>);
//     return (
    
//       <AUX>
//         {layout}
//       </AUX>
//     );
//   }
// }
// const mapStateToProps = state =>{
//   return {
    
//      topbar: state.ui_red.topbar,
//      footer: state.ui_red.footer,
//      loginpage:state.ui_red.loginpage,
//      isAuthenticated:state.token.token !== null
     
//   };
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () =>dispatch(actions.authCheckState())
//   }
// }

// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
