import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/profile.png';

const StyledCard = styled.div`
  width: 300px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 120px;
  padding: 8px;
  margin-top: 20px;
  cursor: pointer;
`;

export default function StyledProfileCard() {
  return (
    <StyledCard>
      <img
        src={profileImage}
        alt="avatar"
        style={{ borderRadius: '50%', width: '100px', display: 'block', margin: '0 auto' }}
      />
      <h2 style={{ color: '#000', fontSize: '20px', fontWeight: 'bold' }}>Matti Meikäläinen</h2>
      <p style={{ color: '#666' }}>Full-stack developer, passionate about coding and coffee</p>
      <StyledButton>Contact Me</StyledButton>
      <p style={{ color: '#666' }}>Created with Styled components</p>
    </StyledCard>
  );
}
