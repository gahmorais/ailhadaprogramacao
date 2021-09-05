import axios from "axios";
import {
  IPokemonData,
  IAbilities,
  IType,
  IPage,
  IPokemon,
} from "interfaces/interface";

export async function getPokemonDataByUrl(url: string): Promise<IPokemonData> {
  const { data: PokemonData } = await axios.get(url);
  return PokemonData;
}

export async function getPokemonDataById(id: string): Promise<IPokemonData> {
  const { data:PokemonData  } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return PokemonData;
}

export async function getAbilitiesByUrl(url: string): Promise<IAbilities> {
  const { data: abilities } = await axios.get(url);
  return abilities;
}
export async function getAbilitiesById(id: string): Promise<IAbilities> {
  const { data: abilities } = await axios.get(`https://pokeapi.co/api/v2/ability/${id}`);
  return abilities;
}

export async function getPagination(url: string): Promise<IPage> {
  const { data: pageData } = await axios.get(url);
  return pageData;
}

export async function searchPokemon(value: string): Promise<IPokemon[]> {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118`
  );
  const filteredPokemons = data.results.filter((pokemon: IPokemon) =>
    pokemon.name.includes(value.toLowerCase())
  );

  return filteredPokemons;
}

export async function getTypeByUrl(url: string): Promise<IType> {
  const { data: types } = await axios.get(url);
  return types;
}
export async function getTypeById(id: string): Promise<IType> {
  const { data: types } = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
  return types;
}
