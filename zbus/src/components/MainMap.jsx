import React from "react";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";
import { Stations } from "../components";
import { Lines } from "./Lines";
import { useDispatch, useSelector } from "react-redux";
import { makePort } from "../reduxBus/action/creators";
import { BusLocations } from "./BusLocations";
import mapboxgl from 'mapbox-gl';

export const MainMap = (props) => {
  const dispatch = useDispatch();
  const viewPort = useSelector((state) => state);

  const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: "10px",
  };
  const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: "10px",
  };
  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10,
  };

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibW9oYW1lZGFtaW4wMDAwMCIsImEiOiJja3gwZnJiazkwczRhMnJwenduZ2ZkN2x6In0.HafaYHRDf0lGzVMq3k318w";

  const positionOptions = { enableHighAccuracy: true };
 
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;



  return (
    <ReactMapGL
      {...viewPort}
      height="100%"
      width="100%"
      maxPitch={65}
      onViewportChange={(nextViewport) => dispatch(makePort(nextViewport))}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      // mapStyle="mapbox://styles/mapbox/streets-v8"
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto={props.auto}
      />
      <div style={{ position: "absolute", right: 30, top: 0, zIndex: 1 }}>
        <NavigationControl></NavigationControl>
      </div>
      <Stations />
      <BusLocations />
      <Lines />
      <FullscreenControl style={fullscreenControlStyle} />
      <ScaleControl style={scaleControlStyle} />
    </ReactMapGL>
  );
};
