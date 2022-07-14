import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Newwsy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                  <Link class="nav-link" to="/general">
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
