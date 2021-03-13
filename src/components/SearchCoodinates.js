import React, { useState } from "react";

import Geocode from "react-geocode";


import "@reach/combobox/styles.css";
import "../assets/styles.css";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const SearchCoodinates = ({panTo, markTo}) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('info del submit',latitude, longitude)
    
   
  };
  
console.log('info traida', latitude, longitude)
let lat = parseFloat(latitude);
let lng = parseFloat(longitude);
const handleClickSearch = ()=> {
    panTo({lat, lng})
    markTo({lat, lng})
    setLatitude("")
    setLongitude("")
}  

  

  return (
    <div className="searchCoordinate" >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={latitude}
          onChange={(e) => {
            setLatitude(e.target.value) 
            console.log(e.target.value)}}
          placeholder ="Ingresa Latitud"
        />
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder ="Ingresa Longitud"        
        />
        <button type="submit" onClick={handleClickSearch}  >Buscar</button>
      </form>
    </div>
  );
};

export default SearchCoodinates;
