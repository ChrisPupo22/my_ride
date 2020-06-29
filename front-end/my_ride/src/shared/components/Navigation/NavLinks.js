import React from "react";
import { NavLink } from "react-router-dom";
import './NavLinks.css'; 

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="">
            Explore
        </NavLink>
      </li>
      <li>
          <NavLink to="">
              Sign-in/Create Account
          </NavLink>
      </li>
      <li>
          <NavLink to="">
              About 
          </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks; 