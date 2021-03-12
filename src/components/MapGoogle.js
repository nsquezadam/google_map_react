import React, {useState, useCallback, useRef } from 'react';
import { GoogleMap, 
        useLoadScript,
         Marker,
         InfoWindow 
        } from '@react-google-maps/api';

import mapStyles from '../mapStyle';
import {formatRelative} from 'date-fns'
import Search from './Search'
import Locate from './Locate';






const MapGoogle = (props) => {


const libraries=["places"]

const mapContainerStyle ={
   
  width: "100vw",
  height: "100vh",
} 

//-33.436884, -70.634395 
const center = {
  lat: -33.436884, 
  lng: -70.634395 ,  
}
console.log(center)
const options = {
  styles: mapStyles,
  disableDefaultUI:true,
  zoomControl:true,
}






 
  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)

  const onMapClick = useCallback((e)=>{
    setMarkers(current =>[...current,{
      lat:e.latLng.lat(),
      lng:e.latLng.lng(),
      time:new Date(),
    }]) 
  }, [])


  const mapRef = useRef();
  const onMapLoad =  useCallback((map) => {
      mapRef.current = map
    },[])
  const panTo = useCallback(({lat, lng}) => {
  
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(14)
    
  },[])  

  const {isLoaded, loadError } = useLoadScript({
   
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    
  })
  if(loadError) return  "Error loading Map";
  if(!isLoaded) return  "Loading Map";

  
  return (
    <>
    <Locate panTo={panTo}/>
    <Search panTo={panTo}/>
   
    <GoogleMap 
    mapContainerStyle={mapContainerStyle}
    zoom={10}
    center={center}
    options={options}
    onClick={onMapClick}
    onLoad={onMapLoad} >
   
      {markers.map((marker) => {
        return(
      <Marker 
      key={marker.time.toISOString()}
      position={{
        lat:marker.lat,
        lng:marker.lng,
      }}
      onClick={()=> 
        setSelected(marker)}  
      />)})}
      {selected ? (<InfoWindow 
      position={{lat: selected.lat, lng: selected.lng}}
      onCloseClick={()=>{
        setSelected(null);
      }} >
        <div>
          <h2>Info</h2>
          <p>Fecha {formatRelative(selected.time, new Date())}</p>
        </div>
      </InfoWindow>) : null}
    </GoogleMap>
    </>
  );
}

 

export default MapGoogle;
