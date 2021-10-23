import React from 'react';
import Tilt from "react-tilt";
import logo from "./cool-apps.png";
import './logo.style.css';

const LogoComponent = () => {
    return (
     <div className='ma4 mt0'>
         <Tilt className="logo-box br2 shadow-2" options={{ max : 55 }} style={{ height: 80, width: 80 }} >
             <div className="Tilt-inner pa3">
                 <img style={{paddingTop: '5px'}} alt="9dapps" src={logo} />
             </div>
         </Tilt>
     </div>
    );
}

export default LogoComponent;