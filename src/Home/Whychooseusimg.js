import React from 'react';
import './Whychooseusimg.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoShieldOutline } from 'react-icons/io5';
import { BiReceipt, BiCubeAlt } from 'react-icons/bi';
import {Link} from "react-router-dom";

const Whychooseusimg = () => {
  return (
    <div className="containe-whyimage">
      <img src="https://atcinfocom.in/assets/img/1234.jpg" className="whyimage" alt="Why Choose Us" />
      <div className="overlay">
        <div className="abo">
          <h2>About Us</h2>
          <p className="pa">ATC has been renowned as a leading Telecommunications Company in India. Since 2011, we are growing & serving optimistic services to our clients & partners. ATC is offering across multiple solutions and products to provide support and services under one roof.</p>
          <Link  to="/about"><button className="abobutton"> READ MORE <MdKeyboardArrowRight className="right" /></button> </Link>
        </div>
        <div className="mis">
          <div className="icon-text">
            <BiReceipt className="iconi" />
            <h2>MISSION</h2>
          </div>
          <p className="p1">“Convenient Telecommunication Support & Services Under One Roof”</p>
          <div className="icon-text h2vis">
            <BiCubeAlt className="iconi" />
            <h2 >VISION</h2>
          </div>
          <p className="p2">“To be first choice Partner in Telecommunications technology transformation & Enterprise Services”</p>
        </div>
        <div className="lasti">
          <div className="icon-text h2app">
            <IoShieldOutline className="iconi" />
            <h2>APPROACH</h2>
          </div>
          <p className="p3">"Customer-centric approach to empower our people"</p>
        </div>
      </div>
    </div>
  );
};

export default Whychooseusimg;
