import React from 'react';
import "./Vision.css"

function Vision() {
  return (
    <div className="visionall">
      <div className="visionwidth" >
        <h2 style={{fontSize:"40px",fontWeight:"500"}}>Our Vision</h2>
        <p>
          To become the Leader in the first choice partner in Telecommunication, technology transformation & enterprise services enabling people to communicate by hi-speed internet with maximum uptime for their business to grow.
        </p>
      </div>
      <div className="visionimg">
        <img className="visionimg1" src="https://atcinfocom.in/assets/img/vision.jpg" alt="ATC Infocom" />
      </div>
    </div>
  );
}

export default Vision;

