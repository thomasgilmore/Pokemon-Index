import { useContext, createContext, useState, useEffect } from "react"
import { API_URL } from "../Constants/Constants";

// INIT LOCAL STORAGE
const AppState = {
    isSignedIn: false,
    favoriteCards: [],
    userInfo: [],
}


const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
    // State
    const [inputValue, setInputValue] = useState('');
    const [cardToDisplay, setCardToDisplay] = useState('');
    const [nameToDisplay, setNameToDisplay] = useState('');
    const [detailsToDisplay, setDetailsToDisplay] = useState('');
    const [cardList, setCardList] = useState([]);
    const [favoritePokemonCards, setFavoritePokemonCards] = useState([]);
    const [googleUserData, setGoogleUserData] = useState([]);
    const [userGoogleId, setUserGoogleId] = useState('');
    const [userToken , setUserToken] = useState('');
    const [userFavoritesPokemon, setUserFavoritesPokemon] = useState([]);
    const [isSignedInState, setIsSignedInState] = useState(false);

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
        setCardToDisplay(filteredArray[0].images.large);
        setNameToDisplay(filteredArray[0].name);
        setDetailsToDisplay(filteredArray[0].attacks);
      }

    const handlePokemonCardDelete = (event) => {
        event.preventDefault();
        let secondAppStore = JSON.parse(localStorage.getItem('second-app-store'));
        let isSignedIn = secondAppStore.isSignedIn;
        const cardId = event.target.name;
        if (isSignedIn) {
        let userObject = secondAppStore.userInfo.filter((user) => user.googleId === userGoogleId);
        let allTheOtherCards = userObject[0].favoritePokemon.filter((card) => card.id !== cardId)
        userObject[0].favoritePokemon = allTheOtherCards;
        localStorage.setItem("second-app-store", JSON.stringify(secondAppStore))
        setUserFavoritesPokemon(secondAppStore);
        } else {
            let allTheOtherCards = secondAppStore.favoriteCards.filter((card) => card.id !== cardId)
            secondAppStore.favoriteCards = allTheOtherCards;
            localStorage.setItem("second-app-store", JSON.stringify(secondAppStore))
            setFavoritePokemonCards(allTheOtherCards); 
        }
    }

    const handlePokemonCardSave = (event) => {
        event.preventDefault();
        let secondAppStore = JSON.parse(localStorage.getItem('second-app-store'));
        let isSignedIn = secondAppStore.isSignedIn;
        event.target.style = 'background: yellow';
        const cardId = event.target.name;
        if (isSignedIn) {
        let userObject = secondAppStore.userInfo.filter((user) => user.googleId === userGoogleId);
        const isSaved = userObject[0].favoritePokemon.some((card) => card.id === cardId)
        const cardToSave = cardList.find((card) => card.id === cardId)
        if (!isSaved) {
            userObject[0].favoritePokemon.push(cardToSave)
            localStorage.setItem('second-app-store', JSON.stringify(secondAppStore));
            setUserFavoritesPokemon(secondAppStore);
        }
        } else {
            // let favoritePokemonCards = secondAppStore.favoriteCards;
            console.log(secondAppStore.favoriteCards);
            const isSaved = secondAppStore.favoriteCards.some((card) => card.id === cardId)
            console.log(isSaved);
            const cardToSave = cardList.find((card) => card.id === cardId)
            if (!isSaved) {
                // let newFavoriteArr = secondAppStore.favoriteCards
                secondAppStore.favoriteCards.push(cardToSave)
                localStorage.setItem("second-app-store", JSON.stringify(secondAppStore))
                setFavoritePokemonCards(secondAppStore);
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
        let secondAppStore = JSON.parse(localStorage.getItem("second-app-store"));
        secondAppStore.isSignedIn = false;
        localStorage.setItem("second-app-store", JSON.stringify(secondAppStore));
        setIsSignedInState(false);
        setUserToken('');
        setUserGoogleId('');
    }

    // Fetch on component did mount
    useEffect(() => {
        fetch(`${API_URL}/cards`)
        .then(res => res.json())
        .then((result) => {
        setCardList(result.data);
        })
        if (localStorage.length < 1) {
            localStorage.setItem("second-app-store", JSON.stringify(AppState));
        }
    }, []);

    const value = {
        cardList,
        setCardList,
        inputValue,
        setInputValue,
        cardToDisplay,
        setCardToDisplay,
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
        userFavoritesPokemon,
        setUserFavoritesPokemon,
        isSignedInState,
        setIsSignedInState,
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