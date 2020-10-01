import React, { Component } from "react";
import { render } from "react-dom";
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';


class Header extends React.Component {
	render() {
		return (
			<AUX>
                {/*app header*/} 
                <div class="app-header header top-header">
                    <div class="container">
                        <div class="d-flex">
                        <a class="header-brand text-left" href="index.html">
                                <img src="../static/assets/images/brand/logo-hodersea.png" class="header-brand-img desktop-lgo" alt="Hodersea logo"/>
                                <img src="../static/assets/images/brand/logo1-hodersea.png" class="header-brand-img dark-logo" alt="Hodersea logo"/>
                             <img src="../static/assets/images/brand/favicon.png" class="header-brand-img mobile-logo" alt="Dashtic logo"/>
                                <img src="../static/assets/images/brand/favicon1.png" class="header-brand-img darkmobile-logo" alt="Dashtic logo"/>
                            </a>
                            <a id="horizontal-navtoggle" class="animated-arrow hor-toggle"><span></span></a>
                              {/* Horizontal-menu */}
                <div class="horizontal-main hor-menu clearfix">
                    <div class="horizontal-mainwrapper container clearfix">
                    {
                                    this.props.token ?
                        <nav class="horizontalMenu clearfix">
                            <ul class="horizontalMenu-list">
                                <li aria-haspopup="true">
                                    <a href="#" class="sub-icon">
                                        <svg class="hor-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>Infrastructure <i class="fa fa-angle-down horizontal-icon"></i>
                                     </a>
                                     <ul class="sub-menu">
                                     <li aria-haspopup="true"><Link to="/academic">Academic Year</Link></li>
                                     <li aria-haspopup="true"><Link to="/infrastructure">University/Group</Link></li>
                                     <li aria-haspopup="true"><Link to="/branch">Branch</Link></li>
                                     <li aria-haspopup="true"><Link to="/classes">Class</Link></li>
                                     <li aria-haspopup="true"><Link to="/subjects">Subjects</Link></li>
                                     <li aria-haspopup="true"><Link to="/Hobbies">HobbyClub</Link></li>
                                     <li aria-haspopup="true"><Link to="/student">Syllabus</Link></li>
                                     <li aria-haspopup="true"><Link to="/student">Timetable</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>: <div></div>
    }
    
                    </div>
                </div>
                            <div class="d-flex order-lg-2 ml-auto">
                                <a href="#" data-toggle="search" class="nav-link nav-link-lg d-md-none navsearch">
                                    <svg class="header-icon search-icon" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                    </svg>
                                </a>
                                <div class="mt-1">
                                    <form class="form-inline">
                                        <div class="search-element">
                                            <input type="search" class="form-control header-search" placeholder="Search…" aria-label="Search" tabindex="1"/>
                                            <button class="btn btn-primary-color" type="submit">
                                                <svg class="header-icon search-icon" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                                    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>{/* SEARCH */} 
                                 {
                                    this.props.token ?
                                    
                                    <Link class="dropdown-item d-flex" to="/logout">Logout</Link> 
                                    :
                                    <Link class="dropdown-item d-flex" to="/login">Login</Link>
                                 }
                            </div>
                        </div>
                    </div>
                </div>
                {/*/app header*/}
              
</AUX>
			
		);
	}
}export default Header;