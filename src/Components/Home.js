import './Home.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import PokemonCardToShow from './PokemonCardToShow';
// import PokemonCardDetails from './PokemonCardDetails';
// import PokemonCard from './PokemonCard';
import FavoritePokemon from './FavoritePokemon';
import HomePage from './HomePage';

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

  const handleCheckIfSaved = (pokemonCard) => {
    const checkSavedArray = favoritePokemonCards.filter((card) => {
      if (card.id === pokemonCard[0].id) {
        return  true;
      } else {
        return false;
      }
    })
   return checkSavedArray
  }

  const handleRemovePokemonCard = (pokemonCard) => {
    let arrayWithRemovedPokemon = favoritePokemonCards.filter((card) => {
      return card.id !== pokemonCard[0].id;
    })
    return arrayWithRemovedPokemon;
  }

  const handlePokemonCardSave = (event) => {
    event.preventDefault();
    const cardId = event.target.name;
    const isSaved = favoritePokemonCards.some((card) => card.id === cardId)
    const cardToSave = cardList.find((card) => card.id === cardId)
    if (!isSaved) {
      let newFavoriteArr = favoritePokemonCards
      newFavoriteArr.push(cardToSave)
      setFavoritePokemonCards(newFavoriteArr)
      // console.log('triggered')
    }
    // console.log(isSaved)

    // console.log(event);
    // let allPokemonCardsToSave = [];
    // let pokemonCardToFavorite = cardList.filter((card) => {
    //   return card.id === event.target.name;
    // })
    // if (handleCheckIfSaved(pokemonCardToFavorite).length > 0) {
    //   allPokemonCardsToSave = handleRemovePokemonCard(pokemonCardToFavorite);
    // } else {
    //   allPokemonCardsToSave = [...favoritePokemonCards, ...pokemonCardToFavorite];
    // }
    // console.log(allPokemonCardsToSave);
    // setFavoritePokemonCards(allPokemonCardsToSave);
  }
  // const handlePokemonCardSaveNew = (event) => {
    
  // }
  // Fetch on component did mount
  useEffect(() => {
    fetch(`${API_URL}/cards`)
    .then(res => res.json())
    .then((result) => {
      console.log(result.data);
      setCardList(result.data);
    })
  }, []);

  console.log(favoritePokemonCards)

  // console.log(inputValue);
  // console.log(cardList);
  // console.log(nameToDisplay);
  return (
    <div>
      <Routes>
        <Route 
          path="/"
          element={<HomePage handleInputChange={handleInputChange} handleSearchSubmit={handleSearchSubmit} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave}
          cardToDisplay={cardToDisplay}
          detailsToDisplay={detailsToDisplay}
          cardList={cardList}
          nameToDisplay={nameToDisplay}
          />}
        />
        <Route path="favoritepokemon" element={<FavoritePokemon favoritePokemonCards={favoritePokemonCards} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave} />} />
      </Routes>
    </div>
  )
}
