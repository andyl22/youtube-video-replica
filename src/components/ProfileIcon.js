import React from "react";
import Profile from '../assets/images/profile.jpg';
import '../styles/ProfileIcon.css'

function ProfileIcon() {
  return (
    <a href='https://github.com/andyl22'>
      <img src={Profile} alt='gh-profile'></img>
    </a>
  )
}

export default ProfileIcon;