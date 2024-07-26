import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const images = [
  'https://atcinfocom.in/assets/img/dtdc.png',
  'https://atcinfocom.in/assets/img/jims.png',
  'https://atcinfocom.in/assets/img/fipkart.png',
  'https://atcinfocom.in/assets/img/amazon.png',
  'https://atcinfocom.in/assets/img/jk3.png',
  'https://atcinfocom.in/assets/img/shaadi.png',
  'https://atcinfocom.in/assets/img/nexa.png',
  'https://atcinfocom.in/assets/img/acc-cement.png',
  'https://atcinfocom.in/assets/img/mercedes.png',
  'https://atcinfocom.in/assets/img/goodrez.png',
  'https://atcinfocom.in/assets/img/pnb.png',
  'https://atcinfocom.in/assets/img/xpress.png',
  'https://atcinfocom.in/assets/img/admiral.png',
  'https://atcinfocom.in/assets/img/amity.png',
  'https://atcinfocom.in/assets/img/max.png',
  'https://atcinfocom.in/assets/img/gati.png',
  'https://atcinfocom.in/assets/img/ecom-express.png',
  'https://atcinfocom.in/assets/img/dtdc.png',
  'https://atcinfocom.in/assets/img/jims.png',
  'https://atcinfocom.in/assets/img/fipkart.png',
  'https://atcinfocom.in/assets/img/amazon.png',
  'https://atcinfocom.in/assets/img/jk3.png',
  'https://atcinfocom.in/assets/img/shaadi.png',
  'https://atcinfocom.in/assets/img/nexa.png',
  'https://atcinfocom.in/assets/img/acc-cement.png',
  'https://atcinfocom.in/assets/img/mercedes.png',
  'https://atcinfocom.in/assets/img/goodrez.png',
  'https://atcinfocom.in/assets/img/pnb.png',
  'https://atcinfocom.in/assets/img/xpress.png',
  'https://atcinfocom.in/assets/img/admiral.png',
  'https://atcinfocom.in/assets/img/amity.png',
  'https://atcinfocom.in/assets/img/max.png',
  'https://atcinfocom.in/assets/img/gati.png',
  'https://atcinfocom.in/assets/img/ecom-express.png',
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    overflow: visible;
  }
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateX}%);
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 150px;
  height: 50px;
  object-fit: contain;
  margin-right: 40px;
  margin-top: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: calc(100% - 20px); /* Adjust width to account for margin */
    padding-right: 10px;
  }
`;

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border: 2px solid #E03A3C;
  border-radius: 50%;
  margin: 20px 5px;
  cursor: pointer;
  &.active {
    background-color: #E03A3C;
    border: 1px solid red;
  }
`;

const ClientSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const intervalRef = useRef(null);
  const length = images.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % length;
        setTranslateX((newIndex / length) * -100);
        return newIndex;
      });
    }, 5430);

    return () => clearInterval(intervalRef.current);
  }, [length]);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
    setTranslateX((index / length) * -100);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % length;
        setTranslateX((newIndex / length) * -100);
        return newIndex;
      });
    }, 5430);
  };

  useEffect(() => {
    if (activeIndex === length) {
      setTimeout(() => {
        setTranslateX(0);
        setActiveIndex(0);
      }, 500);
    }
  }, [activeIndex, length]);

  return (
    <Container>
      <CarouselWrapper>
        <CarouselInner translateX={translateX}>
          {images.concat(images).map((image, index) => (
            <Image src={image} alt={`carousel-img-${index}`} key={index} />
          ))}
        </CarouselInner>
      </CarouselWrapper>
      <CircleWrapper>
        {images.map((_, index) => (
          <Circle
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </CircleWrapper>
    </Container>
  );
};

export default ClientSlider;
