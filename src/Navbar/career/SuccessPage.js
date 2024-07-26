import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';



const SuccessPage = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');; // Navigate back to the previous page
  };
  return (
    <SuccessContainer>
    <button className="close-button" onClick={handleClose}>
        <FaTimes />
      </button>
      <FaCheckCircle className="check-icon" />
      <h2>Application Submitted Successfully!</h2>
    </SuccessContainer>
  );
};

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #eaf8e4;
  color: #333;

  .check-icon {
    color: #28a745;
    font-size: 4rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export default SuccessPage;
