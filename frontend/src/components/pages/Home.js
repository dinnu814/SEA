import React, { Component } from 'react';
import AUX from '../../hoc/Aux_';

 
 
class Home extends Component {
    render() {
        return (
        <AUX>
            		   {/*Page header*/}
						<div class="page-header">
							<div class="page-leftheader">
								<h4 class="page-title">Main Dashboard</h4>
							</div>
						</div>
						{/*End Page header*/}


						{/*Row*/}
						<div class="row">							
							<marquee><h1>Welcome To HoderSea</h1></marquee>						
						</div>

				
		</AUX>
)
    }
}
export default Home;