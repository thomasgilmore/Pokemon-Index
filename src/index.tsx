import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { PokemonContextProvider } from "./Context/Context";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <PokemonContextProvider>
        <App />
      </PokemonContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
