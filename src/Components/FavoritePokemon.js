import React from 'react';
import './FavoritePokemon.css';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { usePokemonContextProvider } from '../Context/Context';

export default function FavoritePokemon({ favoritePokemonCards, handlePokemonCardChange, handlePokemonCardSave, handlePokemonCardDelete }) {
  const { cardList } = usePokemonContextProvider();

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  }

  console.log(cardList)

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
            <PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave} handlePokemonCardDelete={handlePokemonCardDelete} hideDeleteButton={false} />
            )
          )}
      </div>
    </div>
  )
}
