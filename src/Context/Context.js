import { useContext, createContext, useState, useEffect } from "react"
import { API_URL } from "../Constants/Constants";

const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
    // State
    const [inputValue, setInputValue] = useState('');
    const [cardToDisplay, setcardToDisplay] = useState('');
    const [nameToDisplay, setNameToDisplay] = useState('');
    const [detailsToDisplay, setDetailsToDisplay] = useState('');
    const [cardList, setCardList] = useState([]);
    const [favoritePokemonCards, setFavoritePokemonCards] = useState([]);
    const [googleUserData, setGoogleUserData] = useState([]);

    // Functions
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetch(`${API_URL}/cards?q=name:${inputValue}`)
            .then(res => res.json())
            .then((result) => {
            setCardList(result.data);
            })
    }

    const handlePokemonCardChange = (event) => {
        event.preventDefault();
        let filteredArray = cardList.filter((card) => {
          return card.id === event.target.name;
        });
        setcardToDisplay(filteredArray[0].images.large);
        setNameToDisplay(filteredArray[0].name);
        setDetailsToDisplay(filteredArray[0].attacks);
      }

    const handlePokemonCardDelete = (event) => {
        event.preventDefault();
        const cardId = event.target.name;
        let allTheOtherCards = favoritePokemonCards.filter((card) => card.id !== cardId)
        setFavoritePokemonCards(allTheOtherCards);
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
        }
    }

    // Fetch on component did mount
    useEffect(() => {
        fetch(`${API_URL}/cards`)
        .then(res => res.json())
        .then((result) => {
        setCardList(result.data);
        })
    }, []);

    const value = {
        cardList,
        setCardList,
        inputValue,
        setInputValue,
        cardToDisplay,
        setcardToDisplay,
        nameToDisplay,
        setNameToDisplay,
        detailsToDisplay,
        setDetailsToDisplay,
        favoritePokemonCards,
        setFavoritePokemonCards,
        googleUserData,
        setGoogleUserData,
        handleSearchSubmit,
        handleInputChange,
        handlePokemonCardChange,
        handlePokemonCardDelete,
        handlePokemonCardSave,
    }
    return(
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    );
};

// Using the context
// const usePokemonContextProvider = () => {
//     const context = useContext(PokemonContext)
//     if(context === undefined) {
//         console.log('PokemonContext must be used within the provider')
//     }
//     return context
// }

// export { PokemonContextProvider, usePokemonContextProvider }

export { PokemonContextProvider, PokemonContext }