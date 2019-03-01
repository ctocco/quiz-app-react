import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        QUIZ-APP
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="teacher">
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="student">
              Quiz
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
