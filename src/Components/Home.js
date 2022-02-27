import './Home.css';
import React, { useState } from 'react';
import Header from './Header';
import PokemonCard from './PokemonCard';

export default function Home() {

  const API_URL = 'https://api.pokemontcg.io/v2'

  const [inputValue, setInputValue] = useState('');
  const [cardList, setCardList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/cards?q=name:${inputValue}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result.data);
        setCardList(result.data);
      })
  }

  console.log(inputValue);
  console.log(cardList);
  return (
    <div>
      <Header onSearchSubmit={onSearchSubmit} handleInputChange={handleInputChange} />
      <div className='cardDetails'>
        <div className='card'></div>
        <div className='detail'></div>
      </div>
      <div className='cardList'>
        {cardList.length > 0 ? cardList.map((card) => {
          return (<PokemonCard img={card.images.small} name={card.name} key={card.id} />)
        }) : null}
      </div>
    </div>
  )
}
