import React from 'react';
import './header.css';

export default function Header({ toggleViewLogin }) {
  return (
    <nav className='header-container'>
      <h1 className='header-container__title'>Favorite Movies</h1>
      <input type="text" className='header-container__input' />
      <button className='header-container__login-button' onClick={toggleViewLogin}>Login</button>
      <button className='header-container__register-button'>Register</button>
    </nav>
  )
}
