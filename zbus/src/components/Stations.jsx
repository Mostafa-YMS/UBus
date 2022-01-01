import { Marker } from "react-map-gl";
import { useEffect, useState } from "react";
import { useStops } from "../hooks/linesStations.jsx";
import img from "../img/station.svg";

export const Stations = () => {
  const [busStations, setBusStations] = useState([]);
  const getstations = useStops();

  useEffect(() => {
    getstations().then(setBusStations);
  }, []);

  return (
    <>
      {busStations
        ? busStations.map((station) => (
            <Marker
              latitude={station.st_latitude}
              longitude={station.st_longitude}
              key={station.id}
              offsetLeft={-10}
              offsetTop={-10}
            >
              <img src={img} alt="station" />
              <p style={{ color: "white" }}> {station.station}</p>
            </Marker>
          ))
        : ""}
    </>
  );
};
