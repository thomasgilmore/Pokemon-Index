import React from 'react';
import Header from './Header';
import PokemonCardToShow from './PokemonCardToShow';
import PokemonCardDetails from './PokemonCardDetails';
import PokemonCard from './PokemonCard';
import { usePokemonContextProvider } from '../Context/Context';

export default function HomePage({ nameToDisplay, cardToDisplay, detailsToDisplay, handleInputChange, handleSearchSubmit, handlePokemonCardChange, handlePokemonCardSave, handlePokemonCardDelete }) {
  const { cardList } = usePokemonContextProvider()
  console.log("home", cardList)
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
          return (<PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} handlePokemonCardChange={handlePokemonCardChange} handlePokemonCardSave={handlePokemonCardSave} handlePokemonCardDelete={handlePokemonCardDelete} hideDeleteButton={true} />)
        }) : null}
      </div>
    </div>
  )
}
