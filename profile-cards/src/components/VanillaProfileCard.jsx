import React from 'react';
import './styles/ProfileCard.css';
import profileImage from '../assets/profile.png';

export default function VanillaProfileCard() {
  return (
    <div className="profile-card">
      <img src={profileImage} alt="avatar" className="profile-avatar" />
      <h2 className="profile-name">Matti Meikäläinen</h2>
      <p className="profile-description">Full-stack developer, passionate about coding and coffee</p>
      <button className="profile-button">Contact Me</button>
      <p className="profile-description">Created with Vanilla CSS</p>
    </div>
  );
}
