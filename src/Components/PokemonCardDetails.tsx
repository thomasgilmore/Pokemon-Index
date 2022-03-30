import React from 'react';
import './PokemonCardDetails.css';

export default function PokemonCardDetails({ title, attacks }) {
  return (
    <div className='pokemon-card-details__container'>
      <h1 className='pokemon-card-details__title'>{title}</h1>
      {attacks.map(attack => {
        return (<p key={attack.name} className='pokemon-card-details__attack'><b>{attack.name}: </b>
          {attack.text}</p>)
      })}
    </div>
  )
}
