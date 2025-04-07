import { useEffect, useState } from 'react';
import './App.css';
import Actions from './game/buttons/Actions';
import Pad from './game/buttons/Pad';
import StartSelect from './game/buttons/StartSelect';
import Screen from './game/screen';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const getPokemons = async () => {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    try {
      const res = await fetch(`${baseUrl}pokemon`);
      if (res.ok) {
        const pokemonList = await res.json();
        console.log(pokemonList);
        const pokemonDetails = await getPokeDetails(pokemonList.results);

        setPokemones(pokemonDetails);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const getPokeDetails = async (pokemonList) => {
    try {
      const details = await Promise.all(
        pokemonList.map((pokemon) => fetch(pokemon.url))
      );
      const result = await Promise.all(details.map((detail) => detail.json()));
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* container game */}
        <div className="container-game">
          <Screen pokemones={pokemones} />
          {/* container buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Pad />
            <StartSelect />
            <Actions />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
