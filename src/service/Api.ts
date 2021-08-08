import axios from "axios";
import {
  IPokemonData,
  IAbilities,
  IType,
  IPage,
  IPokemon,
} from "../interfaces/interface";

export async function getPokemonDataByUrl(url: string): Promise<IPokemonData> {
  const { data } = await axios.get(url);
  return data;
}

export async function getPokemonDataById(id: string): Promise<IPokemonData> {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data;
}

export async function getAbilitiesByUrl(url: string): Promise<IAbilities> {
  const { data } = await axios.get(url);
  return data;
}
export async function getAbilitiesById(id: string): Promise<IAbilities> {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/ability/${id}`);
  return data;
}

export async function getPagination(url: string): Promise<IPage> {
  const { data } = await axios.get(url);
  return data;
}

export async function searchPokemon(value: string): Promise<IPokemon[]> {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118`
  );
  const filteredPokemons = data.results.filter((pokemon) =>
    pokemon.name.includes(value)
  );

  return filteredPokemons;
}

export async function getTypeByUrl(url: string): Promise<IType> {
  const { data } = await axios.get(url);
  return data;
}
export async function getTypeById(id: string): Promise<IType> {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
  return data;
}
