import React from 'react';
import "./BackgroundSection.css";

const BackgroundSection = ({ showbackground =true ,children }) => {
  return (
    <>
     {showbackground && (<div className="background-section">
      {children}
    </div>
     )}
     </>
  );
};

export default BackgroundSection;
