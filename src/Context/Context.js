import { useContext, createContext, useState, useEffect } from "react"
import { API_URL } from "../Constants/Constants";

// INIT LOCAL STORAGE
const AppState = {
    isSignedIn: false,
    favoriteCards: [],
}


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
    const [userGoogleId, setUserGoogleId] = useState('');
    const [userToken , setUserToken] = useState('');
    const [userFavoritesPokemon, setUserFavoritesPokemon] = useState([]);

    let token = localStorage.getItem('user-token');

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
        if (token) {
        let favoritePokemonCards = JSON.parse(localStorage.getItem(userGoogleId))
        let allTheOtherCards = favoritePokemonCards.filter((card) => card.id !== cardId)
        localStorage.setItem(userGoogleId, JSON.stringify(allTheOtherCards))
        setUserFavoritesPokemon(allTheOtherCards);
        } else {
            let favoritePokemonCards = JSON.parse(localStorage.getItem("favorite_pokemon"))
            let allTheOtherCards = favoritePokemonCards.filter((card) => card.id !== cardId)
            localStorage.setItem("favorite_pokemon", JSON.stringify(allTheOtherCards))
            setFavoritePokemonCards(allTheOtherCards); 
        }
    }

    const handlePokemonCardSave = (event) => {
        event.preventDefault();
        event.target.style = 'background: yellow';
        const cardId = event.target.name;
        if (token) {
        let favoritePokemonCards = JSON.parse(localStorage.getItem(userGoogleId))
        const isSaved = favoritePokemonCards.some((card) => card.id === cardId)
        const cardToSave = cardList.find((card) => card.id === cardId)
        if (!isSaved) {
            let newFavoriteArr = favoritePokemonCards
            newFavoriteArr.push(cardToSave)
            localStorage.setItem(userGoogleId, JSON.stringify(newFavoriteArr))
            setUserFavoritesPokemon(newFavoriteArr);
        }
        } else {
            let favoritePokemonCards = JSON.parse(localStorage.getItem("favorite_pokemon"))
            const isSaved = favoritePokemonCards.some((card) => card.id === cardId)
            const cardToSave = cardList.find((card) => card.id === cardId)
            if (!isSaved) {
                let newFavoriteArr = favoritePokemonCards
                newFavoriteArr.push(cardToSave)
                localStorage.setItem("favorite_pokemon", JSON.stringify(newFavoriteArr))
                setFavoritePokemonCards(newFavoriteArr);
            }
        } 
    }

    const handleCheckUser = (googleId) => {
        let userFavorites = JSON.parse(localStorage.getItem(googleId))
        if (!userFavorites) {
            let userFavoritesPokemon = [];
            localStorage.setItem(googleId, JSON.stringify(userFavoritesPokemon))
        }
    }

    const handleSignOut = () => {
        localStorage.removeItem('user-token');
        setUserToken('');
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
        userGoogleId,
        setUserGoogleId,
        handleCheckUser,
        handleSignOut,
        userToken, 
        setUserToken,
        token,
        userFavoritesPokemon,
        setUserFavoritesPokemon,
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