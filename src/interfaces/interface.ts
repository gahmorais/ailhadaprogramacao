export interface IPokemonPage {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

export interface IAbilityPage {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

interface IEffect {
  effect: string;
  language: {
    name: string;
    url: string;
  };
}

interface IFlavorTextEntries {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

interface INamesAbilities {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

interface IPokemonHasAbility {
  is_hidden: boolean;
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface IAbilities {
  effect_changes: IEffect[];
  effect_entries: IEffect[];
  flavor_text_entries: IFlavorTextEntries[];
  id: number;
  name: string;
  names: INamesAbilities[];
  pokemon: IPokemonHasAbility[];
}

interface IPokemonMove {
  name: string;
  url: string;
}

interface IPokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonData {
  abilities: IPokemonAbilities[];
  moves: IPokemonMove[];
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: IPokemonType[];
  stats: IPokemonStats[];
  weight: number;
}
