import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

import "../App.css";
function NavBar() {
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink exact className="navbar-brand" to="/">
              <strong className="name-color">Pratik Patel</strong>
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
                    to="/"
                  >
                    <AiOutlineHome style={{ marginBottom: "5px" }} />
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    <AiOutlineUser style={{ marginBottom: "5px" }} />
                    About
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/projects">
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "2px" }}
                    />
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/resume">
                    <CgFileDocument style={{ marginBottom: "2px" }} />
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
