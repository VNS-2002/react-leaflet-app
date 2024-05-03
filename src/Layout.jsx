// import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import "./Layout_style.css";
const Layout = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400" : ""}`}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/password"
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400" : ""}`}
            >
              Password Generator
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400" : ""}`}
              to="/contact"
            >
              Contact Page
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400" : ""}`}
              to="/login"
            >
              Login Page
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400" : ""}`}
              to="/profile"
            >
              Profile Page
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400" : ""}`}
              to="/todo"
            >
              To Do{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400" : ""}`}
              to="/map"
            >
              Leaflet + React{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => ` ${isActive ? "bg-cyan-400" : ""}`}
              to="/currency converter"
            >
              Currency Converter{" "}
            </NavLink>
          </li>
          {/* <li>

              <NavLink className={({ isActive }) => 
            ` ${isActive ? "bg-cyan-400" : ""}`} to="/redux-todo">Todos with Redux</NavLink>
            </li> */}
          <li>
            <a
              href="https://reactrouter.com/en/main/routers/router-provider"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router Documentation
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
