import React from 'react';
import "../assets/styles.css"
import compass from "../assets/compass.svg"

const Locate = ({panTo}) => {
  return (
    <>
      <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src={compass} alt="compass" />
    </button>
    </>
  );
}

export default Locate;
