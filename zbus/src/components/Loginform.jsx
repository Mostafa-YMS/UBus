import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const Loginform = (props) => {
  let { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleMode = () => {
    navigate("/register");
  };

  const handleMode1 = () => {
    navigate("/driverlogin");
  };

  const confirmer = (e) => {
    e.preventDefault();
    const p1 = document.getElementById("user").value;
    const p2 = document.getElementById("pass").value;
    if (p1 && p2) {
      loginUser(p1, p2);
    } else {
      document.getElementById("announce1").innerHTML =
        "Enter Username and Password";
    }
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <small id="announce1" style={{ color: "darkred" }}></small>
      <form onSubmit={confirmer} id="loginform">
        <div className="form-group m-3">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Username"
            id="user"
          />
        </div>
        <div className="form-group m-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            id="pass"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-3"
          style={{ width: "94%" }}
        >
          Login
        </button>
      </form>
      <hr />
      <div className="p-20 m-6">
        <p className="d-inline">New to Ubus ?</p>
        <button
          type="button"
          className="btn btn-link"
          style={{ fontSize: "14pt" }}
          onClick={handleMode}
        >
          Create an account
        </button>
      </div>
      <div className="m-6">
        <p className="d-inline"> Login as a </p>
        <button
          type="button"
          className="btn btn-link"
          style={{ fontSize: "14pt" }}
          onClick={handleMode1}
        >
          driver ?
        </button>
      </div>
    </div>
  );
};
