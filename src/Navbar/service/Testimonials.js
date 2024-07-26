import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jatin',
      text: 'ATC Infocom Solutions is our go-to for IT support. Their proactive approach to preventing issues has saved us time and money.',
    },
    {
      name: 'Sakshi Sankhla',
      text: 'Excellent internet speeds, consistent connection, and reliable customer support.',
    },
    {
      name: 'Raj Kr Roy',
      text: 'One of the top ISP/Telecom Company in Delhi, which served entire Country.',
    },
    {
      name: 'Tanisha',
      text: 'Nice .. ATC TOWER IN PAN INDIA.',
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    if (mediaQuery.matches) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(1);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>TESTIMONIALS</h2>
          <hr />
          <p></p>
        </div>
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <div className="testimonial-wrap">
                <h4 >{testimonial.name}</h4>
                <p>
                  <ImQuotesLeft className="quote-icon-left" />
                  {testimonial.text}
                  <ImQuotesRight className="quote-icon-right" />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;