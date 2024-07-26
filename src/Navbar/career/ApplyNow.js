import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Update this line

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    currentEmployee: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    jobPosition: '',
    message: '',
    cvFile: null,
  });

  const navigate = useNavigate(); // Use useNavigate

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      await axios.post('http://localhost:8006/api/apply', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/success'); // Navigate to success page on successful submission
    } catch (error) {
      console.error('Error submitting application', error);
      alert('Error submitting application');
    }
  };

  return (
    <ApplyNowBackground>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Apply Now!</h2>
        <FlexContainer>
          <InputField>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </InputField>
        </FlexContainer>
        <FlexContainer>
          <InputField>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <label>Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </InputField>
        </FlexContainer>
        <FlexContainer>
          <InputField>
            <label>Working</label>
            <input
              type="text"
              name="currentEmployee"
              value={formData.currentEmployee}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </InputField>
        </FlexContainer>
        <FlexContainer>
          <InputField>
            <label>Current Salary</label>
            <input
              type="number"
              name="currentSalary"
              value={formData.currentSalary}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputField>
            <label>Expected Salary</label>
            <input
              type="number"
              name="expectedSalary"
              value={formData.expectedSalary}
              onChange={handleChange}
              required
            />
          </InputField>
        </FlexContainer>
        <InputField>
          <label>Apply For</label>
          <select
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
            required
          >
            <option value="">Select Position</option>
            <option value="sales-executive">Sales Executive</option>
            <option value="hr-executive">HR Executive</option>
            <option value="accountant">Accountant</option>
            <option value="network-engineer">Network Engineer</option>
          </select>
        </InputField>
        <InputField>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </InputField>
        <FlexContainer>
          <FileUploadField>
            <label>Upload CV</label>
            <input
              type="file"
              name="cvFile"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
          </FileUploadField>
        </FlexContainer>
        <p><label>Upload your CV/Resume or any other relevant file. Max file size 50 MB</label></p>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </ApplyNowBackground>
  );
};

const ApplyNowBackground = styled.div`
  background-color: white;
  min-height: 100vh; /* Cover the entire viewport height */
  padding: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px; /* Initial width for smaller screens */
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    max-width: 50%; /* Adjust width for desktop screens */
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 20px; /* Add gap between flex items */
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  flex: 1;
  margin-right: 10px; /* Add right margin to each input field */

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, select, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%; /* Ensure inputs stretch to full width */
  }

  textarea {
    resize: vertical;
  }
`;

const FileUploadField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;

  label {
    font-weight: bold;
  }

  input {
    flex: 1;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ApplyNowForm;
