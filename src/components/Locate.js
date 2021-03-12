import React from 'react';
import "../assets/styles.css"
import compass from "../assets/compass.svg"

const Locate = (props) => {
  
 
  
  return (
    <>
      <button
      className="locate"
      onClick={props.clickMyPosition}>
      <img src={compass} alt="compass" />
    </button>
    </>
  );
}

export default Locate;
