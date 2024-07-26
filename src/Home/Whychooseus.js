
import React, { useState } from 'react';
import "./Whychooseus.css";
import { FaAngleRight, FaWifi } from "react-icons/fa";
import ClientSlider from "./ClientSlider";
import { BsGlobe2, BsRouterFill } from "react-icons/bs";
import { RiSpyFill, RiCheckDoubleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Cardi from "./Cardi";
import { BiReceipt, BiCubeAlt } from "react-icons/bi";
import Whychooseusimg from './Whychooseusimg';
import { IoImagesOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { BsReception4 } from "react-icons/bs";
import { FaFirefoxBrowser } from "react-icons/fa6";
import { BsShieldLock } from "react-icons/bs";
import { BsNintendoSwitch } from "react-icons/bs";
import PartnerCarousel from './OurPartners';
import KeyFeatures from './Keyfeatures';
import FAQ from "../FAQ.js";
import Teams from "../Navbar/about/Teams.js";
import ContactSection from "../Navbar/contact/Contact.js"

import { BsUniversalAccessCircle } from "react-icons/bs";
import Testimonials from '../Navbar/service/Testimonials';
const Whychooseus = ({ hanleSectionChange }) => {
  const [activeSection, setActiveSection] = useState("img1");
  const [activeButton, setActiveButton] = useState("img1");

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setActiveButton(section);
  };
  
  return (
    <>
    <div className="uff">
  <div className="surajrouter">
  <div className="surajpara"> 
    <div className="surajpng">
        <h1 className="chooseHeading">ATC INFOCOM SOLUTIONS</h1>
      </div>
      <div className="choosepara">
        <p>"Bringing people closer, no matter how far apart."</p>
      </div>
      <Link to="/contact">
          <button className="choosebutton" style={{ cursor: "pointer !important" }}>
            Contact Us
          </button>
        </Link>
          </div>
          <div className="routerimg">
        <img src="https://atcinfocom.in/assets/img/suraj.png" alt="Suraj" />
      
      </div>
      </div>
      <div className="cards">
        <div className="chosecard">
          <h1>Why Choose ATC Infocom Solutions</h1>
          <p>ATC Infocom Solutions stands for transparency, credibility & customer satisfaction in the telecom industry. We are able to stand out in our market since we provide a bunch of quality services & products, the best of our resources & precise operation techniques at the best value.</p>
          <Link  to="/about"><div className="butt"> <button className="cardbutton">
            Learn More <span className="arrow"><FaAngleRight /></span>
          </button></div></Link>
        </div>
        <div className="chosecard2">
          <div className="card01"><i><BiReceipt /></i><h3>Reliability and Uptime</h3><p>Research the ISP's history of uptime and read reviews from existing customers</p></div>
          <div className="card02"><i><BiCubeAlt /></i><h3>Customer Service & Support</h3><p>Good customer service is essential when issues arise.</p></div>
          <div className="card03"><i><IoImagesOutline /></i><h3>Equipment and Installation</h3><p>Security measures and privacy policies in place to protect your data and online activities.</p></div>
        </div>
      </div>
      <div className="clients">
        <h3>Our Clients</h3>
      </div>
      <div>
        <ClientSlider />
      </div>
      <div>
        <Whychooseusimg />
      </div>
       <div>
        <Cardi />
      </div>
      <div>
        <h2 className="our">Our Services</h2>
        <p className="ourp">ATC offers a variety of telecommunication services & network solutions. We are offering robust and flexible network connectivity & fully redundant solutions. We are capable of framework with all types of corporate & household requirements. A bunch of services are:</p>
        <div className="view-all-services">
        <Link to="/services"><button className="all"> View All Services <GoArrowRight /></button></Link>
</div>
      </div>
      <div className="spy">
          <button className={activeButton === 'img1' ? 'active' : ''} onClick={() => handleSectionChange('img1')}><FaWifi className="icon" /> Managed Internet Lines</button>
          <button className={activeButton === 'img2' ? 'active' : ''} onClick={() => handleSectionChange('img2')}><RiSpyFill className="icon" /> Virtual Private Network (VPN)</button>
          <button className={activeButton === 'img3' ? 'active' : ''} onClick={() => handleSectionChange('img3')}><BsRouterFill className="icon" /> Managed Broadband</button>
          <button className={activeButton === 'img4' ? 'active' : ''} onClick={() => handleSectionChange('img4')}><BsGlobe2 className="icon" /> SDWAN</button>
        </div>
      <div className="whymanaged">
      {activeSection === 'img1' && (
        <div className="whyim">
        <div className="whyim-1">
          <h2>Managed Internet Lines</h2>
          <p  className="whyim-p1" style={{fontStyle:"italic"}}>A leased line is a dedicated communication media / lines / channel that interconnects two or more sites/ locations.</p>
          <h2>Advantages :</h2>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> 24*7 support Business Flexibility. Provide Backup link for downtime.</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> High Speed Symmetric bandwidth</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> We provide 1:1 dedicated bandwidth with assigned 99.5% uptime</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Minimum time to link delivery.</p>
          </div>
          
          <img src="https://atcinfocom.in/assets/img/1.webp" className="managedimg" alt="Managed Internet Lines"/> </div>
        
      )}


      {activeSection === 'img2' && (
        <div className="whyim">
        <div className="whyim-1">
          <h2>Virtual Private Network (VPN)</h2>
          <p  style={{fontStyle:"italic"}}>A Virtual Private Network (VPN) is a technology that provides a secure and encrypted tunnel for transmitting data between your device and the internet. While your description is generally accurate, let's break down the key components and functions of a VPN:</p>
          <h2>Advantages :</h2>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> 24*7 support Business Flexibility. Provide Backup link for downtime.</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> High Speed Symmetric bandwidth</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> We provide 1:1 dedicated bandwidth with assigned 99.5% uptime</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Minimum time to link delivery.</p>
          </div>
          <img src="https://atcinfocom.in/assets/img/2.webp" className="vpnimg" alt="Virtual Private Network (VPN)"/>
        </div>
      )}

      {activeSection === 'img3' && (
        <div className="whyim">
        <div className="whyim-1">
          <h2>Managed Broadband</h2>
          <p style={{fontStyle:"italic"}}>We provide emergency internet for the events. Fast and easy delivery. Secured and cost effective.</p>
          <h2>Advantages :</h2>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Higher performance</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Lower Cost</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Quality of service</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Secured & Reliable Network</p>
          </div>
          <img src="https://atcinfocom.in/assets/img/5.jpg" className="broadbandimg" alt="Managed Broadband"/>
        </div>
      )}



      {activeSection === 'img4' && (
        <div className="whyim">
        <div className="whyim-1">
          <h2>SDWAN</h2>
          <p style={{fontStyle:"italic"}}>Software-Defined Wide Area Networking (SD-WAN) simplifies networking and optimizes application performance over Internet and hybrid WAN.</p>
          <h2>Advantages :</h2>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Higher performance</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Lower Cost</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Quality of service</p>
          <p><RiCheckDoubleLine style={{color:"#E03A3C"}}/> Secured & Reliable Network</p>
          </div>
          <img src="https://atcinfocom.in/assets/img/3.png" className="sdwanimg" alt="SDWAN"/>
        </div>
      )}
      </div>
      <div className="tt">
        <h2 className="ourpro">OUR PRODUCTS</h2>
        <hr className="ourprohr"/>
        <p className="ourparat">ATC Infocom Solutions offers variety of telecommunication services & network solutions. We are offering robust and flexible network connectivity & fully redundant solutions. We are capable to framework with all type of corporate & household requirements. A bunch of services are:</p>
      </div>
      <div className="ourproductcard">
      
      <div><div >
        <BsReception4 />
         <h2>Mobile Signal Booster</h2>
          
           <p>We offer a solid, dependable network infrastructure for seamless communication.</p>
          </div></div> 
        <div> <div>
        <FaFirefoxBrowser />
          <h2>Firewall</h2>
          
          <p>Our solutions are powered by the latest technologies to ensure high performance.</p>
          </div>
        </div>
        <div> <div>
        <BsShieldLock />
          <h2>Security & Serveillance</h2>
          
          <p>Our support team is always ready to assist with any technical issues.</p>
          </div>
        </div>
        <div><div>
        <BsUniversalAccessCircle />
          <h2>Access Point</h2>
          
          <p>We provide quality services at competitive prices to fit your budget.</p>
          </div>
        </div>
        <div>
        <div>
        <BsRouterFill />
          <h2>Routers</h2>
         
          <p>Our plans are flexible and can be tailored to meet your specific needs.</p>
          </div></div>
        <div><div>
        <BsNintendoSwitch />
          <h2>Switches</h2>
       
          <p>We ensure the highest level of security for your data transmissions.</p>
          </div></div>
      </div>
      <div className="whypa">
      <h2 className="whypartner">Our Partners</h2>
      <PartnerCarousel />
      </div>
      <div>
      <KeyFeatures/>
      </div>
      </div>
      <Testimonials/>
      <div>
        <FAQ/>
      </div>
      <div>
        <Teams />
      </div>
      <div>
        <ContactSection showTopHeading={false} marginTop="150px" showMap={false}/>
      </div>
       
      
      
      </>
      
      
  )
}
 export default Whychooseus;