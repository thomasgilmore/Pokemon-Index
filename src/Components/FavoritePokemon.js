import React from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from './PokemonCard';

export default function FavoritePokemon({ favoritePokemonCards, handlePokemonCardChange, handlePokemonCardSave }) {
  return (
    <div>
      <h1 className=''>Favorite Pokemon</h1>
      <Link to='/'>Home</Link>
      <div className='cardList'>
          {favoritePokemonCards.length > 0 ? favoritePokemonCards.map((card) => {
            return (<PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave} />)
          }) : null}
      </div>
    </div>
  )
}
