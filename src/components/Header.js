import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate(); 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              E-commerce
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/cart'}>
                  Cart
                </Link>
              </li>
            </ul>
              <button onClick={() => {navigate('login')}} className="btn btn-primary" type="submit">
                Login
              </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
