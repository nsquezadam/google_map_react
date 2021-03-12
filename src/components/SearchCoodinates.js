// import React from 'react';
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import Geocode from "react-geocode";
// import {  Combobox,
//   ComboboxInput,  
//   ComboboxPopover,  
//   ComboboxList,  
//   ComboboxOption,  
//   ComboboxOptionText} from "@reach/combobox";

// import "@reach/combobox/styles.css";
// import "../assets/styles.css"


// Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

// const SearchCoodinates = () => {

//   // const {
//   //   ready, 
//   //   value, 
//   //   suggestions:{status, data},
//   //   setValue, 
//   //   clearSuggestions} 
//   //   = usePlacesAutocomplete({
//   //     requestOptions:{
//   //       location:{lat:()=>-33.436884, lng:() => -70.634395 },  
//   //        radius: 0,
//   //      },
//   //     })

//   const [lat, setLat] = useState(null);
//   const [lng, setLng] = useState(null);
//   const [status, setStatus] = useState(null);

// const getInfoAdressFronLatLng =  () => {
//   // const lat =  "48.8583701";
//   // const lng =  "2.2922926";

//   Geocode.fromLatLng(lat, lng).then(
//     (response) => {
//       const address = response.results[0].formatted_address;
//       let city, state, country;
//       for (let i = 0; i < response.results[0].address_components.length; i++) {
//         for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
//           switch (response.results[0].address_components[i].types[j]) {
//             case "locality":
//               city = response.results[0].address_components[i].long_name;
//               break;
//             case "administrative_area_level_1":
//               state = response.results[0].address_components[i].long_name;
//               break;
//             case "country":
//               country = response.results[0].address_components[i].long_name;
//               break;
//           }
//         }
//       }
//       console.log(city, state, country);
//       console.log(address);
//     },
//     (error) => {
//       console.error(error);
//     }
//   )
// }


    


   
//      return (
//        <div className="search">
//        <Combobox onSelect={(coordinates)=>{
//          console.log(coordinates)
//        }}>
//          <ComboboxInput 
//          value={value} 
//          onChange={(e)=> setValue(e.target.value)}
//          disabled={!ready} 
//          placeholder="Por Favor Ingrese una direccion"
         
//          />
//          <ComboboxPopover>
//            {status === "OK" && data.map(({id, description})=> (
//            <ComboboxOption  key={id} value={description} />))}
//          </ComboboxPopover>
//        </Combobox>
//        </div>
//      );
//    }

// export default SearchCoodinates;

