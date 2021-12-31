import { useState, useEffect } from "react";
import { MainMap } from "../components";
import { useLines, useStops } from "../hooks/linesStations.jsx";
import { FlyToInterpolator } from "react-map-gl";
import { useDispatch } from "react-redux";
import { makePort } from "../reduxBus/action/creators";
import img from "../img/map2.png";

export const LinesStations = (props) => {
  props.setBackGround(img);

  const dispatch = useDispatch();

  const [stationsData, setStationsData] = useState([]);
  const getstations = useStops();

  useEffect(() => {
    getstations().then(setStationsData);
  }, []);

  const [linesData, setlinesData] = useState([]);
  const getlines = useLines();

  useEffect(() => {
    getlines().then(setlinesData);
  }, []);

  let x = "";
  let y = "";

  const [from, setfrom] = useState("");
  const [to, setto] = useState("");

  //  search function
  const show = () => {
    {
      (linesData.map((line) => {
        stationsData
          .filter((station) => station.line === line.id)
          .forEach((station) => {
            if (station.station === from) {
              x = line.line;
            }

            if (station.station === to) {
              y = line.line;
            }
          });
      }))
    }

    if (x === y) {
      {
        document.getElementById("line").innerHTML = "Take line : " + x;
      }
    } else {
      {
        document.getElementById("line").innerHTML = "There is no direct line ";
      }
    }
    if (from === "" || to === "") {
      {
        document.getElementById("line").innerHTML = "";
      }
    }

    if (from === to) {
      {
        document.getElementById("line").innerHTML =
          "please choose different Stations";
      }
    }
  };

  // stations function
  const [stationss, setstationss] = useState([
    { station: "please choose line " },
  ]);
  const xy = (e) => {
    const choose = linesData.filter((line) => line.line === e.target.value)[0];
    document.getElementById("dropdownMenu").innerHTML = choose.line
    

    {
      setstationss(
        stationsData.filter((station) => station.line === choose.id)
      );
    }
  };

  return (
    <div className="col">
      <div className="row">
        <div className="col-4 row justify-content-center align-self-center">
          <div className="dropdown m-3 d-inline">
            <button
              className=" dropdown-toggle   "
              className="btn btn-primary"
              type="button"
              id="dropdownMenu"
              data-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "150px", height: "50px" }}
            >
              Choose Line
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
              {linesData ? linesData.map((line) => (
                <button
                  className="dropdown-item"
                  type="button"
                  id={line.id}
                  key={line.id}
                  value={line.line}
                  onClick={xy}
                >
                  {line.line}
                </button>
              )):""}
            </div>
          </div>
          <div className="dropdown m-3 d-inline" style={{}}>
            <button
              className=" dropdown-toggle "
              className="btn btn-primary"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "150px", height: "50px" }}
            >
              Choose Station
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              {stationss ? stationss.map((station) => (
                <button
                  className="dropdown-item"
                  type="button"
                  key={station.id}
                  onClick={() => {
                    {
                      if (station.station !== "please choose line ") {
                        document.getElementById("dropdownMenu2").innerHTML = station.station
                        dispatch(
                          makePort({
                            latitude: station.st_latitude,
                            longitude: station.st_longitude,
                            zoom: 17,
                            pitch: 0,
                            bearing: 0,
                            transitionDuration: 1000,
                            transitionInterpolator: new FlyToInterpolator(),
                          })
                        );
                      }
                    }
                  }}
                >
                  {station.station}
                </button>
              )) : ""}
            </div>
          </div>

          <div className="">
            <hr />
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  from
                </label>
              </div>
              <select
                onChange={(e) => {
                  setfrom(e.target.value);
                }}
                className="custom-select"
                id="inputGroupSelect01"
              >
                <option selected>Choose Station</option>
                {stationsData ? stationsData.map((station) => (
                  <option key={station.id} value={station.station}>{station.station}</option>
                )) : ""}
              </select>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  to
                </label>
              </div>
              <select
                onChange={(e) => {
                  setto(e.target.value);
                }}
                className="custom-select"
                id="inputGroupSelect01"
              >
                <option selected>Choose Station</option>
                {stationsData ? stationsData.map((station) => (
                  <option key={station.id} value={station.station}>{station.station}</option>
                )) : ""}
              </select>
            </div>
            <button onClick={show} className="btn btn-primary">
              showLine
            </button>
            <br /> <br /> <br />
            <div
              className="card"
              style={{
                backgroundColor: "lightgrey",
                color: "black",
                width: "400px",
                height: "120px",
              }}
            >
              <h3
                style={{ marginTop: "40px", position: "absolute" }}
                id="line"
              ></h3>
            </div>
          </div>
        </div>
        <div className="col-8" style={{ width: "100vh", height: "93vh" }}>
          <MainMap />
        </div>
      </div>
    </div>
  );
};
