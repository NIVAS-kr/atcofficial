import React from 'react';
import FAQ from "../../FAQ";
import ContactSection from '../../Navbar/contact/Contact';
import "./RouterComponent.css";

const RouterComponent = () => {
  return (
    <>
      <div className="top-heading-router">
        <h2>ROUTER</h2>
      </div>

      <div className="content-section-router">
        
          
            <div className="router-1">
            <div className="router-top">
              <h2>Routers</h2>
              <hr style={{width:"30%"}}/>
              <p>
              At ATC, we understand the critical role that reliable and high-performance routers play in today's connected world. Our cutting-edge router solutions are designed to meet the demands of modern telecommunications, providing seamless connectivity, enhanced security, and unmatched speed. Explore our range of routers to discover the perfect solution for your network needs.


              </p>
              
              <h3>Conclusions:</h3>
              <p>Make the smart choice for your network infrastructure by selecting ATC routers. Experience the future of connectivity with routers that combine speed, security, and reliability like never before. Contact us today to learn more about our product offerings and how we can empower your network.</p>
              </div>
             
          <div className="images-10">
            
         
        </div>
            </div>
           
           
           
         
           <div className="router-bottom">
            <div className="images-11"></div>
           
           
           <div className="router-features">
            <h3 >Key Features of Routers</h3><hr style={{width:"30%"}}/>
            <ul>
              <li><strong>Blazing Fast Speeds:</strong> Experience lightning-fast data transfers with our high-speed Access Points, ensuring that your devices operate at peak performance.</li>
              <li><strong>Reliability:</strong> With industry-leading reliability and uptime, ATC Access Points keep your network stable, even in the most demanding environments.</li>
              <li><strong>Advanced Security:</strong> Protect your network and data with robust security features, including WPA3 encryption, VLAN support, and intrusion detection.secure from all angles.</li>
              <li><strong>Easy Management:</strong> Streamline network management with user-friendly interfaces and remote management options, making it simple to configure and monitor your network.</li>
            </ul>
          </div>
          </div>
          
        
      </div>

      <FAQ />
      <ContactSection showTopHeading={false} marginTop="150px" showMap={false}/>
    </>
  );
};

export default RouterComponent;
