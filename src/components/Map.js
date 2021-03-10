import React, {useState}from 'react';
import styled from 'styled-components';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


const Map = () => {
  const [ dataCoordinates, setDataCoordinate] = useState({
    latitude : '',
    longitude : ''
  })
  const handleInputChange = (e) => {
    console.log(e.target.name)
     console.log(e.target.value)
    setDataCoordinate({
        ...dataCoordinates,
        [e.target.name] : e.target.value
    })
}
 

  return (
    <>
    <ContainerSearch>
       <input type="text" placeholder="Latitud" name="Latitude"  onChange={(e)=>handleInputChange(e.target.value)}/>
       <input type="text" placeholder="Longitud" name="Longitude"  onChange={(e)=>handleInputChange(e.target.value)}/>
    </ContainerSearch>

    <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -33.436884, lng: -70.634395 }}
  >
    <Marker
      position={{ lat: -33.436884, lng: -70.634395 }}
    />
  </GoogleMap>
    </>
  );



}
const ContainerSearch = styled.div`
width:100vw;
height:20vh;
display:flex;
flex-direction: row;
justify-content:center;
align-items: center;
align-content:center;
`

export default  withScriptjs (
  withGoogleMap(
 Map
  )
) ;





