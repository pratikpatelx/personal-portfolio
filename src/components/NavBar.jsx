import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
function NavBar() {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
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
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li classNameName="nav-item">
                      <NavLink
                        className="nav-link active"
                        activeClassName="menu_active"
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/projects"
                        activeClassName="menu_active"
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/resume"
                        activeClassName="menu_active"
                      >
                        Resume
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
