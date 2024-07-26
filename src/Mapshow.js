import React from 'react'

const Mapshow = () => {
  return (
    <div>
     
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          
          <iframe
            title="ATC InfoCom Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.424901651216!2d77.27229517549695!3d28.526945625722636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce12db81380a7%3A0xac1caf50409b6397!2sATC%20INFOCOM%20SOLUTIONS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1693809946900!5m2!1sen!2sin"
            style={{ width: "85%", height: "400px", border: "0" }} // Adjusted dimensions and removed unnecessary styles
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </div>
  )
}

export default Mapshow;
