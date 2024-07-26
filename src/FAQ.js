import React, { useState, useEffect } from 'react';
import './FAQ.css'; // You can style your FAQ component in the CSS file

const FAQ = () => {
  // Define an array of FAQs with questions and answers
  const faqs = [
    {
      question: "What is ATC Infocom Solutions Pvt Ltd?",
      answer: "ATC Infocom Solutions Pvt Ltd is a technology company that provides a wide range of IT services and solutions to businesses, including IT support, software development, network infrastructure, and more.",
    },
    {
      question: "Do they provide 24/7 IT support?",
      answer: "Yes, ATC Infocom Solutions offers 24/7 IT support to ensure their clients' systems are monitored and maintained around the clock.",
    },
    {
      question: "How can I contact ATC Infocom Solutions for inquiries or support?",
      answer: "You can contact ATC Infocom Solutions through their website, phone, or email. Visit their website at atcinfocom.in for detailed contact information and to submit inquiries.",
    },
    {
      question: "Where is ATC Infocom Solutions based?",
      answer: "ATC Infocom Solutions is headquartered in Okhla, Phase 1, Delhi."
    },
    {
      question: "How quickly can ATC Infocom Solutions respond to IT emergencies?",
      answer: "ATC Infocom Solutions has a rapid response team for emergencies, and their response time may vary depending on your service level agreement (SLA). Typically, they aim for immediate assistance in critical situations."
    }
  ];

  // Initialize state to track which FAQ answers are currently visible
  const [expanded, setExpanded] = useState({});
  
  // Function to toggle visibility of FAQ answers
  const toggleFAQ = (index) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [index]: !prevExpanded[index]
    }));
  };

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.25 });

    document.querySelectorAll('.faq-item').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.faq-item').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="faq-container" data-aos-delay="100" data-aos="fade-up">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <hr className="redi-hr"/>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="dropdown-icon">{expanded[index] ? '-' : '+'}</span>
          </div>
          {expanded[index] && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
