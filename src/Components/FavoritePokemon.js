import React from 'react';
import './FavoritePokemon.css';
import { Link } from 'react-router-dom';
import PokemonCard from './PokemonCard';

export default function FavoritePokemon({ favoritePokemonCards, handlePokemonCardChange, handlePokemonCardSave }) {
  return (
    <div className='favorite-pokemon-container'>
      <header className='favorite-pokemon-container__header'>
        <h1 className='favorite-pokemon__header-title'>Favorite Pokemon</h1>
        <Link to='/' className='favorite-pokemon__header-home-link'>Home</Link>
      </header>
      <div className='cardList'>
          {favoritePokemonCards.length > 0 ? favoritePokemonCards.map((card) => {
            return (<PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave} />)
          }) : null}
      </div>
    </div>
  )
}
