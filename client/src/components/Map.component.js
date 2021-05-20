import * as React from "react";
import ReactMapGL from "react-map-gl";

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 31.7782568,
    longitude: 35.23158275924868,
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
