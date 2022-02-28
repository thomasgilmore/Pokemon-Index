import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ img, name, cardId, handlePokemonCardChange }) {
  return (
    <button onClick={handlePokemonCardChange} className='pokemon-card__button'><img src={img} alt={name} name={cardId} className="pokemon-card__img" /></button>
  )
}
