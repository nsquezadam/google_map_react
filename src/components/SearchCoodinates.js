import React, { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import Geocode from "react-geocode";


import "@reach/combobox/styles.css";
import "../assets/styles.css";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const SearchCoodinates = ({ panTo }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // <Combobox onSelect={async(latLng)=>{
  //   setValue(latLng, false);
  //   clearSuggestions()
  //   try {
  //     const results = await getGeocode({latLng})
  //     const {lat, lng} = await getLatLng(results[0])
  //    panTo({lat, lng})
  //    console.log(lat, lng)

  //    } catch (error) {
  //      console.log("mensaje error",error)
  //   }

  // }}>
  let lat = parseFloat(latitude);
  let lng = parseFloat(longitude);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(latitude, longitude);
    
  };

  // prueba browser 46.8071365,2.4060443
  //-33.4769256,-70.6028153
  const handleClickSearch = ()=> {
       panTo({lat, lng})
       
  }

  return (
    <div className="searchCoordinate">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder ="Ingresa Latitud"
        />
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder ="Ingresa Longitud"        
        />
        <button type="submit" onClick={handleClickSearch}>Buscar</button>
      </form>
    </div>
  );
};

export default SearchCoodinates;
