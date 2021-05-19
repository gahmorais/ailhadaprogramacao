import { useEffect, useState } from "react";
import { getAllPokemons } from "./api/Api";

function App() {
  const [pokemons, setPokemons] = useState("");

  useEffect(() => {
    async function setAllPokemons() {
      setPokemons(await getAllPokemons());
    }

    setAllPokemons();
  }, []);

  console.log(pokemons.results);

  return (
    <div className="App">
    <h1>Pokedex</h1>
      {pokemons && pokemons.results.map( pokemon => <div>{`${pokemon.name} - ${pokemon.url}`}</div>)}
    </div>
  );
}

export default App;
