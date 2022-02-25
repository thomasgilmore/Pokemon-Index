import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {

  let searchInput = document.getElementsByClassName('header-container__input');

  const onSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchInput[0].value);
    let searchTerm = searchInput[0].value
    fetch(`https://imdb-api.com/en/API/Search/${process.env.REACT_APP_IMDB_API}/${searchTerm}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      })
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home onSearchSubmit={onSearchSubmit} />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
