// import React from 'react'
import {  NavLink } from "react-router-dom";
import "./Layout_style.css";
const Layout = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400 rounded-md" : ""}`}
              to="/home"
            >
              Home
            </NavLink>
          </li>
         
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400 rounded-md" : ""}`}
              to="/login"
            >
              Login Page
            </NavLink>
          </li>         
         
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400 rounded-md"  : ""}`}
              to="/map"
            >
              Leaflet + React{" "}
            </NavLink>
          </li>
          
          {/* <li>

              <NavLink className={({ isActive }) => 
            ` ${isActive ? "bg-cyan-400" : ""}`} to="/redux-todo">Todos with Redux</NavLink>
            </li> */}
          
        </ul>
      </div>
     
    </>
  );
};

export default Layout;
