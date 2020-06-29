import React from 'react'; 
import { Link } from 'react-router-dom'; 

import MainHeader from './MainHeader'; 
import NavLinks from './NavLinks'; 
import './MainNavigation.css'; 

const MainNavigation = props => {
    return (
        <React.Fragment>
            <MainHeader>
                <h1 className="main-nav_title">
                    <Link to="">My_Ride</Link>
                </h1>
                <nav className="main-nav_header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    ); 
}; 

export default MainNavigation;