import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import "./ContactSection.css";
import Mapshow from "../../Mapshow.js";

const ContactSection = ({ showTopHeading = true, marginTop = '0' ,showMap = true}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending..."); // Set status to sending
    try {
      const response = await fetch("http://localhost:8006/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatus(result.message); // Show success message
        event.target.reset(); // Reset form fields
      } else {
        const result = await response.json();
        setStatus(result.message); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again later."); 
    }
  };

  return (
    <>
    
    <div className="cont-section "style={{ marginTop }}>
      {showTopHeading && (
        <div className="top-heading-contact">
          <h2>Contact</h2>
        </div>
      )}
      <div className="contact-heading" data-aos="fade-up">
        <h2>CONTACT</h2>
        <hr className="redi-hr-contact" />
        <p>If You Have Any Query, Please Contact Us</p>
      </div>
      <div className="contact-form"  data-aos="fade-up" data-aos-delay="100" >
        <div className="contact-form1">
          <div className="address-contact">
            <div className="icon-container">
              <FaMapMarkerAlt className="email-icon" style={{ color: "#E03A3C" }} />
            </div>
            <h3>Our Address</h3>
            <p>Location: A-2, Okhla Phase 1, New Delhi, India - 110020</p>
          </div>
          <div className="address2" >
            <div className="contactemail">
              <div className="icon-container">
                <FaEnvelope className="email-icon" style={{ color: "#E03A3C" }} />
              </div>
              <h3>Email Us</h3>
              <p>helpdesk@atcinfocom.in</p>
            </div>
            <div className="contactcall">
              <div className="icon-container">
                <FiPhoneCall className="email-icon" style={{ color: "#E03A3C" }} />
              </div>
              <h3>Call Us</h3>
              <p>+91-11-49787583</p>
            </div>
          </div>
        </div>
        <div className="contact-form2">
          <form className="contact-form-contact" onSubmit={handleSubmit}>
            <div className="name-emailcontact">
              <div className="form-group-contact1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-contact1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group-contact sub">
              <input
                type="text"
                id="subject-contact"
                name="subject"
                placeholder="Subject"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group-contact">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group-contact">
              <button type="submit" className="btn-send-contact">
                Send Message
              </button>
            </div>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
    {showMap && <Mapshow />}
    </>
  );
};

export default ContactSection;
