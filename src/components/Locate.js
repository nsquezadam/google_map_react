import React from 'react';
import "../assets/styles.css"
import compass from "../assets/compass.svg"

const Locate = ({panTo}) => {
  
  const handleClickCurrentPosition = () =>{
    console.log('boton para volver a la misma posicion')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(position.coords.latitude)
      },
   
      () => null
    )
  }
  
  
  return (
    <>
      <button
      className="locate"
      onClick={handleClickCurrentPosition}>
      <img src={compass} alt="compass" />
    </button>
    </>
  );
}

export default Locate;
