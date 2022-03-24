import * as React from 'react';
import './PokemonCardToShow.css';

interface IPokemonCardToShowProps {
  img: string;
  title: string;
}

export default function PokemonCardToShow({ img, title }: IPokemonCardToShowProps) {
  return (
    <img className='pokemon-card-to-show__img' src={img} alt={title} />
  )
}
