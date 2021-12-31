import { useNavigate } from "react-router-dom";
import React from "react";
import img from "../img/1.jpeg";

const Home = (props) => {
  props.setBackGround(img)

  const driverLog = () => {
    navigate("/driverlogin");
  };
  const navigate = useNavigate();
  const Reg = () => {
    navigate("/register");
  };
  const Log = () => {
    navigate("/Login");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p style={{ color: "white", fontSize: "50pt" }}> UBus</p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1
        style={{
          color: "#ffffff",
          textAlign: "center",
          fontFamily: "-moz-initial",
        }}
      >
        We take you throuh the ultimate journey
      </h1>
      <br></br>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-light"
          onClick={Log}
          style={{ width: "150px", margin: "10px" }}
        >
          Login
        </button>
        <button
          className="btn btn-secondary"
          onClick={Reg}
          style={{ width: "150px", margin: "10px" }}
        >
          Register
        </button>
        <button
          className="btn btn-dark"
          onClick={driverLog}
          style={{ width: "150px", margin: "10px" }}
        >
          Login as Driver
        </button>
      </div>
    </div>
  );
};

export default Home;
