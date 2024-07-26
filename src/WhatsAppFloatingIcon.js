import React from 'react';
import './WhatsAppFloatingIcon.css';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

const WhatsAppFloatingIcon = () => {
  const handleWhatsAppClick = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=%2B918595913007&text&type=phone_number&app_absent=0";
  };

  return (
    <div className="whatsapp-floating-icon" onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppFloatingIcon;
