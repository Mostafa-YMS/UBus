import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { DarkMode } from './DarkMode';

export const Navbar = (props) => {
  let { logOut } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          UBus
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="lines">
                Lines & Stops
              </NavLink>
            </li>
          </ul>

          <ul className="my-2 my-lg-0 navbar-nav ml-auto">
            <li className="nav-item">
              <DarkMode class="nav-link"/>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/chat">
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="" onClick={logOut}>
                logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
