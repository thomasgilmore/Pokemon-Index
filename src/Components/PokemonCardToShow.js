import React from 'react';
import './PokemonCardToShow.css';

export default function PokemonCardToShow({ img, title }) {
  return (
    <img className='pokemon-card-to-show__img' src={img} alt={title} />
  )
}
