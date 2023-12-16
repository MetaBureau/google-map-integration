# Integrate Google Maps And AutoComplete Search

While working on one of my side projects, I've faced the challenge of integrating Google Maps into my application and allowing users to search for locations and add them to our database. I've named this feature "Select Your Location" in the form.

![Select your Location Feature](./images/image.png)

## Requirements

1. Set up a React Application: <br/>
   `npx create-react-app google-map-integration`
2. Google API key

   Note: Developer account on [Google Developer Console](https://console.cloud.google.com/) is required to access Maps JavaScript API

   - Login to your [Google Developer Console](https://console.cloud.google.com/) dashboard.
   - Create New Project.
     ![Create New Project Screen shot](./images/image-1.png)
   - Navigate to APIs & Services.
   - Then Credentials. Create Credentials.Select API Key
     ![Create Credentials screen shot](./images/image-3.png)

3. Maps JavaScript API

   - Go To Enable API & Services
   - Click Enable APIs And Services
     ![Enable APIs And Services screen shot](./images/image-4.png)
   - Search for Maps JavaScript API, Places API, Geocoding API, and enable all of them.

   > Note: Maps JavaScript API is free to use but you need to set up a billing account to get rid of the limitations and watermark that comes with it.

4. [react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api) library

   `npm i @react-google-maps/api`

   We are going to use this library to render google maps and use maps APIs.

## Start Implementation

### Implementation Steps

1. Render basic Google Maps
2. Add Google Map default Marker.
3. Add places autocomplete search.
4. handle selected address and get it's lat,lng values.

#### Rendering Google Maps

![Alt text](image.png)

Import GoogleMap, useLoadScript from [react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api) <br/>

1. Use 'useLoadScript' hook to load google maps api scripts.
2. GoogleMap Component to render Map itself or any others components related to maps.

Add Default rendering Google Map values this values are required

1. mapContainerClassName --> css class name that specifies height and width of maps.
2. center --> lat ,lng of center of the map in my case it's lat,lng for Cairo in Egypt.
3. zoom --> inital zoom of the map

**App.css**

```css
/* Container div height and width must be specified to run Maps Correctly */
.App {
  height: 100vh;
  width: 100vw;
}
.Map {
  height: 100vh;
  width: 100vw;
}
/* map container height and width to be provided to GoogleMaps Component */
.map_container {
  height: 100%;
  width: 100%;
}
```

**Map.js**

```javascript
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
```

**App.js**

```javascript
import "./App.css";
import Map from "./components/map";

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
```

#### Implementing Autocomplete Search

**To Be continue**

#### Customizing Autocomplete Search

**To Be continue**

#### Handling Selected Locations

**To Be continue**
