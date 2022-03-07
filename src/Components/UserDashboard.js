import React, { useEffect } from 'react';
import './UserDashboard.css';

export default function UserDashboard({ googleUserData }) {
  let profileImg = 'loading...';
  let userName
  let userEmail

  useEffect(() => {
    setTimeout(() => {
      console.log(googleUserData.profileObj);
      profileImg = googleUserData.profileObj.imageUrl;
      userName = googleUserData.profileObj.name;
      userEmail = googleUserData.profileObj.email;
    }, 1500)
  }, [])

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
