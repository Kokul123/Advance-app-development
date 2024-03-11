// BoatHousePage.js
import React from 'react';
// import BoatCard from './BoatCard';  // Import BoatCard component
import './BoatHousePage.css';  // Import CSS for styling

import BoatCard from './BoatCard';
import Navbar from './navbar';

const boatsData = [
  // Sample data for 10 boats
  { id: 1, name: 'Boat 1', type: 'Sailboat', capacity: 4, image: 'boat1.jpg' },
  { id: 2, name: 'Boat 2', type: 'Speedboat', capacity: 6, image: 'boat2.jpg' },
  // Add more boats as needed
];

const BoatHousePage = () => {
  return (
    <>
    <Navbar/>
    <div className="boat-house-page" style={{marginLeft:'7%',width:'90%',display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
      
     <div style={{display:'flex',flexDirection:'row'}}>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1709890179/udupi_fnvogf.webp" name="sf" price="Starts at Rs.10999"/>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1709890164/goa_udwwxx.jpg" name="sf" price="Starts at Rs.9999"/>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1709890176/img9_klsuom.jpg"  name="sf" price="Starts at RS.8999"/>
     </div>
     <div style={{display:'flex',flexDirection:'row',marginTop:'3%'}}>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1709890174/img1_soj1nl.jpg" name="sf" price="Starts at Rs.5000"/>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1709890169/img5_vqmr45.jpg" name="sf" price="Starts at Rs.6999"/>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1709890188/img6_vaisil.jpg" name="sf" price="Starts at Rs.51000"/>
     </div>
     <div style={{display:'flex',flexDirection:'row',marginTop:'3%'}}>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1708415498/ali-kazal-olwmsBvJnkQ-unsplash_wvqhmo.jpg" name="sf" price="Starts at Rs.5000"/>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1708419597/fineas-anton-e6WRYia0VuQ-unsplash_qe5bcn.jpg" name="sf" price="Starts at Rs.6000"/>
     <BoatCard image="https://res.cloudinary.com/duhmcxwo3/image/upload/v1709890172/img8_jmuya2.jpg" name="sf" price="Starts at Rs.6000"/>
     </div>

  
     
    </div>
    </>
  );
};

export default BoatHousePage;
