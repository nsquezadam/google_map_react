import React from 'react';
import Map from './components/Map'



const App = (props) => {

  const apiKey = "key=AIzaSyCGIRHlHQX_miCOxHGMs0I9G4gydRT3Eek";
  const mapURl = `https://maps.googleapis.com/maps/api/js?${apiKey}&v=3.exp&libraries=geometry,drawing,places`

  return (
   <>

   <Map 
   googleMapURL={mapURl}
   loadingElement={<p>Cargando...</p>}
   containerElement={<div style={{ height: `100vh` }} />}
   mapElement={<div style={{ height: `100%` }} />} 
    
    />
   </>
  );
}

export default App;



