import * as React from "react";
import ReactMapGL from "react-map-gl";

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
      />
    </div>
  );
};
export default Map;
