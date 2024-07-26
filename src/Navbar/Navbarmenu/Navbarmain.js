import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbarmain.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownVisible, setIsMobileDropdownVisible] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <Link to="/">
            <img
              src="https://atcinfocom.in/assets/img/atc-logo-1.png"
              alt="logo"
              className="logo"
            />
          </Link>
          {/* Desktop Menu */}
          <div className={`desktopMenu ${isMobileMenuOpen ? "hidden" : ""}`}>
            <Link to="/about" className="desktopMenuListItem">
              About
            </Link>
            <Link to="/services" className="desktopMenuListItem">
              Services
            </Link>
            <div
              className="desktopMenuListItem"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              Our Products <RiArrowDropDownLine />
              {isDropdownVisible && (
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <Link to="/MobileSignalBooster">
                        <RxDoubleArrowRight className="link-icons" />
                        Mobile Signal Booster
                      </Link>
                    </li>
                    <li>
                      <Link to="/Firewall">
                        <RxDoubleArrowRight className="link-icons" />
                        Firewall
                      </Link>
                    </li>
                    <li>
                      <Link to="/SecurityAndSurveillance">
                        <RxDoubleArrowRight className="link-icons" />
                        Security & Surveillance
                      </Link>
                    </li>
                    <li>
                      <Link to="/access-point">
                        <RxDoubleArrowRight className="link-icons" />
                        Access Point
                      </Link>
                    </li>
                    <li>
                      <Link to="/router">
                        <RxDoubleArrowRight className="link-icons" />
                        Routers
                      </Link>
                    </li>
                    <li>
                      <Link to="/Switches">
                        <RxDoubleArrowRight className="link-icons" />
                        Switches
                      </Link>
                    </li>
                    <li>
                      <Link to="/NMS">
                        <RxDoubleArrowRight className="link-icons" />
                        NMS support devices
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link to="/Careers" className="desktopMenuListItem">
              Careers
            </Link>
            <Link to="/contact" className="desktopMenuListItem">
              Contact
            </Link>
            <a
              href="https://atcinfocom.in/support/"
              className="desktopMenuListItem supportLink"
            >
              Support
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="mobileMenuToggle">
            <GiHamburgerMenu onClick={toggleMobileMenu} />
          </div>
          {isMobileMenuOpen && (
            <div className="mobileMenu">
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="mobileMenuListItem"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="mobileMenuListItem"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile-dropdown"
                    className="mobileMenuListItem"
                    onClick={closeMobileMenu}
                  >
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Careers"
                    className="mobileMenuListItem"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="mobileMenuListItem"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://atcinfocom.in/support/"
                    className="mobileMenuListItem supportLink"
                    onClick={closeMobileMenu}
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Social Icons */}
          <div className="desktopMenuBtn">
            <a
              href="https://www.linkedin.com/company/atc-infocom-solutions-private-limited/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="desktopMenuIconLink"
            >
              <FaLinkedin className="desktopMenuIcon socialIcon linkedinIcon" />
            </a>
            <a
              href="https://www.instagram.com/atcinfocom/"
              target="_blank"
              rel="noopener noreferrer"
              className="desktopMenuIconLink"
            >
              <FaInstagram className="desktopMenuIcon socialIcon instagramIcon" />
            </a>
            <a
              href="https://www.facebook.com/people/Atc-Infocom-solutions-pvt-ltd/61551130779202/?is_tour_completed=true"
              target="_blank"
              rel="noopener noreferrer"
              className="desktopMenuIconLink"
            >
              <FaFacebook className="desktopMenuIcon socialIcon facebookIcon" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
