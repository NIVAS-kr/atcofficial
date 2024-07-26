import React, { useState } from "react";

import Testimonials from "./Testimonials";
import FAQ from "../../FAQ.js";
import ServiceButtons from './ServiceButtons'; 
import "./Services.css";
import ContactSection from "../contact/Contact";

const Services = () => {
  const [activeService, setActiveService] = useState("#tab-pane-1");

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  return (
    <>
      <div className="top-heading-services">
        <h2>Our Services</h2>
      </div>
      <div className="container-services">
        <div className="service">
          <div className="service-heading">
            <h1>Our Services</h1>
            <hr />
          </div>
          <p className="services-para">
            ATC offers variety of telecommunication services & network solutions.
            We are offering robust and flexible network connectivity & fully
            redundant solutions. We are capable to framework with all type of
            corporate & household requirements. A bunch of services are:
          </p>
        </div>
        <div className="service-main">
          <div className="service-button">
            <ServiceButtons setActiveService={handleServiceClick} />
          </div>
          {activeService === "#tab-pane-1" && (
            <div className="service-item">
              <div className="service-image1">
              <img
                        src="https://www.atcinfocom.in/assets/img/1.webp"
                        alt="Managed Internet Lines"
                        className="img-fluid"
                        style={{ width: '500px', height: '410px' }}
                      />
              </div>
              <div className="service-content">
                <h2 className="service-head">Managed Internet Lines</h2>
                <p className="service-para">
                  A leased line is a dedicated communication media / lines /
                  channel that interconnects two or more sites/ locations.
                </p>
                <h4 className="service-heada">Advantages:</h4>
                <ul className="service-para">
                  <li>24*7 support Business Flexibility.</li>
                  <li>Provide Backup link for downtime.</li>
                  <li>High Speed Symmetric bandwidth.</li>
                  <li>
                    We provide 1:1 dedicated bandwidth with assigned 99.5%
                    uptime.
                  </li>
                  <li>Minimum time to link delivery.</li>
                </ul>
              </div>
            </div>
          )}
          {activeService === "#tab-pane-2" && (
            <div className="service-item">
              <div className="service-image1">
              <img
                        src="https://www.atcinfocom.in/assets/img/2.webp"
                        alt="VPN"
                        className="img-fluid"
                        style={{ width: '500px', height: '410px' }}
                      />
              </div>
              <div className="service-content">
                <h2 className="service-head">VPN</h2>
                <p className="service-para">
                  VPN solutions to securely connect your offices, remote workers, and data centers.
                </p>
                <h4 className="service-heada">Advantages:</h4>
                <ul className="service-para">
                  <li>Secure and encrypted connections.</li>
                  <li>Remote access to internal resources.</li>
                  <li>Cost-effective and scalable solutions.</li>
                  <li>24/7 support and monitoring.</li>
                  <li>Minimum time to link delivery.</li>
                </ul>
              </div>
            </div>
          )}
          {activeService === "#tab-pane-3" && (
            <div className="service-item">
              <div className="service-image1">
              <img
                        src="https://www.amsolusi.id/wp-content/uploads/2021/05/SDWAN-Graphic-800x450.png"
                        alt="SDWAN"
                        className="img-fluid"
                        style={{ width: '500px', height: '410px' }}
                      />
              </div>
              <div className="service-content">
                <h2 className="service-head">SDWAN</h2>
                <p className="service-para">
                  SDWAN solutions for enhanced connectivity, security, and performance across your network.
                </p>
                <h4 className="service-heada">Advantages:</h4>
                <ul className="service-para">
                  <li>Enhanced network performance and reliability.</li>
                  <li>Centralized management and control.</li>
                  <li>Cost-effective and scalable solutions.</li>
                  <li>Cost savings on network infrastructure.</li>
                  <li>Increased security and data protection.</li>
                </ul>
              </div>
            </div>
          )}
          {activeService === "#tab-pane-4" && (
            <div className="service-item">
              <div className="service-image1">
              <img
                        src="https://www.atcinfocom.in/assets/img/4.webp"
                        alt="Event Internet"
                        className="img-fluid"
                        style={{ width: '500px', height: '410px' }}
                      />
              </div>
              <div className="service-content">
                <h2 className="service-head">EVENT Internet</h2>
                <p className="service-para">
                  Reliable and high-speed internet solutions for your events, conferences, and exhibitions.
                </p>
                <h4 className="service-heada">Advantages:</h4>
                <ul className="service-para">
                  <li>Customizable packages to suit event needs.</li>
                  <li>High-speed and stable connections.</li>
                  <li>On-site technical support.</li>
                  <li>Seamless integration with event infrastructure.</li>
                </ul>
              </div>
            </div>
          )}
          {activeService === "#tab-pane-5" && (
            <div className="service-item">
              <div className="service-image1">
              <img
                        src="https://www.actcorp.in/images/blogs/best-broadband-bangalore-blog-image.jpg"
                        alt="Managed Broadband"
                        className="img-fluid"
                        style={{ width: '500px', height: '410px' }}
                      />
              </div>
              <div className="service-content">
                <h2 className="service-head">Managed Broadband</h2>
                <p className="service-para">
                  High-speed and reliable broadband solutions tailored to your business needs.
                </p>
                <h4 className="service-heada">Advantages:</h4>
                <ul className="service-para">
                  <li>High-speed internet access.</li>
                  <li>24/7 support and monitoring.</li>
                  <li>Flexible plans and packages.</li>
                  <li>Seamless connectivity for your business.</li>
                </ul>
              </div>
            </div>
          )}
          {activeService === "#tab-pane-6" && (
            <div className="service-item">
              <div className="service-image1">
              <img
                        src="https://www.carrierbid.com/wp-content/uploads/2011/01/Business-Phone-Lines-vs.-PRI.jpg"
                        alt="PRI Lines"
                        className="img-fluid"
                        style={{ width: '500px', height: '410px' }}
                      />
              </div>
              <div className="service-content">
                <h2 className="service-head">PRI Lines</h2>
                <p className="service-para">
                  Professional-grade PRI lines for seamless voice communication in your organization.
                </p>
                <h4 className="service-heada">Advantages:</h4>
                <ul className="service-para">
                  <li>High-quality voice calls.</li>
                  <li>Scalable solutions for growing businesses.</li>
                  <li>24/7 support and maintenance.</li>
                  <li>Integration with existing PBX systems.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <Testimonials />
      <FAQ />
      <ContactSection showTopHeading={false} marginTop="150px" showMap={false}/>
    </>
  );
};

export default Services;
