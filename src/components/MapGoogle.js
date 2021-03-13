import React, {useState, useCallback, useRef } from 'react';
import { GoogleMap, 
        useLoadScript,
         Marker,
         InfoWindow 
        } from '@react-google-maps/api';

//import mapStyles from '../mapStyle';
import {formatRelative} from 'date-fns'
//import Search from './Search'
import Locate from './Locate';
import SearchCoodinates from './SearchCoodinates';
import greenMarked from '../assets/greenMarked.svg'
import redMarked from '../assets/redMarked.svg'
import yelowMarked from '../assets/yelowMarked.svg'






const libraries=["places"]
//-33.436884, -70.634395 
const center = {
  lat: -33.436884, 
  lng: -70.634395 ,  
}
console.log(center)
const options = {
  // styles: mapStyles,
  disableDefaultUI:true,
  zoomControl:true,
}


const MapGoogle = ({latitude, longitude}) => {

 


const mapContainerStyle ={
   
  width: "100vw",
  height: "100vh",
} 








  const [markers, setMarkers] = useState([])
  const [selected, setSelected] = useState(null)
  const [markedCurrentPosition, SetMarkedCurrentPosition] = useState({
          lat: "",
          lng: "",
  })
  const [searchedLocationMarker, setSearchedLocationMarker] = useState({
    lat: "",
    lng: "",
})
  
 
 

  const onMapClick = useCallback((e)=>{
    setMarkers(current =>[...current,{
      lat:e.latLng.lat(),
      lng:e.latLng.lng(),
      time:new Date(),
    }]) 
  }, [])


  const mapRef = useRef();
  const onMapLoad =  useCallback((map) => {mapRef.current = map},[])

  const panTo = useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng})
    mapRef.current.setZoom(18)
  },[])  

  const markTo = useCallback(({lat, lng})=>{
    
    setSearchedLocationMarker( {
      lat: lat,
      lng: lng,
  })

  },[])

  const {isLoaded, loadError } = useLoadScript({
   
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    
  })
  if(loadError) return  "Error loading Map";
  if(!isLoaded) return  "Loading Map";

  const handleClickCurrentPosition = () =>{

    console.log('boton para volver a la misma posicion')
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(position.coords.latitude, position.coords.longitude)
        SetMarkedCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      },
   
      () => null
    )
  }else{
    console.log("no soporta geolocalizacion")
  }
}
  

const position ={
    lat:markedCurrentPosition.lat,
    lng:markedCurrentPosition.lng,
  }


  return (
    <>

  
    <Locate clickMyPosition={handleClickCurrentPosition}/>
   
    {/* <Search panTo={panTo}/> */}
    <SearchCoodinates  panTo={panTo}  markTo={markTo}/>
   
    <GoogleMap 
    mapContainerStyle={mapContainerStyle}
    zoom={10}
    center={center}
    options={options}
    onClick={onMapClick}
    onLoad={onMapLoad} >
      
     <Marker 
     position={position}
     onClick={() => {
      setSelected(markedCurrentPosition);
    }}
    icon={{
      url: `${redMarked}`,
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(15, 15),
      scaledSize: new window.google.maps.Size(30, 30),
    }}
     />
      <Marker 
     position={{
      lat: searchedLocationMarker.lat,
      lng: searchedLocationMarker.lng,
}}
     onClick={() => {
      setSelected(searchedLocationMarker);
    }}
    icon={{
      url: `${yelowMarked}`,
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(15, 15),
      scaledSize: new window.google.maps.Size(30, 30),
    }}
     />
      {markers.map((marker) => {
        return(
      <Marker 
      onLoad={ marker => {
        console.log('marker: ', marker)
      }}
      key={marker.time.toISOString()}
      position={{
        lat:marker.lat,
        lng:marker.lng,
      }}
      onClick={()=> 
        setSelected(marker)}  
        icon={{
          url: `${greenMarked}`,
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
          scaledSize: new window.google.maps.Size(40, 40),
        }}
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
