import React from 'react';
import './Keyfeatures.css'; // Make sure to adjust the CSS file name accordingly
import Testimonials from '../Navbar/service/Testimonials';
// import Team from "./teams";
import FAQ from "../FAQ";

const KeyFeatures = () => {
  return (
    <>
      <div className="flex-container">
        <div className="content-left">
          <h2>Key Features Of Our Broadband Services</h2>
          <hr style={{width:"45%"}}/>
          <ul>
            <li>Speed and Media: Broadband services are offered from 10 Mbps onwards. Preferred media are fiber & Wireless Radios.</li>
            <li>Dual path redundancy: Fiber media connectivity comes with multiple levels of redundancy to ensure your business may never face downtime.</li>
            <li>Last Mile Redundancy: RF link is provided as a backup to fiber connectivity where feasible as an option.</li>
            <li>Uplink Downlink ratio: All leased lines are symmetric in general. However, we can offer customized pricing where a higher uplink speed is desired for specific use cases.</li>
            <li>Internet Gateway Redundancy: We connect into the internet cloud through multiple upstream providers, thus ensuring that you get gateway-level redundancy and enabling the lowest latencies for specific requirements.</li>
            <li>Committed Service Levels: ATC internet leased lines come with committed uptime levels of 98.5% and committed low latencies to key destinations.</li>
          </ul>
        </div>
        <div className="content-right">
          <div className="images-2-0">
            
          </div>
        </div>
      </div>

      
      <div className="flex-container">
        <div className="content-right">
          <div className="images-2-1">
         
          </div>
        </div>
        <div className="content-left">
          <h2>ATC Team</h2>
          <hr style={{width:"45%"}}/>
          <p>
          Our experienced professionals are dedicated to crafting high-quality solutions tailored to your specific needs. We're confident that our expertise and commitment to customer satisfaction will contribute to your business's growth and success.</p>
<p>
Additionally, we have a strong track record, having deployed over 6,500 broadband multi-location links serving 700+ corporate customers. Our services include Internet lease lines and SD-WAN services, exclusively catering to the B2B space. With a dedicated 24x7 team, we prioritize delivering the best customer experience.
          </p>
        </div>
      </div>
      
      
    </>
  );
};

export default KeyFeatures;
