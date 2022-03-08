import React, { useEffect } from 'react';
import './UserDashboard.css';

export default function UserDashboard({ googleUserData }) {
  let profileImg = googleUserData.profileObj.imageUrl;
  let userName = googleUserData.profileObj.name;
  let userEmail = googleUserData.profileObj.email;

  console.log(googleUserData);
  return (
      <nav className='user-dashboard__container'>
        <h1 className='user-dashboard__title'>User Dashboard</h1>
          <img className='user-dashboard__profile-img' src={profileImg} alt="user image" />
          <span className='user-dashboard__information'>
          <span className='user-dashboard__user-name'>{userName}</span>
          <span className='user-dashboard__user-email'>{userEmail}</span>
        </span>
      </nav>
  )
}
