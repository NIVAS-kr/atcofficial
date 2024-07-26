import React from 'react';
import FAQ from "../../FAQ";
import ContactSection from '../../Navbar/contact/Contact';
import "./MobileSignalBooster.css";

const MobileSignalBooster = () => {
  return (
    <>
       
      <div className="top-heading-mobilesignalbooster">
        <h2>MOBILE SIGNAL BOOSTER</h2>
      </div>

      <div className="content-section-mobile">
        
          
            <div className="mobile-para1">
              <h2 >Mobile Signal Booster</h2>
              <hr />
              <p>
                Are dropped calls and slow data speeds frustrating you? Say goodbye to poor mobile signal reception with our state-of-the-art Mobile Signal Booster. Whether you're at home, in the office, or on the road, our booster ensures you stay connected with crystal-clear voice calls and lightning-fast data speeds.
              </p>
              
              <h3>How It Works:</h3>
              <p>
                Our Mobile Signal Booster works by capturing the existing weak signal from outside your home or office, amplifying it, and then rebroadcasting the enhanced signal indoors. This ensures that you have a strong and consistent mobile signal wherever you need it.
              </p>
              
            </div>
            <div className="mobile-para2">
              <h3 >Key Features of ATC Mobile Signal Booster</h3>
              <hr/>
              <ul>
                <li><strong>Enhanced Signal Strength:</strong> Our Mobile Signal Booster amplifies your mobile signal, providing you with a consistently strong and reliable connection.</li>
                <li><strong>Wide Coverage:</strong> With an extended coverage area, you'll experience improved signal quality in all corners of your home or office.</li>
                <li><strong>Easy Installation:</strong> Our booster is easy to install and comes with all the necessary components, making it a hassle-free solution for signal woes.</li>
                <li><strong>Multi-User Support:</strong> Perfect for households or offices with multiple users, our booster accommodates multiple devices simultaneously.</li>
              </ul>
            </div>
          
        
      </div>

      <FAQ />
      <ContactSection showTopHeading={false} marginTop="150px" showMap={false}/>
    </>
  );
};

export default MobileSignalBooster;
