import React, { useContext } from 'react';
import './Home.css';
import Header from './Header';
import PokemonCardToShow from './PokemonCardToShow';
import PokemonCardDetails from './PokemonCardDetails';
import PokemonCard from './PokemonCard.tsx';
import { PokemonContext } from '../Context/Context';

export default function Home() {
  const { cardList, nameToDisplay, cardToDisplay, detailsToDisplay } = useContext(PokemonContext)
  console.log("home", cardList)
  return (
    <div>
      <Header />
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
          return (<PokemonCard img={card.images.small} name={card.name} cardId={card.id} key={card.id} hideDeleteButton={true} />)
        }) : null}
      </div>
    </div>
  )
}
