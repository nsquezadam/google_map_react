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
    
    setDataCoordinate({
        ...dataCoordinates,
        [e.target.name] : e.target.value
        
    })
    // console.log(typeof("tipo", e.target.value))
}
const enviarDatos = (e) => {
  e.preventDefault()
  console.log('enviando datos...' + parseFloat(dataCoordinates.latitude)  + ' ' + parseFloat(dataCoordinates.longitude)
  
  )};
 
// const latNumber = parseFloat(dataCoordinates.latitude) 
// const lngNumber = parseFloat(dataCoordinates.longitude) 
// console.log(typeof('nuevas const',latNumber, lngNumber));
// console.log(latNumber, lngNumber);
  return (
    <>
    <ContainerSearch>
      <Form onSubmit={enviarDatos}>
        
     
       <Input type="text" placeholder="Latitud"  onChange={handleInputChange} name="latitude"/>
       <Input type="text" placeholder="Longitud" onChange={handleInputChange} name="longitude"/>
       <Button type="submit">Buscar</Button>
       </Form>
      {/* <p>{dataCoordinates.latitude}</p>
      <p>{dataCoordinates.longitude}</p> */}
    </ContainerSearch>
   
    <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -33.436884, lng: -70.634395 }}
  >
    <Marker
      position={{ lat: parseFloat(dataCoordinates.latitude), lng:parseFloat(dataCoordinates.longitude)
          }}/>
    {/* <Marker
      position={{ lat: -33.436884, lng: -70.634395 }}
    /> */}
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
position:fixed;
top:2vh;
z-index:3;
`
const Form = styled.form`
width:50vw;
height:40px;
display:flex;
justify-content:center;
flex-wrap:nowrap;
align-content:center;
padding: 5px;
`

const Input = styled.input`
width:150px;
height:30px;
padding: 10px;
font-size:2rem;
margin:10px;
`

const Button = styled.button`
width:200px;
height:50px;
margin-top:10px;
padding: 10px;
background-color:var(--dark-blue);
color: var(--white);
`

export default  withScriptjs (
  withGoogleMap(
 Map
  )
) ;





