import React from 'react';
import "./Ourmission.css"

function Mission() {
  return (
    <div className="missionall" >
      <div className="missionimg">
        <img  className="missionimg1" src="https://atcinfocom.in/assets/img/carousel-1.jpg" alt="ATC Infocom"  />
        
        
      </div>
      <div  className="missionwidth" >
      <h2 style={{fontSize:"40px",fontWeight:"500"}}>Our mission</h2>
        <p>
          ATC remarked the telecommunication sector and our mission is to cater all telecommunication support and services under one roof. We will provide the high-speed managed internet services in every location across India with required hardware. We focus on maintaining connectivity and security surveillance.
        </p>
        
        <p>
          We will establish and sustain a customer-centric organization through a state-of-the-art infrastructure and a team of professionals, to continuously develop, motivate and empower our people and to achieve profitable growth for our investors.
        </p>
      </div>
    </div>
  );
}

export default Mission;

