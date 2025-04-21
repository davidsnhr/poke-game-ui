import { useEffect, useState } from 'react';
import './App.css';
import Actions from './game/buttons/Actions';
import Pad from './game/buttons/Pad';
import StartSelect from './game/buttons/StartSelect';
import Screen from './game/screen';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(0);

  const BASE_URL = 'https://pokeapi.co/api/v2/';

  const getPokemones = async () => {
    const res = await fetch(`${BASE_URL}/pokemon`);
    const data = await res.json();
    const pokemonsDetails = await getDetails(data.results);
    setPokemones(pokemonsDetails);
  };

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map((gato) => gato.json()));
    return data;
  };

  const handlePress = (dir) => {
    console.log(dir);
    if (dir === 'right') {
      setHoverPokemon(hoverPokemon + 1);
    }
    if (dir === 'left') {
      setHoverPokemon(hoverPokemon - 1);
    }
  };

  const handleSelectPokemon = () => {
    console.log('select pokemon', hoverPokemon);
    const pokemonSelected = pokemones.filter(
      (pokemon) => pokemon.id === hoverPokemon
    );

    console.log({pokemonSelected});
  };

  useEffect(() => {
    getPokemones();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* container game */}
        <div className="container-game">
          <Screen pokemones={pokemones} hoverPokemon={hoverPokemon} />
          {/* container buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Pad handlePress={handlePress} />
            <StartSelect handleSelectPokemon={handleSelectPokemon} />
            <Actions />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
