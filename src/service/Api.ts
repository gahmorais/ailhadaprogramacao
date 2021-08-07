import axios from "axios";
import {
  IPokemonPage,
  IPokemonData,
  IAbilities,
  IAbilityPage,
  IType,
  ITypePage,
} from "../interfaces/interface";

export async function getPokemons(): Promise<IPokemonPage> {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  );
  return data;
}

export async function getPokemonPagination(url: string): Promise<IPokemonPage> {
  const { data } = await axios.get(url);
  return data;
}

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

export async function getAbilities(url: string): Promise<IAbilityPage> {
  const { data } = await axios.get(url);
  return data;
}

export async function getTypesPagination(url: string): Promise<ITypePage> {
  const { data } = await axios.get(url);
  return data;
}

export async function getTypeByUrl(url: string): Promise<IType> {
  const { data } = await axios.get(url);
  return data;
}
export async function getTypeById(id: string): Promise<IType> {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
  return data;
}
