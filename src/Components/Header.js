import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header({ onSearchSubmit, handleInputChange }) {
  return (
    <nav className='header-container'>
      <h1 className='header-container__title'>Favorite Movies</h1>
      <form onSubmit={onSearchSubmit}>
        <input type="text" onChange={handleInputChange} className='header-container__input' />
      </form>
      <Link className='header-container__login-link' to="login">
        <button className='header-container__login-button'>Login</button>
      </Link>
      <button className='header-container__register-button'>Register</button>
    </nav>
  )
}
