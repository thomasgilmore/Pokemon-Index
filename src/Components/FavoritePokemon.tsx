import React, { useContext } from 'react';
import './FavoritePokemon.css';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard.tsx';
import { PokemonContext } from '../Context/Context.tsx';

export default function FavoritePokemon() {
  const { cardList } = useContext(PokemonContext)

  const secondAppStore = JSON.parse(localStorage.getItem("second-app-store"))
  const favoritePokemonCards = secondAppStore.favoriteCards;

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  }

  console.log(cardList)
  console.log(favoritePokemonCards);

  return (
    <div className='favorite-pokemon-container'>
      <header className='favorite-pokemon-container__header'>
        <h1 className='favorite-pokemon__header-title'>Favorite Pokemon</h1>
        <span onClick={handleGoToHome} className='favorite-pokemon__header-home-link'>Home</span>
      </header>
      <div className='cardList'>
        {/* {favoritePokemonCards.length > 0 ? favoritePokemonCards.map((card) => {
            return (<PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave} />)
          }) : null} */}
        {favoritePokemonCards && (
          favoritePokemonCards.map((card) =>
            <PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} hideDeleteButton={false} />
          )
        )}
      </div>
    </div>
  )
}
