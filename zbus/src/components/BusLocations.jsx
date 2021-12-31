import { useGetDriver } from "./../hooks/getDriver";
import { Marker } from "react-map-gl";
import img from "../img/locationx.svg";
import { useState, useEffect } from "react";

export const BusLocations = (props) => {
  const getBuses = useGetDriver();
  const [buses, setBuses] = useState([]);
  const [counter, setCounter] = useState(0);
  
  setTimeout(() => {
    setCounter(counter + 0.0001);
  }, 5000);

  useEffect(() => {
    getBuses().then(setBuses);
  }, [counter, setBuses]);

  return (
    <>
      {buses
        ? buses.map((bus) => (
            <Marker
              latitude={bus.latitude}
              longitude={bus.longitude}
              key={bus.pk}
            >
              <img src={img} alt={bus.name}/>
              <p style={{ color: "white" }}>{bus.name}</p>
            </Marker>
          ))
        : ""}
    </>
  );
};
