import React, { useState } from "react";

import Geocode from "react-geocode";


import "@reach/combobox/styles.css";
import "../assets/styles.css";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const SearchCoodinates = ({ panTo }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  let lat = parseFloat(latitude);
  let lng = parseFloat(longitude);
console.log(lat, lng)

  const handleSubmit = (e) => {
    e.preventDefault();
    

    
  };

  // prueba browser 46.8071365,2.4060443
  //-33.4769256,-70.6028153
  //41.40326743940034, 2.1366637446188506
  const handleClickSearch = ()=> {
       panTo({lat, lng})
       setLatitude("")
       setLongitude("")
       
  }

  return (
    <div className="searchCoordinate" >
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
