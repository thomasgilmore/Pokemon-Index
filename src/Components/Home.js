import React, { useState } from 'react';
import Header from './Header';

export default function Home() {

  const API_URL = 'https://api.pokemontcg.io/v2'

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/cards?q=name:${inputValue}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      })
  }

  console.log(inputValue);
  return (
    <div>
      <Header onSearchSubmit={onSearchSubmit} handleInputChange={handleInputChange} />
      <div className='cardDetails'>
        <div className='card'></div>
        <div className='detail'></div>
      </div>
      <div className='cardList'></div>
    </div>
  )
}
