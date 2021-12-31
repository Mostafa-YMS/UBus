import { Layer, Source } from "react-map-gl";
import { useCords } from "../hooks/linesStations.jsx";
import { useState, useEffect } from "react";

export const Lines = () => {
  const [cords, setCords] = useState([]);
  const getCords = useCords();

  useEffect(() => {
    getCords().then(setCords);
  }, []);
  let element = [];
  if (cords.length > 0) {
    for (let p = 0; p < cords.length; p++) {
      if (typeof cords[p].LineCords === "string") {
        let newelem = [];
        element = cords[p].LineCords.split("|");
        for (let i = 0; i < element.length; i++) {
          let x = element[i].split(",");
          let z = [];
          for (let y = 0; y < x.length; y++) {
            z.push(Number(x[y]));
          }
          newelem.push(z);
        }

        cords[p].LineCords = newelem;
      }
    }
  }

  return (
    <>
      {cords
        ? cords.map((cord) => (
            <Source
              key={cord.id}
              type="geojson"
              data={{
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: cord.LineCords,
                },
              }}
            >
              <Layer
                type="line"
                layout={{
                  "line-join": "round",
                  "line-cap": "round",
                }}
                paint={{
                  "line-color": cord.Color,
                  "line-width": 2,
                }}
              />
            </Source>
          ))
        : ""}
    </>
  );
};
