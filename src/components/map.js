import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import "../App.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = { lat: 30.0444, lng: 31.2357 };
  return (
    <div className="Map">
      {!isLoaded ? (
        <h3>Loading.....</h3>
      ) : (
        <GoogleMap
          mapContainerClassName="map_container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default Map;
