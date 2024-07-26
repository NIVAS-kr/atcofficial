import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import './lastfooter.css';


const Lastfooters = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-heading">
          © Copyright 2023 <span>ATC INFOCOM SOLUTIONS PVT. LTD.</span> All Rights Reserved
        </h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/people/Atc-Infocom-solutions-pvt-ltd/61551130779202/?is_tour_completed=true" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footerIcon socialIcons facebookIcons" />
          </a>
          <a href="https://www.instagram.com/atcinfocom/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footerIcon socialIcons instagramIcons" />
          </a>
          <a href="https://www.linkedin.com/company/atc-infocom-solutions-private-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footerIcon socialIcons linkedinIcons" />
          </a>
        </div>
      </div>
      {showButton && (
        <button className="scrollToTopButton" onClick={scrollToTop}>
          <FaArrowUp className="scrollToTopIcon" />
        </button>
      )}
     
    </footer>
  );
};

export default Lastfooters;

