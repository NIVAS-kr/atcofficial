import React from 'react';
import FAQ from "./../../FAQ";
import ContactSection from '../../Navbar/contact/Contact';

import "./Switches.css";

const Switches = () => {
  return (
    <>
      <div className="top-heading-switches">
        <h2>SWITCHES</h2>
      </div>

      <div className="content-section-switches">
        
          
            <div className="switches-1">
            <div className="switches-top">
              <h2 >Unlock Seamless Connectivity with Our Cutting-Edge Switch Solutions</h2>
              <hr style={{width:"40%"}}/>
              <p>
              At ATC, we understand that in today's fast-paced digital landscape, connectivity is everything. Our advanced switch products are designed to empower your network infrastructure, ensuring a seamless flow of data, voice, and video communications. With ATC's switches, you can stay ahead of the competition while delivering unmatched connectivity to your customers.


              </p>
              
              <h3>Experience the Future of Connectivity with ATC</h3>
              <p>With ATC's switch solutions, you're not just investing in products; you're investing in the future of your network. Join countless businesses and organizations that have already harnessed the power of our switches to streamline operations, boost productivity, and enhance their overall connectivity. Contact us today to learn more about how our switch products can transform your network infrastructure. Unlock the potential of seamless connectivity with ATC.

</p>
             </div>  
          <div className="images-12">
            
          </div>
         
        </div>
            
           <div className="switches-bottom">
           
            <div className="images-13"></div>
          
          
           <div className="switches-features">
            <h3 className="py-4-switches">Product Highlights:</h3><hr  style={{width:"30%"}}/>
            <ul>
              <li><strong>Managed Switches:</strong> Take full control of your network with our managed switches. Enjoy features like VLAN support, Quality of Service (QoS), and advanced management options.</li>
              <li><strong>Unmanaged Switches:</strong>  Ideal for small businesses or home offices, our unmanaged switches are simple to set up and provide reliable connectivity.</li>
              <li><strong>Layer 3 Switches:</strong>  For businesses with complex network routing needs, our Layer 3 switches offer advanced routing and traffic management capabilities.</li>
              <li><strong>PoE Switches: </strong> Power your network devices like IP cameras and VoIP phones using Power over Ethernet (PoE) switches, reducing cable clutter and installation costs.</li>
            </ul>
            </div>
          </div>
          
        
      </div>
      <FAQ />
      <ContactSection showTopHeading={false} marginTop="150px"  showMap={false}/>

      
    </>
  );
};

export default Switches;
