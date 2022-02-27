import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ img, name }) {
  return (
    <img src={img} alt={name} className="pokemon-card__img" />
  )
}
