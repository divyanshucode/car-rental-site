import React from "react";
import mark from "../images/icons/gps.png";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl from "!mapbox-gl";
// import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

// mapboxgl.workerClass = MapboxWorker;
const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 31.5304,
    longitude: 74.3487,
    width: "100vw",
    height: "80vh",
    zoom: 12,
  });
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2
        style={{
          color: "white",
          marginBottom: "5rem",
          display: "block",
          fontWeight: "700",
        }}
      >
        OUR <span style={{ color: "#00ffffdf" }}>LOCATION</span>
      </h2>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibnVtYW5hbmVlcyIsImEiOiJja3kwMWExZmcwYTBuMnFxZGMwc2VtNngzIn0.AdcyN5u-Ab22UUFSYcaz8g"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle={"mapbox://styles/numananees/cky01qc5u382o14l5u46kvve1"}
      >
        <Marker latitude={19.0893148} longitude={72.8872063}>
          <div className="marker">
            <a
              href="https://www.google.com/maps/place/Mumbai,+Maharashtra+400086/@19.0911792,72.9041546,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7c7d47af7c06f:0xdb484e80a95d21d2!8m2!3d19.0893148!4d72.9078057!16s%2Fm%2F0jvfyfp?entry=ttu"
              target="_blank"
            >
              <img
                src={mark}
                alt="Our Location"
                style={{ height: "50px", width: "48px" }}
              />
            </a>
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
