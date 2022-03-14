import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';
import { PokemonContext } from '../Context/Context';

export default function Header() {
  const { handleSearchSubmit, handleInputChange, handleSignOut, isSignedInState } = useContext(PokemonContext)
  const navigate = useNavigate();

  const handleGoToLoginPage = () => {
    navigate('login');
  }

  const handleGoToFavoritePokemonPage = () => {
    navigate('favoritepokemon');
  }

  const handleGoToUserDashboard = () => {
    navigate('/userdashboard');
  }

  return (
    <nav className='header-container'>
      <h1 className='header-container__title'>Favorite Pokemon</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" onChange={handleInputChange} className='header-container__input' />
      </form>
      {isSignedInState ? 
        <React.Fragment>
        <span onClick={handleGoToUserDashboard} className='header-container__user-dashboard-link'>User Dashboard</span> 
        <button onClick={handleSignOut} className='header-container__sign-out-button'>Sign Out</button>
        </React.Fragment>
      : 
      <React.Fragment>
        <span onClick={handleGoToFavoritePokemonPage} className='header-container__favorite-pokemon-link'>Favorite Pokemon</span>
        <button onClick={handleGoToLoginPage} className='header-container__login-button'>Login</button>
        <button className='header-container__register-button'>Register</button>
      </React.Fragment> 
    }
    </nav>
  )
}
