import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateX}%);
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 150px;
  height: 50px;
  object-fit: contain;
  margin-right: 90px;
  margin-top: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: calc(100% - 20px); /* Adjust width to account for margin */
    padding-right: 10px;
    margin-right: 0; /* Remove right margin for mobile */
  }
`;

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Circle = styled.div`
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
