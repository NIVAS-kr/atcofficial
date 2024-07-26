// ServiceButtons.js
import React from 'react';
import './ServiceButtons.css';
import { FaWifi, FaGlobe, FaEthernet, FaSignal, FaServer, FaPhone } from "react-icons/fa";  // Ensure this path is correct

const ServiceButtons = ({ setActiveService }) => {
  const buttons = [
    { target: "#tab-pane-1", icon: <FaWifi className="service-icon" />, label: "Managed Internet Lines" },
    { target: "#tab-pane-2", icon: <FaGlobe  className="service-icon"/>, label: "VPN" },
    { target: "#tab-pane-3", icon:<FaSignal  className="service-icon"/>, label: "SDWAN" },
    { target: "#tab-pane-4", icon: <FaEthernet  className="service-icon"/>, label: "Event Internet" },
    { target: "#tab-pane-5", icon: <FaServer  className="service-icon"/>, label: "Managed Broadband" },
    { target: "#tab-pane-6", icon: <FaPhone  className="service-icon"/>, label: "PRI Lines" },
  ];

  const handleButtonClick = (target) => {
    setActiveService(target);
  };

  return (
    <div className="service-button">
    {buttons.map(({ target, icon, label }) => (
      <button
        key={target}
        className="nav-link   new-1"
       
        data-bs-target={target}
        type="button"
        onClick={() => handleButtonClick(target)}
      >
       {typeof icon === 'string' ? <i  className= {`service-icon $ {icon}`} ></i> : icon}
        <h4 className="m-0">{label}</h4>
      </button>
    ))}
    
  </div>
  );
};

export default ServiceButtons;
