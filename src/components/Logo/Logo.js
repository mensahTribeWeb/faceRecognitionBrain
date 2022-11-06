import React from "react";
import './Logo.css';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div ma4 mt0>
      <Tilt >
        <div className="Tilt br2 shadow-2"  options={{max:55}} style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen'}}>
          <h1 className="Tilt-inner"> 👀</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;