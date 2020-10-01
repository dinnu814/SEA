import React, { Component } from 'react';
import AUX from '../../hoc/Aux_';

 
 
class Loggedin extends Component {
    render() {
        return (
        <AUX>
            		   {/*Page header*/}
						{/*<div class="page-header">
							<div class="page-leftheader">
								<h4 class="page-title">Congratulations you are successfully logged in.</h4>
							</div>
		</div>*/}
						{/*End Page header*/}


						{/*Row*/}
					
			 <div className='container grid'>
			 <div class="col-lg-12 col-xs-12">
			 <div class="col-lg-3 col-md-3 col-xs-12">
			 <div className='left-bar'>
			 <i class="fa fa-user" aria-hidden="true"></i><h3>User Details</h3>
				 <ul class="sidebar-submenu in">

<li><a href="#"><i class="fa fa-arrow-right" aria-hidden="true"></i>Logistics</a></li>
</ul>
</div>
			 </div>
			 <div class="col-lg-9 col-md-9 col-xs-12 float-right">
				 <div class="row">
				 <div class="col-md-6 col-xl-3">
					 <div class="widget-rounded-circle card-box">
						 <div class="row">
							 <div class="col-6">
							 <i class="fa fa-male" aria-hidden="true"></i>
							 </div>
							 <div class="col-6">
								 <div class="text-right">
									 <h3 class="mt-1 text-dark">Professors</h3>
									 <p class="text-muted mb-1 text-truncate">40</p>
								 </div>
							 </div>
						 </div> 
					 </div>
				 </div>

				 <div class="col-md-6 col-xl-3">
					 <div class="widget-rounded-circle card-box">
						 <div class="row">
							 <div class="col-6">
							 <i class="fa fa-user-o" aria-hidden="true"></i>
							 </div>
							 <div class="col-6">
								 <div class="text-right">
									 <h3 class="text-dark mt-1">Staff</h3>
									 <p class="text-muted mb-1 text-truncate">200</p>
								 </div>
							 </div>
						 </div>
					 </div> 
				 </div>

				 <div class="col-md-6 col-xl-3">
					 <div class="widget-rounded-circle card-box">
						 <div class="row">
							 <div class="col-6">
							 <i class="fa fa-book" aria-hidden="true"></i>
							 </div>
							 <div class="col-6">
								 <div class="text-right">
									 <h3 class="text-dark mt-1">Departments</h3>
									 <p class="text-muted mb-1 text-truncate">6</p>
								 </div>
							 </div>
						 </div> 
					 </div> 
				 </div> 

				 <div class="col-md-6 col-xl-3">
					 <div class="widget-rounded-circle card-box">
						 <div class="row">
							 <div class="col-6">
							 <i class="fa fa-phone" aria-hidden="true"></i>
							 </div>
							 <div class="col-6">
								 <div class="text-right">
									 <h3 class="text-dark mt-1">Contacts</h3>
									 <p class="text-muted mb-1 text-truncate">Email-Id</p>
								 </div>
							 </div>
						 </div> 
					 </div> 
				 </div> 
			 </div>
			 </div>
				 </div>
				 </div>
				
		</AUX>
)
    }
}
export default Loggedin;