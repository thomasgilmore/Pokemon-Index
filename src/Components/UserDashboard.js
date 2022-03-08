import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import PokemonCard from './PokemonCard';

export default function UserDashboard({ googleUserData, favoritePokemonCards, handlePokemonCardChange, handlePokemonCardSave, handlePokemonCardDelete }) {
  let profileImg = googleUserData.profileObj.imageUrl;
  let userName = googleUserData.profileObj.name;
  let userEmail = googleUserData.profileObj.email;

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  }

  console.log(googleUserData);
  return (
    <div>
      <nav className='user-dashboard__container'>
        <h1 className='user-dashboard__title'>User Dashboard</h1>
          <span onClick={handleGoToHome} className='user-dashboard__home-link'>Home</span>
          <img className='user-dashboard__profile-img' src={profileImg} alt="user image" />
          <span className='user-dashboard__information'>
          <span className='user-dashboard__user-name'>{userName}</span>
          <span className='user-dashboard__user-email'>{userEmail}</span>
        </span>
      </nav>
      <div className='cardList'>
          {favoritePokemonCards && (
            favoritePokemonCards.map((card) => 
            <PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave} handlePokemonCardDelete={handlePokemonCardDelete} hideDeleteButton={false} />
            )
          )}
      </div>
    </div>
  )
}
