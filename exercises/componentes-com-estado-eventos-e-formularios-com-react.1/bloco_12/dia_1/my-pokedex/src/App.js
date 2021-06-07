import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="header">
     <h1> Pokemons!</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
