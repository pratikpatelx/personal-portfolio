import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../App.css";
function NavBar() {
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink exact className="navbar-brand" to="/">
              Pratik Patel
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-menu1"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-menu1">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/resume">
                    Resume
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
