import React from 'react';

import "./Firewall.css";
import ContactSection from '../../Navbar/contact/Contact';

const Firewall = () => {
  return (
    <>
      <div className="top-heading-firewall">
        <h2>FIREWALL</h2>
      </div>

      <div className="content-section-firewall">
        
          
            <div className="firewall-1">
            <div className="firewall-top">
              <h2 >Protect Your Network with Our Advanced Firewall Solutions</h2>
              <hr style={{width:"40%"}}/>
              
              <p>
              In an increasingly interconnected world, the security of your network is paramount. With the ever-evolving threat landscape, it's crucial to have robust measures in place to safeguard your data, applications, and infrastructure. That's where our cutting-edge Firewall solutions come into play.
              </p>
              <h3>Conclusion:</h3>
              <p>
              In an era where network security is non-negotiable, our Firewall product stands as a reliable guardian of your organization's digital assets. Don't leave your network vulnerable to threats; choose our Telecom Company's Firewall solutions to fortify your defenses and enjoy peace of mind.


              </p>
              </div>
              
          <div className="images-2">
          </div>
            
         
        </div>
        <div className="firewall-bottom">
            
          
         
            <div className="images-3"></div>
         
           
           <div className="firewall-features">
            <h3 >Key Features of Our Firewall Product</h3><hr style={{width:"30%"}}/>
            <ul>
              <li><strong>Next-Generation Security:</strong> Our Firewall is designed to combat the latest threats using advanced techniques such as intrusion detection and prevention, deep packet inspection, and behavior analysis.</li>
              <li><strong>Real-time Threat Monitoring:</strong> We offer real-time monitoring and alerts, enabling you to respond swiftly to potential threats and vulnerabilities as they emerge.</li>
              <li><strong>Multi-Layered Defense:</strong> Our Firewall deploys multiple layers of security, including stateful packet inspection, application-layer filtering, and VPN support, to keep your network secure from all angles.</li>
              <li><strong>High Performance:</strong> Our Firewall boasts impressive performance capabilities, ensuring minimal impact on network speed and latency while providing maximum protection.</li>
            </ul>
            </div>
          </div>
          
        
      </div>
      <ContactSection showTopHeading={false} marginTop="150px" showMap={false}></ContactSection>


     
    </>
  );
};

export default Firewall;
