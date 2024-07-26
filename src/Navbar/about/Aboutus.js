import React from 'react';

import "./Aboutus.css"
import Mission from "./Ourmission.js"
import Vision from "./Vision.js";
import Team from "./Teams.js";
import ContactSection from "../contact/Contact.js";
import FAQ from "../../FAQ.js";



function AboutUs() {
  return (
    <div >
     <div className="top-heading-about" ><h2> About</h2></div>
     <div className="aboutall">
      <div  className="headingwidth" >
      
        <h2 style={{fontSize:"40px",fontWeight:"500"}}>About Us</h2>
        <p>
          ATC has been renowned as a leading Telecommunications Company in India. Since 2011, we are growing & serving optimistic services to our clients & partners. ATC is offering across multiple solutions and products to provide support and services under one roof. Mr. Jitendra Sharma, a backbone & company's owner possess the expertise, skills, and extensive knowledge holding an experience of 14 years in the telecom industry.
        </p>
        <p>
          ATC offers a complete range of network solutions like Managed Internet, Mobile Signal Booster, Security Surveillance, Networking Hardware and network management services. We are offering robust and flexible network connectivity & fully redundant solutions. We have already created a reliable network infrastructure which is trusted by customers for supporting various applications. We operate through a network built on world-class technology and state of the art infrastructure.
        </p>
        <p>
          ATC Infocom Solutions would also be building a comprehensive services framework that can deliver incredible speed range and flexibility for the users. We have engaged in committed technology partners to establish required capability frameworks that comply with the highest corporate and household standards.
        </p>
      </div>
      <div>
        
      </div>
      <div  className="aboutimg" >
        <img  className="aboutimg1" src="https://atcinfocom.in/assets/img/carousel-3.jpg" alt="ATC Infocom"   />


         {/* <Link to="/contact">
        <button style={{width:"175px",height:"50px",marginLeft:"140px",marginTop:"55px",fontWeight:"900",fontSize:"inherit",border:"none",borderRadius:"3px",cursor:"pointer",background:"#E03A3C",color:"white"}}>Contact Us</button>
        </Link> */}
        <img  className="aboutimg2" src="https://atcinfocom.in/assets/img/carousel-2.jpg" alt="ATC Infocom"  /> 

        
      </div> 
      </div>
      <Mission/>
      <Vision/>
      <Team />
      <FAQ/>
      <div>
      <ContactSection showTopHeading={false} marginTop="150px" showMap={false}/>
      </div>
      

    </div>
  );
}

export default AboutUs;
