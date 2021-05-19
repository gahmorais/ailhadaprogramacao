import axios from "axios";

export async function getAllPokemons() {
  const allPokemons = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then((response) => response.data)
  return allPokemons;
}
