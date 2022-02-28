import './Home.css';
import React, { useState } from 'react';
import Header from './Header';
import PokemonCardToShow from './PokemonCardToShow';
import PokemonCardDetails from './PokemonCardDetails';
import PokemonCard from './PokemonCard';

export default function Home() {

  const API_URL = 'https://api.pokemontcg.io/v2'

  const [inputValue, setInputValue] = useState('');
  const [cardToDisplay, setcardToDisplay] = useState('');
  const [nameToDisplay, setNameToDisplay] = useState('');
  const [detailsToDisplay, setDetailsToDisplay] = useState('');
  const [cardList, setCardList] = useState([]);
  const [favoritePokemonCards, setFavoritePokemonCards] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/cards?q=name:${inputValue}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result.data);
        setCardList(result.data);
      })
  }

  const handlePokemonCardChange = (event) => {
    event.preventDefault();
    console.log(event);
    let filteredArray = cardList.filter((card) => {
      return card.id === event.target.name;
    });
    console.log(filteredArray);
    setcardToDisplay(filteredArray[0].images.large);
    setNameToDisplay(filteredArray[0].name);
    setDetailsToDisplay(filteredArray[0].attacks);
  }

  const handlePokemonCardSave = (event) => {
    event.preventDefault();
    console.log(event);
    let allPokemonCardsToSave = [];
    let pokemonCardToFavorite = cardList.filter((card) => {
      return card.id === event.target.name;
    })
    allPokemonCardsToSave = [...favoritePokemonCards, ...pokemonCardToFavorite];
    console.log(allPokemonCardsToSave);
    setFavoritePokemonCards(allPokemonCardsToSave);
  }

  console.log(inputValue);
  console.log(cardList);
  console.log(nameToDisplay);
  return (
    <div>
      <Header handleSearchSubmit={handleSearchSubmit} handleInputChange={handleInputChange} />
      <div className='cardDetails'>
        <div className='card'>
          {cardList.length > 0 ? <PokemonCardToShow img={cardToDisplay || cardList[0].images.large} title={nameToDisplay || cardList[0].name} /> : null}
        </div>
        <div className='detail'>
          {cardList.length > 0 ? <PokemonCardDetails title={nameToDisplay || cardList[0].name} attacks={detailsToDisplay || cardList[0].attacks} /> : null}
        </div>
      </div>
      <div className='cardList'>
        {cardList.length > 0 ? cardList.map((card) => {
          return (<PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave} />)
        }) : null}
      </div>
    </div>
  )
}
