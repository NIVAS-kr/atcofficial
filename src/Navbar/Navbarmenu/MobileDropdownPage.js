import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MobileDropdownPage.css';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { FaTimes } from 'react-icons/fa';

const MobileDropdownPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="mobile-dropdown-page">
      <button className="close-button" onClick={handleClose}>
        <FaTimes />
      </button>
      <ul className="mobile-dropdown-list">
        <li>
          <Link to="/MobileSignalBooster" className="mobile-dropdown-item">
            <RxDoubleArrowRight className="link-icons" />
            Mobile Signal Booster
          </Link>
        </li>
        <li>
          <Link to="/Firewall" className="mobile-dropdown-item">
            <RxDoubleArrowRight className="link-icons" />
            Firewall
          </Link>
        </li>
        <li>
          <Link to="/SecurityAndSurveillance" className="mobile-dropdown-item">
            <RxDoubleArrowRight className="link-icons" />
            Security & Surveillance
          </Link>
        </li>
        <li>
          <Link to="/access-point" className="mobile-dropdown-item">
            <RxDoubleArrowRight className="link-icons" />
            Access Point
          </Link>
        </li>
        <li>
          <Link to="/router" className="mobile-dropdown-item">
            <RxDoubleArrowRight className="link-icons" />
            Routers
          </Link>
        </li>
        <li>
          <Link to="/Switches" className="mobile-dropdown-item">
            <RxDoubleArrowRight className="link-icons" />
            Switches
          </Link>
        </li>
        <li>
          <Link to="/NMS" className="mobile-dropdown-item">
            <RxDoubleArrowRight className="link-icons" />
            NMS support devices
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileDropdownPage;
