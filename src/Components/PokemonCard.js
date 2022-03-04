import React from 'react';
import './PokemonCard.css';
import { MdOutlineFavorite } from "react-icons/md";

export default function PokemonCard({ img, name, cardId, handlePokemonCardChange, handlePokemonCardSave }) {
  return (
    <span className='pokemon-card-container'>
      <button className='pokemon-card__button' name={cardId} onClick={handlePokemonCardSave}>Save</button>
      <img  className="pokemon-card__img" src={img} alt={name} name={cardId} onClick={handlePokemonCardChange} />
    </span>
  )
}
