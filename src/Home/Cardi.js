import React from 'react';
import "./Cardi.css";
import { FaRegSmile } from "react-icons/fa";
import { GiBookAura } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoPeople } from "react-icons/go";

const Cardi = () => {
  return (
    <>
    <div className="i13">
      <div>
        <GiBookAura className="icon" />
        <h1>13+</h1>
        <p>Years Of Experience</p>
      </div>
      <div>
        <FaRegSmile className="icon" />
        <h1>750+</h1>
        <p>Happy Clients</p>
      </div>
      <div>
        <TfiHeadphoneAlt className="icon" />
        <h1>850+</h1>
        <p>Project Done</p>
      </div>
      <div>
        <GoPeople className="icon" />
        <h1>50+</h1>
        <p>Team Members</p>
      </div>
    </div>
    </>
  );
}

export default Cardi;
