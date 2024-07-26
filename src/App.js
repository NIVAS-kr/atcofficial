import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css";
import Footeri from "./Footeri";
import Lastfooters from "./Lastfooter";
import Careers from "./Navbar/career/Careers.js";
import BackgroundSection from "./BackgroundSection";
import Services from "./Navbar/service/Services.js";
import WhatsAppFloatingIcon from "./WhatsAppFloatingIcon.js";
import AboutUs from "./Navbar/about/Aboutus.js";
import Whychooseus from "./Home/Whychooseus.js";
import ContactSection from "./Navbar/contact/Contact.js";
import NMS from "./footermenu/Ourpoductlink/NMS.js";
import Access from "./footermenu/Ourpoductlink/Access";
import Firewall from "./footermenu/Ourpoductlink/Firewall.js";
import Switches from "./footermenu/Ourpoductlink/Switches.js";
import SecurityAndSurveillance from "./footermenu/Ourpoductlink/SecurityAndSurveillance.js";
import RouterComponent from "./footermenu/Ourpoductlink/RouterComponent.js";
import MobileSignalBooster from "./footermenu/Ourpoductlink/MobileSignalBooster.js";
import ScrollToTop from "./Others/ScrollTop.js";
import Navbar from "./Navbar/Navbarmenu/Navbarmain.js";
import ApplyNowForm from "./Navbar/career/ApplyNow";
import SuccessPage from "./Navbar/career/SuccessPage.js";
import MobileDropdownPage from "./Navbar/Navbarmenu/MobileDropdownPage.js";

function App() {
  const location = useLocation();
  const [showBackground, setShowBackground] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [whatsappshow, setWhatsappshow] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    
      
    if (location.pathname === "/Whychooseus" || location.pathname === "/") {
      setShowBackground(false);
    } else {
      setShowBackground(true);
    }

    if (location.pathname === "/applyNow" || location.pathname === "/success" ||location.pathname==="/mobile-dropdown") {
      setShowBackground(false);
      setShowFooter(false);
      setShowNavbar(false);
      setWhatsappshow(false);
    } else {
      setShowFooter(true);
      setShowNavbar(true);
      setWhatsappshow(true);
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {showNavbar && <Navbar />}
      {showBackground && <BackgroundSection />}
      <Routes>
        <Route path="/applynow" element={<ApplyNowForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/" element={<Whychooseus />} />
        <Route path="/NMS" element={<NMS />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/whychooseus" element={<Whychooseus />} />
        <Route path="/access-Point" element={<Access />} />
        <Route path="/firewall" element={<Firewall />} />
        <Route path="/switches" element={<Switches />} />
        <Route
          path="/SecurityAndSurveillance"
          element={<SecurityAndSurveillance />}
        />
        <Route path="/MobileSignalBooster" element={<MobileSignalBooster />} />
        <Route path="/Router" element={<RouterComponent />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/mobile-dropdown" element={<MobileDropdownPage />} />
      </Routes>
      {whatsappshow && <WhatsAppFloatingIcon />}
      {showFooter && <Footeri />}
      {showFooter && <Lastfooters />}
    </>
  );
}

export default App;
