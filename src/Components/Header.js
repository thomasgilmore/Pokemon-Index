import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';
import { PokemonContext } from '../Context/Context';

export default function Header() {
  const { handleSearchSubmit, handleInputChange } = useContext(PokemonContext)
  const navigate = useNavigate();

  const handleGoToLoginPage = () => {
    navigate('login');
  }

  const handleGoToFavoritePokemonPage = () => {
    navigate('favoritepokemon');
  }

  return (
    <nav className='header-container'>
      <h1 className='header-container__title'>Favorite Pokemon</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" onChange={handleInputChange} className='header-container__input' />
      </form>
      <span onClick={handleGoToFavoritePokemonPage} className='header-container__favorite-pokemon-link'>Favorite Pokemon</span>
      <button onClick={handleGoToLoginPage} className='header-container__login-button'>Login</button>
      <button className='header-container__register-button'>Register</button>
    </nav>
  )
}
