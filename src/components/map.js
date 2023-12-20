import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "../App.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  const center = { lat: 30.0444, lng: 31.2357 };
  const onLoadMarker = (marker) => {
    // console.log("Marker lat", marker.position.lat());
    // console.log("Marker lng", marker.position.lng());
  };
  return (
    <div className="Map">
      {!isLoaded ? (
        <h3>Loading.....</h3>
      ) : (
        <>
          <PlacesAutoComplete />
          <GoogleMap
            mapContainerClassName="map_container"
            center={center}
            zoom={10}
          >
            <MarkerF position={center} onLoad={onLoadMarker} />
          </GoogleMap>
        </>
      )}
    </div>
  );
};

const PlacesAutoComplete = () => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({});

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const result = await getGeocode({ address }); //get geocoding object
    const { lat, lng } = await getLatLng(result[0]);
    console.log(`${address} Cordinates --> lat: ${lat} lng:${lng}`);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Select Your Location"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ description, place_id }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Map;
