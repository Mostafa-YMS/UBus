import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import DriverContext from "../context/DriverContext";

export const DriverLogin = (props) => {
  let { loginDriver } = useContext(DriverContext);

  const navigate = useNavigate();
  const handleMode = () => {
    navigate("/login");
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <form onSubmit={loginDriver}>
        <div className="form-group m-3">
          <small id="announceDriver" style={{ color: "darkred" }}></small>
          <label>{props.label}</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group m-3">
          <label>{props.label}</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
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
      <div className="m-6">
        <p className="d-inline"> Login as a </p>
        <button
          type="button"
          className="btn btn-link"
          style={{ fontSize: "14pt" }}
          onClick={handleMode}
        >
          User ?
        </button>
      </div>
    </div>
  );
};
