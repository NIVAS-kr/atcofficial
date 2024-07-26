import React from 'react';
import ContactSection from '../../Navbar/contact/Contact';

import "./SecurityAndSurveillance.css";

const SecurityAndSurveillance = () => {
  return (
    <>
      <div className="top-heading-security">
        <h2>SECURITY & SERVEILLANCE</h2>
      </div>

      <div className="content-section-security">
        
          
            <div className="security-1">
            <div className="security-top">
              <h2 >Security & Surveillance</h2>
              <hr style={{width:"30%"}}/>
              <p>
              At ATC, we understand that security is of paramount importance in today's fast-paced world. That's why we offer cutting-edge Security & Surveillance solutions to safeguard your home, business, and assets. Our comprehensive range of products and services is designed to provide peace of mind and protect what matters most to you.
              </p>
              <h3>Conclusion:</h3>
              <p>
              Invest in the security of tomorrow with ATC's Security & Surveillance products. Protect your loved ones, assets, and peace of mind with our state-of-the-art solutions. Contact us today to learn more about how we can help you create a safer environment for your home or business. Your security is our priority.


              </p>
              </div>
           
          <div className="images-6">
          </div>
            </div>
          
           <div className="security-bottom">
            <div className="images-7"></div>
           
          
           <div className="security-features">
            <h2 className="py-4-security">Security & Surveillance</h2><hr style={{width:"30%"}}/>
            <p>At ATC, we understand that security is of paramount importance in today's fast-paced world. That's why we offer cutting-edge Security & Surveillance solutions to safeguard your home, business, and assets. Our comprehensive range of products and services is designed to provide peace of mind and protect what matters most to you.</p>
            <h3 >Conclusion:</h3>
            <p>Invest in the security of tomorrow with ATC's Security & Surveillance products. Protect your loved ones, assets, and peace of mind with our state-of-the-art solutions. Contact us today to learn more about how we can help you create a safer environment for your home or business. Your security is our priority.</p>
          </div>
          </div>
          
          
        
      </div>
      <ContactSection showTopHeading ={false} marginTop="150px"   showMap={false}/>

      
    </>
  );
};

export default SecurityAndSurveillance;
