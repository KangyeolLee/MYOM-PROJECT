import React from 'react';
import './preloader.css';

const Preloader = () => {
  return (
    <li style={{backgroundColor: 'transparent'}} className="collection-item preloader">
      <div className="preloader-wrapper small active center">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left"><div className="circle"></div></div>
          <div className="gap-patch"><div className="circle"></div></div>
          <div className="circle-clipper right"><div className="circle"></div></div>
        </div>
      </div>
    </li>
  )
}

export default Preloader;