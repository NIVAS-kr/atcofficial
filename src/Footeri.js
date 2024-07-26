import React from "react";
import { FaMapMarkerAlt, FaEnvelope,FaAngleRight } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import "./Footeri.css";
import { Link } from 'react-router-dom';

const Footeri  =() => {
  return (
    <>
      
    
     
        <footer className="footeu">
          <div className="footer-section">
            <h2>ATC INFOCOM <br />SOLUTIONS</h2>
            <p className="fopa" >
              ATC has been renowned as a leading Telecommunications Company in India. Since 2011, we are growing & serving optimistic services to our clients & partners.
            </p>
          </div>
          <div className="footer-section">
            <div className="footer-links">
              <h3>Useful Links</h3>
              <hr className="hr-red" />
              <ul>
              <li style={{ listStyleType: 'none'}}>
                <Link to="/">
                  <FaAngleRight className="link-icon"  style={{textcolor:'white',textDecoration:'none'}}/>
                  Home
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/about">
                  <FaAngleRight className="link-icon" />
                  About us
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/services">
                  <FaAngleRight className="link-icon" />
                  Services
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/contact">
                  <FaAngleRight className="link-icon" />
                  Contact Us
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/Whychooseus">
                  <FaAngleRight className="link-icon" />
                  Why Choose Us
                </Link>
              </li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-products">
              <h3>Our Products</h3>
              <hr style={{ alignItems: "flex-start" }} className="hr-red" />
              <ul>
              <li style={{ listStyleType: 'none' }}>
                <Link to="/MobileSignalBooster">
                  <FaAngleRight className="link-icon" />
                  Mobile Signal Booster
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/Firewall">
                  <FaAngleRight className="link-icon" />
                  Firewall
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/SecurityAndSurveillance">
                  <FaAngleRight className="link-icon" />
                  Security & Surveillance
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/access-point">
                  <FaAngleRight className="link-icon" />
                  Access Point
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/router">
                  <FaAngleRight className="link-icon" />
                  Routers
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/Switches">
                  <FaAngleRight className="link-icon" />
                  Switches
                </Link>
              </li>
                <li style={{ listStyleType: 'none' }}>
                <Link to="/NMS">
                  <FaAngleRight className="link-icon" />
                  NMS support devices
                </Link>
              </li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="address">Our Address</h3>
            <hr className="hr-red" />
            <p style={{ lineHeight: "37px" }}>
              <FaMapMarkerAlt /> A-2/, Okhla Phase 1, New Delhi, India-<br /> 110020 <br />
              <FiPhoneCall /> +91-11-49787583<br />
              <a style={{ color: "white" }} href="mailto:helpdesk@atcinfocom.in">
                <FaEnvelope /> helpdesk@atcinfocom.in
              </a>
            </p>
          </div>
        </footer>
      
    </>
  );
};

export default Footeri;
