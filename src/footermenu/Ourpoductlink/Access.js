import React from 'react';
import FAQ from "../../FAQ";
import ContactSection from '../../Navbar/contact/Contact';
import "./Access.css";

const Access = () => {
  return (
    <>
      <div className="top-heading-access">
        <h2>ACCESS</h2>
      </div>

      <div className="content-section-access">
        <div className="access-1">
            <div className="access-top">
              <h2 >Your Gateway to Seamless Connectivity</h2>
              <hr style={{width:"50%"}}/>
              <p>
              In today's hyper-connected world, seamless connectivity is not just a convenience – it's a necessity. Active Tele Communication, a trusted name in telecommunications, proudly presents our state-of-the-art Access Point solutions. Designed to empower businesses and individuals with robust, reliable, and high-performance wireless connectivity, our Access Points are the cornerstone of modern connectivity solutions.
              </p>
              </div>
              <div className="images-8">
          </div>
        
        </div>
            
           <div className="access-bottom">
           
            <div className="images-9"></div>
           
          
           <div className="access-features">
            <h3 >Key Features of ATC Access Points</h3><hr style={{width:"30%"}}/>
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

export default Access;
