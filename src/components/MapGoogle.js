import React from 'react';
import { GoogleMap, 
        useLoadScript,
        //  Marker,
        //  InfoWindow 
        } from '@react-google-maps/api';


// import {  Combobox,
//           ComboboxInput,  
//           ComboboxPopover,  
//           ComboboxList,  
//           ComboboxOption,  
//           ComboboxOptionText} from "@reach/combobox";
import "@reach/combobox/styles.css";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

// const libraries=["places"]

const   mapContainerStyle ={
  width: "50vw",
  heigth: "50vh",
}
const center = {
  lat: -33.436884, 
  lng: -70.634395,  
}
const MapGoogle = () => {

  const {isLoaded, loadError } = useLoadScript({
   
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    
  })
  if(loadError) return  "Error loading Map";
  if(!isLoaded) return  "Loading Map";

  
  return (
    <>
    <GoogleMap 
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={center}
    >
      
    </GoogleMap>
    </>
  );
}

export default MapGoogle;
