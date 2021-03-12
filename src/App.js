import React from 'react';
import MapGoogle from './components/MapGoogle'
// import styled from 'styled-components';




const App = () => {
  // const apiKey = key.mapKeyApi
  // const mapURl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;







  return (
   <>
    <MapGoogle/>
   {/* <Map 
   googleMapURL={mapURl}
   loadingElement={<p>Cargando...</p>}
   containerElement={<div style={{ height: `100vh` }} />}
   mapElement={<div style={{ height: `100%` }} />} 
    
    /> */}
   </>
  );
}




export default App;



