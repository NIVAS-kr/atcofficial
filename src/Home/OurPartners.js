import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurPartners.css';

const PartnerCarousel = () => {
  const partners = [
    "https://atcinfocom.in/assets/img/tata-partner.jpg",
    "https://atcinfocom.in/assets/img/airtal-partner.jpg",
    "https://atcinfocom.in/assets/img/jio-partner.jpg",
    "https://atcinfocom.in/assets/img/vodafone-partner.jpg",
    // Additional URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of images to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust number of slides for mobile view
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust number of slides for tablet view
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="partner-carousel-container">
      <Slider {...settings} className="partner-carousel">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <img src={partner} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerCarousel;
