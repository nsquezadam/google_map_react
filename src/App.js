import React from 'react';
import Map from './components/Map'
import key from './key.js';


//AIzaSyCGIRHlHQX_miCOxHGMs0I9G4gydRT3Eek

const App = (props) => {
  const apiKey = key.mapKeyApi
  const mapURl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;


  


  // useEffect(() => {

  //   return () => {
  //     setInitialCoordinates(InitialCoordinates)
      
  //   }
  // },[])


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



