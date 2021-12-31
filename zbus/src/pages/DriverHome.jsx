import React, { useContext } from "react";
import DriverContext from "../context/DriverContext";
import { useDriver } from "../hooks/hookdriver";
import styles from "../styles/driverhome.module.css";
import img from "../img/map2.png";
import AuthContext from "../context/AuthContext";
import { useState, useEffect } from "react";
import { useOperating } from "../hooks/useOperating";
import { DarkMode } from '../components/DarkMode';

export const DriverHome = (props) => {
  props.setBackGround(img);

  const [bus, setBus] = useState(false);
  let { driver, isready } = useContext(DriverContext);
  let { logOut } = useContext(AuthContext);

  const [watching, setWatching] = useState(false);
  const driverupdate = useDriver();
  const operate = useOperating();
  useEffect(() => {
    operate(driver.bus_number).then((res) => setBus(res.data.operating));
  }, []);

  let start = () => {
    if (isready === true) {
      setBus(true);
      setWatching(
        navigator.geolocation.watchPosition(function(position) {
          if (position.coords.latitude !== "") {
            driverupdate({
              name: driver.bus_number,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              driver: driver.username,
            });
          } else {
            console.log("errorrrrr");
          }
        })
      );
    }
  };
  let end = () => {
    navigator.geolocation.clearWatch(watching);
    setWatching(false);
    setBus(false);
    fetch("http://127.0.0.1:8000/mapapi/delete/" + driver.bus_number + "/", {
      method: "DELETE",
    });
  };
  let logout = () => {
    end();
    logOut();
  };

  return (
    <div className="container mt-5" style={styles}>
      <DarkMode class="btn btn-dark"/>
      <a
        style={{ float: "right" }}
        href=""
        className="btn btn-danger"
        onClick={logout}
      >
        logout
      </a>
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4" className={styles.card}>
            <div className="text-center">
              <img
                src="https://i.imgur.com/bDLhJiP.jpg"
                width="100"
                className="rounded-circle"
                alt=""
              />
            </div>
            <div className="text-center mt-3">
              <h5 className="mt-2 mb-0">
                {isready ? driver.username : "drivername"}
              </h5>
              <span>Bus {driver.bus_number} driver</span>
              <div className="px-4 mt-1"></div>
              {isready ? (
                <ul className="list-group" className={styles.new}>
                  <div id="liDiv">
                  <li className="list-group-item" style={{color:"black"}}>
                    First Name:
                    <span className="badge"> {driver.first_name}</span>
                  </li>
                  <li className="list-group-item" style={{color:"black"}}>
                    Last Name:
                    <span className="badge"> {driver.last_name}</span>
                  </li>
                  <li className="list-group-item" style={{color:"black"}}>
                    Bus Number:
                    <span className="badge"> {driver.bus_number}</span>
                  </li>
                  </div>
                </ul>
              ) : null}
              {bus ? (
                <div className={styles.start}>
                  <button className="btn btn-primary px-4 " onClick={end}>
                    End
                  </button>
                </div>
              ) : (
                <div className={styles.start}>
                  <button className="btn btn-primary px-4" onClick={start}>
                    Start
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
