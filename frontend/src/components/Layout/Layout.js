import Aux from '../../hoc/Aux_';
import TopBar from './TopBar';
import Footer from './Footer';


import React, {Component } from 'react';
import { withRouter } from 'react-router-dom';

class layout extends Component {

    render() {
        return (
            <Aux>
            {!this.props.loginpage ?
                <main>
                    <div class="page">
                        <div class="page-main">
                    {this.props.topbar ? <TopBar {...this.props}/> : null}

                            <div class="app-content page-body">
                                <div class="container">                            
                                {this.props.children}
                                </div>
                            </div>{/* end app-content*/}
                        </div>{/* end page-main*/}
                    {this.props.footer ? <Footer /> : null}
                    </div>{/* end page*/}
                </main>:this.props.children} 
            </Aux> 
        );
    }
}

export default withRouter(layout);

