import React from "react";
import { FaEmpire, FaChartArea, FaRecycle } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import "./Careers.css";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
    <div className="top-heading-career">
    <h2>Career</h2>
    </div>
  

    <div className="career">
 
      <section id="page-section-career" className="py-5-career" >
        
         
            <div className="col-career ">
              <h1 className="heading-box-career ">Join Our Team</h1>
              <hr className="career-hr"/>
              <p className="join-career">
                At ATC INFOCM SOLUTIONS PVT. LTD, we're passionate about delivering high-speed internet solutions that connect people, businesses, and communities. Our commitment to innovation and customer satisfaction drives us forward every day. If you share our vision and are ready to make an impact in the dynamic world of internet services, we invite you to explore Careers opportunities with us.
              </p>
            </div>
       
        
      </section>

      <h1 id="mid-career">Why ATC INFOCOM SOLUTIONS?</h1>

      <section>
        <div className="cardo-container-career">
          <div className="cardo-career cardo-career-wide">
            <h3><FaEmpire /> Innovation</h3>
            <p>We thrive on pushing the boundaries of technology to provide our customers with the fastest, most reliable internet connections available.</p>
          </div>
          <div className="cardo-career cardo-career-wide">
            <h3><FaChartArea /> Growth:</h3>
            <p>As a fast-growing ISP, we offer ample opportunities for career advancement. We believe in nurturing talent and promoting from within whenever possible.</p>
          </div>
          <div className="cardo-career cardo-career-wide">
            <h3> <HiMiniUserGroup /> Team Spirit:</h3>
            <p>At ATC INFOCOM SOLUTIONS, you'll be part of a collaborative and supportive team that values diversity, inclusivity, and the exchange of ideas.</p>
          </div>
          <div className="cardo-career cardo-career-wide">
            <h3> <FaRecycle /> Community Impact:</h3>
            <p>We understand the importance of being connected, and we're proud to make a positive impact on the communities we serve.</p>
          </div>
        </div>
      </section>

      <section >
        <h1 className="hcareer">Current Openings :</h1>
        <p className="pcareer">
          We are constantly on the lookout for talented individuals who are as passionate about internet technology as we are. Check out our current job openings to find the perfect fit for your skills and interests.
        </p>
      </section>
      <div className="job-opening">

      <section>
        <div className="job-description-career">
          <h5 className="network-career">Network Engineer</h5>
          <div className="job-responsibilities-career">
            <h3 className="responsibilities-career">Responsibilities</h3>
            <ul className="unordered-career">
              <li>Setting up and configuring network devices, such as routers, switches, firewalls, and access points.</li>
              <li>Regular maintenance and monitoring of the network to ensure its performance and security.</li>
              <li>Troubleshooting issues, applying updates and patches, and optimizing network performance.</li>
              <li>Diagnosing and resolving network-related issues.</li>
            </ul>
          </div>
          <Link to="/applyNow">
          <button className="view-apply">View & Apply</button></Link>
        </div>
      </section>

      <section>
        <div className="job-description-career">
          <h5 className="network-career">HR Executive</h5>
          <div className="job-responsibilities-career">
            <h3 className="responsibilities-career">Responsibilities</h3>
            <ul className="unordered-career">
              <li>Maintain HR documentation, such as Employee Handbook, Standard Operating Procedures, Policies and Guidelines, Service Agreements, and Contracts of Employment.</li>
              <li>Help employees with their appraisals, and employee benefits packages.</li>
              <li>Deal with and investigate employee complaints without any bias.</li>
              <li>Maintaining compliance with the state, federal, or local labor or employment laws.</li>
            </ul>
          </div>
          <Link to="/applyNow">
          <button className="view-apply">View & Apply</button></Link>
        </div>
      </section>

      <section>
        <div className="job-description-career">
          <h5 className="network-career">Accountant</h5>
          <div className="job-responsibilities-career">
            <h3 className="responsibilities-career">Responsibilities</h3>
            <ul className="unordered-career">
              <li>Diploma or Certificate required. Associate's degree in Accounting or related field preferred.</li>
              <li>Reinforce financial data confidentiality and conduct database backups when necessary</li>
              <li>Audit financial transactions and documents</li>
              <li>Excellent knowledge of accounting regulations and procedures, including the Generally Accepted Accounting Principles (GAAP)</li>
            </ul>
          </div>
          <Link to="/applyNow">
          <button className="view-apply">View & Apply</button></Link>
        </div>
      </section>

      <section>
        <div className="job-description-career">
          <h5 className="network-career">Sales Executive</h5>
          <div className="job-responsibilities-career">
            <h3 className="responsibilities-career">Responsibilities</h3>
            <ul className="unordered-career">
              <li>Learn how products work and how to troubleshoot issues with customers</li>
              <li>Prepare and submit weekly sales reports to management</li>
              <li>Assist other team members with transactions when necessary</li>
              <li>Meet weekly, monthly and quarterly sales quotas</li>
            </ul>
          </div>
          <Link to="/applyNow">
          <button className="view-apply">View & Apply</button></Link>
        </div>
      </section>
      </div>

      <h3 className="footer-career">For More Inquiry Contact: support@atcinfocom.in</h3> </div>

    
    </>

  );
};

export default Careers;
