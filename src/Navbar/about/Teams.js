import React from 'react';
import './Teams.css'; // Make sure to adjust the CSS file name accordingly

const Team = () => {
  return (
    <div className="team">
      <h2 className="team-heading">Our Team Members</h2>
      <hr className="team-heading-hr" />
      <div className="cards-container" data-aos="fade-up" data-aos-delay="100" >
        {/* Card 1 */}
        <div className="card">
          <div className="card-content">
            <img src="https://atcinfocom.in/assets/img/user.webp" alt="User" className="card-image" />
            <h3>Jitender Sharma</h3>
            <p>CEO & MD</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="card-content">
            <img src="https://atcinfocom.in/assets/img/user.webp" alt="User" className="card-image" />
            <h3>Sarabjeet Maan</h3>
            <p>IT Manager</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <div className="card-content">
            <img src="https://atcinfocom.in/assets/img/user.webp" alt="User" className="card-image" />
            <h3>Maahi</h3>
            <p>Manager</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card">
          <div className="card-content">
            <img src="https://atcinfocom.in/assets/img/user.webp" alt="User" className="card-image" />
            <h3>Tanisha</h3>
            <p>Asst. Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
